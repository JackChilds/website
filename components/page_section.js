export default function (props) {
    return (
<section className="mt-16 p-4 font-mono text-xl w-full flex-none relative py-64">
    <h2 className="text-4xl sm:text-7xl font-extrabold mb-4 text-center w-screen" 
    id={ props.name.toLowerCase() }>
        {props.name}
    </h2>

    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-1/2 mx-auto">
        {props.children}
    </div>
</section>
    )
}