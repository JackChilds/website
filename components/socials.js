function SocialLink (props) {
    return (
<>
<a 
href={props.href} 
aria-label={props.label}
className="text-slate-300 hover:text-slate-50 duration-200 text-3xl m-3" 
target="_blank"
rel="noreferrer">
    {props.children}
</a>
</>
    )
}

export default function Socials () {
    return (
<>
<SocialLink href="https://github.com/JackChilds" label="GitHub">
    <i className="bi bi-github"></i>
</SocialLink>
<SocialLink href="https://dribbble.com/JackChilds" label="Dribbble">
    <i className="bi bi-dribbble"></i>
</SocialLink>
</>
    )
}