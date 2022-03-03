import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <meta name="theme-color" content="hsl(223, 14%, 10%)" />
                <meta name="description" content="Jack Childs. A 15 year old, full stack developer from the UK." />
            </Head>
            <body className="font-mono">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}