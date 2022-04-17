/*
* Jack Childs 2022
* MIT License
*/

import React from 'react';

import { DataProtect } from 'data-protect'

export default class ContactEmail extends React.Component {
    constructor(props) {
        super(props)
        this.placeholder = 'loading...'
        this.options = {
            key: ((Math.random() + 1).toString(36).substring(2,9)) + ((Math.random() + 1).toString(36).substring(2,9))// a random string for the encryption and decryption process
        }

        this.state = {
            // encode the email and store in a variable
            encoded: DataProtect.encodeData ("contact@jackchilds.tech", this.options),
            email: this.placeholder
        }
    }

    componentDidMount() {
        this.delayTimer = setTimeout(() => {
            this.setState({
                email: DataProtect.decodeData(this.state.encoded, this.options)
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
