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
  
So instead I built a solution that works well for me: encode the email address on the server, and decode it client side after a period of time, the benefit being that unless the bot runs the JavaScript code, **and** waits for the delay, they won't be able to scrape the email address. And of course the email address is also hidden from all the source code including all the JS files.

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
But, to save time and effort for you, I have simplified the process and created a small npm package called `data-protect`. The next part of this article will be on using this package in a Next.js environment.

## Using the data-protect package to encode and decode data
First, install the [data-protect package](https://www.npmjs.com/package/data-protect):
```sh
npm i data-protect
```
Here is an example component that I use on my website for the encoding and decoding of the email address:
```js
import React from 'react';

import { DataProtect } from 'data-protect'

export default class ContactEmail extends React.Component {
    constructor(props) {
        super(props)
        this.placeholder = 'loading...'

        // ensure that these options match those found at the bottom of the page that this component is imported from
        this.options = {
            key: props.emailKey,
            x: 8,
            delimiter: ' '
        }

        this.state = {
            email: this.placeholder
        }
    }

    componentDidMount() {
        this.delayTimer = setTimeout(() => {
            this.setState({
                email: DataProtect.decodeData(this.props.encodedEmail, this.options)
            })
        }, this.props.delay)
    }

    componentWillUnmount() {
        clearTimeout(this.delayTimer)
    }

    render() {
        // generates an encoded string and then at runtime a script decodes the string and displays the email address.
        // this is used in an effort to stop bots from reading the email address and sending spam emails.
        return (
            <a href={this.state.email === this.placeholder ? '#' : `mailto:${this.state.email}?subject=${this.props.subject}`}
            className="hover:underline hover:text-gray-300">
                { this.state.email }
            </a>
        )
    }
}
```
The component can then be used like this:
```xml
<ContactEmail encodedEmail={encodedEmail} emailKey={emailKey} subject="I am interested in your work" delay="3000" />
```
With the `encodeEmail` and `emailKey` variables being passed in from a `getStaticProps` function. This is needed so that the email is encoded at build time and does not appear in raw form in the output code.
```js
import {
    DataProtect
} from 'data-protect'
export async function getStaticProps() {
    // a random string
    const key = ((Math.random() + 1).toString(36).substring(2, 9)) + ((Math.random() + 1).toString(36).substring(2, 9));

    return {
        props: {
            encodedEmail: DataProtect.encodeData("example@example.com", {
                key: key,
                x: 8,
                delimiter: ' '
            }),
            emailKey: key
        }
    }
}
```

## The result
<video muted autoplay controls>
    <source src="$assets/result.mp4" type="video/mp4" />
    Unable to show video of result
</video>

## Conclusion
Although this method is not bulletproof it works well enough for me compared to other methods that I have tried.
I hope this was somewhat useful, feel free to comment below and share your thoughts.