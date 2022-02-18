import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
        <Html>
            <Head />
            <body className="dark:from-slate-800 dark:to-slate-900 bg-gradient-to-br from-slate-100 to-slate-300 dark:text-gray-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}