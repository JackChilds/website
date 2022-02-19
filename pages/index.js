import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

import Navbar from './navbar.js'

import 'animate.css'

export default function Home() {
  //bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
  //bg-background
  return (
<div className="h-screen bg-base-300">
  <Head>
    <title>Jack Childs</title>
    <meta name="theme-color" content="#793ef9"></meta>
  </Head>
  
  <Navbar />

  <div className="px-4 font-mono text-center flex-none">

    <h1 className="text-9xl">Hi,</h1>
    <p className="p-4 rounded-xl bg-red-500">
      I'm a full stack developer from the UK.
    </p>

    <a className="btn btn-primary" href="https://github.com/JackChilds" target="_blank">
      Follow me on GitHub
    </a>
  </div>
</div>
  )
}
