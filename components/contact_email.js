/*
* Jack Childs 2022
* MIT License
*/

/*
* This component is used in conjunction with a getStaticProps
* function that encodes the email address at build time, then
* it is decoded here at runtime to hide the email address from
* the source code and hopefully prevent spam.
*/

import React from 'react';

import { DataProtect } from 'data-protect'

export default class ContactEmail extends React.Component {
    constructor(props) {
        super(props)
        this.placeholder = 'loading...'

        // ensure that these options match those used to encode the email address
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
        return (
            <a href={this.state.email === this.placeholder ? '#' : `mailto:${this.state.email}?subject=${this.props.subject}`}
            className="hover:underline hover:text-gray-300">
                { this.state.email }
            </a>
        )
    }
}
