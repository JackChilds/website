export default function (props) {
    return (
        <section 
        id={ props.name == undefined ? null : props.name.toLowerCase()} 
        className="mt-16 p-4 font-mono text-xl w-full flex-none">
            {props.name == undefined ? null : (
                <h2 className="text-4xl sm:text-7xl font-extrabold mb-4 text-center">
                    {props.name}
                </h2>
            ) }

            <div className="w-full sm:w-5/6 md:w-4/6 lg:w-1/2 mx-auto">
            {props.children}
            </div>
        </section>
    )
}