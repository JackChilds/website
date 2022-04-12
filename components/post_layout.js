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
<div className="m-auto p-3 w-full sm:w-10/12 md:w-4/5 lg:w-3/5 xl:w-1/2">
    <p className="mb-4">
        <a className="hover:text-slate-400 text-3xl" href="/blog" title="Go back to the blog page" target="_self">
            <i className="bi bi-arrow-left" aria-label="All Blogs"></i>
        </a>
    </p>

    <article className="prose">{children}</article>

    <h2 className="mt-20 mb-2 text-2xl">Comment below 👇</h2>
    <Utterances
    repo="JackChilds/website"
    theme="github-dark"
    issueTerm="url"
    label="post-comments"
    />
</div>
</>
    )
}