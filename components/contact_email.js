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
