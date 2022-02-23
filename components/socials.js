function SocialLink (props) {
    return (
<>
<a href={props.href} className="text-slate-500 hover:text-slate-200 duration-200 text-3xl m-3" target="_blank">
    {props.children}
</a>
</>
    )
}

export default function () {
    return (
<>
<SocialLink href="https://github.com/JackChilds">
    <i className="bi bi-github"></i>
</SocialLink>
<SocialLink href="https://dribbble.com/JackChilds">
    <i className="bi bi-dribbble"></i>
</SocialLink>
</>
    )
}