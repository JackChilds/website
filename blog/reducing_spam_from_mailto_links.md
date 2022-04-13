---
title: "Reducing spam from mailto links"
date: "2022-04-13"
description: "How I reduce email spam from mailto links and mail forms on my website"
---

# Reducing spam from mailto links

So here it is, my first *actual* blog post.

## Introduction
If you have developed any website that provides a way for users to contact you, it is highly likely that you have had to encounter spam of some kind. In this short post I will show you how I deal with mail spam and the code that I use.

## What kind of works, but just doesn't
Of course it is impossible to stop real humans from sending you spam mail, without making it incredibly difficult for a genuine person to reach out to you. In the past I have tried:
- mail forms so the email address isn't exposed to the end user but instead bots just submit the form themselves
- CAPTCHA type activities which completely destroy the UX
- and honeypot methods that sometimes work, but don't completely work especially as bots get smarter and smarter
  
So instead I built a solution that works well for me: encode the email address on the server, and decode it client side after a period of time.

## The code
There are two parts to this method, first is the encoding of the email address and second is the decoding. 

### Part 1: Encoding
The email encode function:
```js
const encodeEmail = (e) => {
    const b = Buffer.from(e).toString('base64');
    let res = [];
    for (let i = 0; i < b.length; i++) {
        res[i] = b.charCodeAt(i).toString();
    } 
    return res.join('-')
}
```
The encode email function is nothing special, it just obfuscates the email address so that a random bot can't just read the plain email address.
For example, here's what an encoded email address might look like:
```whatever
89-50-57-117-100-71-70-106-100-69-66-113-89-87-78-114-89-50-104-112-98-71-82-122-76-110-82-108-89-50-103-61
```
As you can see, you can't just straight up read the email address.

We can then build the encoding into a React component like this:
```js
export default function ContactEmail() {
    const EMAIL = 'someone@example.com';
    const SUBJECT = 'I am interested in your work'

    const encodeEmail = (e) => {
        const b = Buffer.from(e).toString('base64');
        let res = [];
        for (let i = 0; i < b.length; i++) {
            res[i] = b.charCodeAt(i).toString();
        } 
        return res.join('-')
    }

    return (
        <a data-emailaddress={encodeEmail(EMAIL)} data-subject={SUBJECT}
        className="hover:underline hover:text-gray-300">
            <i className="text-gray-400">
                please wait...
            </i>
        </a>
    )
}
```
[View the file on GitHub](https://github.com/JackChilds/website/blob/eb6919cba25e25374a398f468f0b81594591652b/components/contact_email.js).


### Part 2: Decoding
Decoding the email address is just as easy. In the case of my website, I just use a simple script that looks for all email address links and decodes them after a set amount of time.

Here's the decode function (even smaller than the encode function):
```js
const decodeEmail = (e) => {
    const ascii = e.split('-')
    let res = String.fromCharCode(...ascii)
    return atob(res)
}
```
And then this code can be used to decode all email links on the page:
```js
(function (params) {
    const els = document.querySelectorAll('[data-emailaddress]');

    const decodeEmail = (e) => {
        const ascii = e.split('-')
        let res = String.fromCharCode(...ascii)
        return atob(res)
    }

    window.setTimeout(() => {
        els.forEach (e => {
            const decoded = decodeEmail(e.getAttribute('data-emailaddress'))
            e.innerHTML = decoded
            e.href = 'mailto:' + decoded + '?subject=' + e.getAttribute('data-subject')
        })
    }, params.delay)

})({
    delay: 3000
})
```
The delay can be changed but don't make it too long as your users don't want to wait a long time.
[View the file on GitHub](https://github.com/JackChilds/website/blob/eb6919cba25e25374a398f468f0b81594591652b/public/scripts/main.js).

## The result
<video muted autoplay controls>
    <source src="/assets/posts/reducing_spam_from_mailto_links/result.mp4" type="video/mp4" />
    Unable to show video of result
</video>

## Conclusion
Although this method is not bulletproof it works well enough for me compared to other methods that I have tried.
I hope this was somewhat useful, feel free to comment below and share your thoughts.