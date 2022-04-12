/*
* Jack Childs 2022
* MIT License
*/

export default function PageSection (props) {
    return (
<section className="mt-16 font-mono text-xl w-full flex-none relative py-64 px-4" id={ props.name.toLowerCase() }>
    <h2 className="text-4xl sm:text-7xl font-extrabold mb-8 text-center">
        {props.name}
    </h2>

    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-1/2 mx-auto">
        {props.children}
    </div>
</section>
    )
}