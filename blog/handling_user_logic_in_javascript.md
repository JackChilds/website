---
title: "Handling user logic in javascript"
date: "2022-05-22"
description: "Running unknown code safely on a user's device"
---

# Handling user logic in javascript
a  braindump and devlog (sort of)

## Introduction
I am currently working on a startup idea called PureForms with a goal of creating an intuitive way for both developers and non-technical users to create forms with advanced (but clear) logic, all for a low price. You can add yourself to the waitlist by entering your email on our website: [pureforms.net](pureforms.net).

Throughout the planning and design stages of the product, we (me and a [friend](https://about.v-thomas.me/)) decided that we wanted to handle user logic in a similar way to that of Excel's or Google Sheet's – the user writes some logic in code that determines an action taken by the application.

I am writing this post because I could not find resources online showing people how to go about implementing similar logic systems to Excel, so with the help of some libraries I will show you how to do exactly that whilst keeping yourself safe from code injection attacks.

## But why build PureForms?
Based on my own experience and a (very) small amount of research asking developers what they liked and disliked about the popular application called Typeform (they offer a form builder that is similar to what we want to achieve). One of the main dislikes – aside from the cost – was **the complexity of adding logic to forms**.

Typeform's logic is difficult from a UI point of view, but even worse for developers using the Create API. For example, here is their example 'logic jump':
```json
{
   "logic":[
      {
         "type":"field",
         "ref":"ref_trigger_field",
         "actions":[
            {
               "action":"jump",
               "details":{
                  "to":{
                     "type":"field",
                     "value":"ref_field_leads_to"
                  }
               },
               "condition":{
                  "op":"equal",
                  "vars":[
                     {
                        "type":"field",
                        "value":"ref_another_field"
                     },
                     {
                        "type":"constant",
                        "value":10
                     }
                  ]
               }
            }
         ]
      }
   ]
}
```
**32 LINES!!!** - madness!
It's an unclear, over-complicated, mess of brackets that could be simply replaced with a tiny bit of JS code that could run on the client.

With PureForms, as well as creating a greate UX in our form builder, we want to also prioritise the DX and want to make it as simple as possible for developers to use our API. This is why we are building an SDK that simplifies the code for developers.

Here's a small example of what we want to achieve.
```js
function doSomeLogic ({ minAge }) {
    if ($field.value > minAge) {
        $form.to('old-enough')
    } else {
        $form.end('end-screen-1')
    }
}
/* When defining the form 'block' */
// ...
{
    after: {
        func: doSomeLogic,
        // you can define custom props here
        // that will be sent to the function
        // at runtime
        props: {
            minAge: 13
        }
    }
} 
```
**15 LINES!!!** – and even more logic than in the Typeform example.

The logic can be written entirely in Javascript so it can be tested and debugged on the developer's machine.

## But how?
Of course – unless you have been living under a rock – you will have realised that executing JS on other people's computers is a MAJOR security risk. This is why *alternatives* such as `eval` or `new Function ()` **cannot be used**. Also, iframes give too much access to the user's browser and with all of these solutions it is difficult/impossible to check for memory bombs or infinite loops in the code.

That's why I'm using an excellent library called [JS-Interpreter](https://github.com/NeilFraser/JS-Interpreter). In short, this library creates a sandboxed JS environment that the user's code can safely run within, the code cannot access any browser APIs, the DOM or any other code unless you allow it to do so.

Here's some of the code that could be used to run the example SDK code above.

'Processing' the function:
```js
function processFunction (func, props) {
    // by assigning the function to a variable,
    // it can be called later in the code without
    // the user having to specify the function name
    // or by creating a fancy RegEx.
    let code = "var __f = " + func

    // the JS-Interpreter library only supports es2015,
    // for es6 and above features, Babel can be used to
    // transpile code. This bit should be done server-side 
    // though because Babel is a (very) large library.
    code = Babel.transform(code, {
        presets: ['es2015']
    }).code + " __f(JSON.parse('" + props + "'));"

    // returns the transpiled code
    return code
}
```

Running the code:
```js
function runCode(code) {
    function initFuncs(interpreter, scope) {
        const consoleWrapper = {
            log: window.console.log.bind(window.console, '%s'),
            error: window.console.error.bind(window.console, '%s'),
            info: window.console.info.bind(window.console, '%s'),
            warn: window.console.warn.bind(window.console, '%s')
        }
        // give access to part of the console
        interpreter.setProperty(scope, 'console', interpreter.nativeToPseudo(
            consoleWrapper));
    }

    const interpreter = new Interpreter(code, initFuncs);

    // to protect against infinite loops and memory bombs, the code is run step by step and stopped after 10 seconds.
    function nextStep(i, startTime) {
        if (Date.now() - startTime > 10000) {
            console.error(`Code execution timed out after 10 seconds and ${i} steps.`)
            return
        }

        if (interpreter.step())
            window.setTimeout(() => {
                nextStep(i + 1, startTime)
            }, 0)
        else
            console.log(`Code execution finished in ${i} steps and took ${Date.now() - startTime} ms.`)
    }
    nextStep(0, Date.now())
}
```

For a full demo of the code, [click here]($assets/demo.html). <a href="$assets/demo.html" download="handling_user_logic_in_javascript">Download the demo</a>.

## Conclusion
To conclude, by letting users (and developers) create logic with JS, it drastically improves the DX and makes it simpler to build advanced logic.

Yes, this method is slow (around 200x slower than JS) but for small amounts of logic it really isn't an issue. But what's more important is that the logic can be safely executed on users' devices.

I hope you this post is helpful to you, comment and let me know what you think!

Want something else to read, check out [this post from back in April](reducing_spam_from_mailto_links). To keep up with this blog (I post about once a month) then [follow me on GitHub](https://github.com/JackChilds).