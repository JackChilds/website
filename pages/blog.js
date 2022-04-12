/*
* Jack Childs 2022
* MIT License
*/

import Head from 'next/head'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Analytics from '../components/analytics';

export default function Blog({ allPostsData }) {
    return (
<>

<div className="m-auto px-3 py-16 w-full sm:w-10/12 md:w-4/5 lg:w-3/5 xl:w-1/2 prose">
    <Head>
        <title>Blog</title>
    </Head>

    <p>
        <a className="hover:text-slate-400 text-3xl" href="/" title="Go back to the homepage">
            <i className="bi bi-arrow-left" aria-label="Home"></i>
        </a>
    </p>
    
    <div className="w-full p-8 rounded-lg bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-slate-900 text-4xl">
        <h1 className="my-4">Blog</h1>
    </div>

    <div>
        <h2>Blog Posts</h2>

        {allPostsData.map(({ id, date, title, description }) => (
            <a href={'posts/' + id} className="no-underline my-2" key={id}>
                <div className="px-3 py-4 rounded-xl hover:bg-rose-900 duration-300 group hover:-skew-y-3">
                    <h4 className="mt-0 text-xl">{title}</h4>
                    <p className="-mt-1 border-l-2 border-slate-400 pl-4 mb-0 group-hover:border-rose-400">
                        {description}
                        <br />
                        <span className="italic"><Date dateString={date} /></span>
                    </p>
                </div>
            </a>
        ))}
    </div>
</div>

<Analytics />

</>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}