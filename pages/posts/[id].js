/*
* Jack Childs 2022
* MIT License
*/

import { getAllPostIds, getPostData } from '../../lib/posts'

import Layout from '../../components/post_layout'
import Head from 'next/head'
import Date from '../../components/date'
import Analytics from '../../components/analytics'

export default function Post ({ postData }) {
    return (
<>
<Head>
    <title>{postData.title}</title>
    <meta name="description" content={postData.description} />
    <meta name="author" content="Jack Childs" />
</Head>
<Layout>

<p className="my-4 text-sm">
    <span className="font-bold"><Date dateString={postData.date} /></span>
    <br />
    <span className="italic">By Jack Childs</span>
</p>
<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

</Layout>
<Analytics />
</>
    )
}

export async function getStaticProps({
    params
}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}