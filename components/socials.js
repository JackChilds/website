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
<SocialLink href="https://thefullstack.network/u/Jack" label="thefullstack">

<svg width="32" height="32" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g transform="matrix(84.2689,0,0,84.2689,-17136.8,-29062.6)">
        <g transform="matrix(12,0,0,12,203.585,355.155)">
            <path d="M0,-0.35L0.35,-0.7L0.425,-0.625L0.15,-0.35L0.35,-0.15L0.625,-0.425L0.7,-0.35L0.35,-0L0,-0.35ZM0.975,-0.35L0.625,-0L0.55,-0.075L0.825,-0.35L0.625,-0.55L0.35,-0.275L0.275,-0.35L0.625,-0.7L0.975,-0.35Z"/>
        </g>
    </g>
</svg>

</SocialLink>
</>
    )
}