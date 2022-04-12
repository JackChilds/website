import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <meta name="theme-color" content="hsl(223, 14%, 10%)" />
                <meta name="description" content="Jack Childs. I'm a 15 year old, self-taught programmer and high school student from the UK." />
            </Head>
            <body className="font-mono">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}