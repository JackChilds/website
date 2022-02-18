import Link from 'next/link'

function NavLink(props) {
    return (
        <a href={props.href} className="font-sans p-1 text-md font-light rounded-md hover:text-sky-600  duration-75">
            {props.text.toUpperCase()}
        </a>
    )
}

export default function navbar(props) {
    return (
        <div className="pr-4 mb-4 font-sans flex justify-center border-b-2 border-b-gray-200 dark:border-b-gray-700 gap-4">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/projects" text="Projects" />
            <NavLink href="/contact" text="Contact" />
        </div>
    )
}