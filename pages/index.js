import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Navbar from './navbar.js'
import Section from './page_section.js'

import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  //bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
  //bg-background
  return (
<div className="h-screen bg-base-300 animate__animated animate__fadeIn">
  <Head>
    <title>Jack Childs</title>
    <meta name="theme-color" content="#793ef9"></meta>
  </Head>

  <Navbar />

  <Section>
    <div className="text-center">
      <p>
        I'm a full stack developer from the UK.
      </p>

      <a className="btn btn-primary" href="https://github.com/JackChilds" target="_blank">
        Follow me on GitHub
      </a>
    </div>
    
  </Section>

  <Section name="About">
    <h3 className="font-extrabold">
      Hey there, I'm Jack <span className="waving-hand">👋</span>
    </h3>
    <p>
      I'm a 15 year old, full stack developer from the UK.
    </p>
  </Section>
</div>
  )
}
