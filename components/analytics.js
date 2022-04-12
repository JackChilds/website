import Script from 'next/script';

export default function Analytics () {
    return (
<>
    {
        /* Privacy friendly tracking code, uses https://counter.dev for analytics */ 
    } 
    <Script strategy="afterInteractive" id="analytics-script"
    dangerouslySetInnerHTML={{
        __html: `sessionStorage.getItem("_swa")||0===document.referrer.indexOf(location.protocol+"//"+location.host)||fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"jackchilds",utcoffset:"1"})),sessionStorage.setItem("_swa","1");`
    }}/>
</>
    )
}