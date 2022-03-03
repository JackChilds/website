import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <meta name="theme-color" content="hsl(223, 14%, 10%)" />
                <meta name="description" content="Jack Childs. A 15 year old, full stack developer from the UK." />


                {/* Privacy friendly tracking code, uses https://counter.dev for analytics */}
                <script>if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"jackchilds",utcoffset:"1"}))};sessionStorage.setItem("_swa","1");</script>
            </Head>
            <body className="font-mono">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}