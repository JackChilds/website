import React, { Component } from 'react';
import jump from 'jump.js'

function NavItem(props) {
    const classNames = props.isMenu ? 
        'btn btn-ghost text-mono text-xl my-2 w-full' : 
        'btn btn-ghost mx-2 text-mono';

    return (
<>
<button className={classNames} onClick={() => {
    if (props.href.startsWith('#')) 
        jump(props.href)
    else 
        window.location.href = window.location.origin + '/' + props.href
    window.location.hash = props.href.slice(1)
}}>
    { props.text }
</button>
{ props.isMenu ? ( <br /> ) : null }
</>
    )
}

function NavEls(props) {
    return (
    <>
        <NavItem text="About" href="#about"  isMenu={props.isMenu} />
        <NavItem text="Projects" href="#projects" isMenu={props.isMenu} />
        <NavItem text="Blog" href="blog" isMenu={props.isMenu} />
        <NavItem text="Contact" href="#contact" isMenu={props.isMenu} />
    </>
    )
}

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isFirstTime: true
        };
    }
    toggleOpen = (e) => {
        e.preventDefault();

        if (this.dropdownMenu == null) return

        if (this.dropdownMenu.contains(e.target) && this.state.isOpen) return

        this.setState({
            isOpen: ( this.state.isOpen ? false : true ),
            isFirstTime: false
        }, () => {
            if (!this.state.isOpen) {
                window.setTimeout(() => {
                    this.dropdown.classList.add('hidden')
                }, 500)
            }

            if (this.state.isOpen)
                document.addEventListener('click', this.toggleOpen);
            else
                document.removeEventListener('click', this.toggleOpen);
        });

    }
    render() {
        const classNames = 'p-4 fixed top-4 right-4 bg-base-300 shadow text-center rounded-lg text-center flex justify-center items-center shadow-sm shadow-gray-400 ';
        const animations = this.state.isOpen ? 'animate__animated animate__fadeIn animate__faster' : (!this.state.isFirstTime ? 'animate__animated animate__fadeOut animate__faster' : 'hidden');

        return (
<div ref={(element) => {
    this.dropdownMenu = element;
}}>
    <button className="btn btn-ghost btn-circle text-3xl" onClick={this.toggleOpen} aria-label="menu">          
        <i className="bi bi-list"></i>
    </button>
    <div className={classNames + animations} ref={(e) => {
        this.dropdown = e;
    }}>
        <div>
            <NavEls isMenu={true} />
        </div>
    </div>
</div>
        );
    }
}

export default function Navbar() {
    return (
<div className="navbar bg-base-300 border-b-2 border-base-200 p-8 mb-8 flex justify-around animate__animated animate__fadeInDown fixed top-0 left-0 z-999">
    <h1 className="text-2xl font-mono text-base-content">Jack Childs</h1>

    <div className="md:hidden">
        <DropdownMenu />
    </div>

    <div className="hidden md:block">
        <NavEls isMenu={false} />
    </div>
</div>
    )
}