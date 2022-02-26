export default function Copyright () {
    return (
<>
    <p className="text-center py-4 text-slate-300">
        Copyright Jack Childs {new Date().getFullYear()}
        <br />
        MIT License
        <br />
        <a href="https://github.com/JackChilds/website" target="_blank" rel="noreferrer" className="hover:underline hover:text-slate-50">
            View code on GitHub
        </a>
    </p>
</>
    )
}