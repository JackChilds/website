/*
* Jack Childs 2022
* MIT License
*/

import { Utterances } from 'utterances-react-component'
import Head from 'next/head'
import 'highlight.js/styles/github-dark.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Layout({ children }) {
    return (
<>
<Head>
    <base target="_blank" />
</Head>

<style global jsx>{`
.code-theme-fix {
    /* Need this to overide .prose, even when using .no-prose on code highlighting element colour is still messed up */
    color: #c9d1d9 !important
}
video {
    margin:auto;
}
`}</style>

<div className="m-auto p-3 w-full sm:w-10/12 md:w-4/5 lg:w-3/5 xl:w-1/2">
    <p className="mb-4">
        <a className="hover:text-slate-400 text-3xl" href="/blog" title="Go back to the blog page" target="_self">
            <i className="bi bi-arrow-left" aria-label="All Blogs"></i>
        </a>
    </p>

    <article className="prose">{children}</article>

    <h2 className="mt-20 mb-2 text-2xl">Comment below 👇</h2>
    <div className="max-w-prose">
        <Utterances
        repo="JackChilds/website"
        theme="github-dark"
        issueTerm="url"
        label="post-comments"
        />
    </div>
</div>
</>
    )
}