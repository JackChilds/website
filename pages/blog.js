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

        <ul>
            {allPostsData.map(({ id, date, title, description }) => (
                <li className="my-1" key={id}>
                    <a href={'posts/' + id}>
                        <h4>{title}</h4>
                    </a>
                    <p className="-mt-1">
                        {description}
                        <br />
                        <span className="font-light"><Date dateString={date} /></span>
                    </p>
                </li>
            ))}
        </ul>
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