export default function (props) {
    return (
        <div className="p-6 m-3 relative cursor-pointer hover:text-base-300 hover:-translate-y-2 text-white duration-300 group">
            <div className="rounded-lg bg-gradient-to-tr from-violet-500 to-orange-300 duration-300 absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-0 group-hover:opacity-100"></div>


            <h3 className="font-extrabold text-2xl">{props.projectName}</h3>

            <p className="text-md">{props.children}</p>

            <p className="mt-4">
                <a href={props.href} className="py-1.5 px-3 rounded-full shadow-[0_0_0_1px_rgb(255,255,255)] text-xs hover:bg-white hover:text-black duration-150" target="_blank">
                    View Project
                </a>
            </p>
        </div>
    )
}
