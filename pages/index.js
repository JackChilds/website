import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Navbar from '../components/navbar.js'
import Section from '../components/page_section.js'
import ParticleBackground from '../components/particle_background.js'

import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return ( 
<>
<div className="animate__animated animate__fadeIn">
  <Head>
    <title>Jack Childs</title>
    <meta name="theme-color" content="#793ef9"></meta>
  </Head>

  <Navbar />

  <ParticleBackground />
  
  {/* Set margin top to 100vh to offset from the background that is positioned absolutely. */}
  <div className="mt-[100vh]">
    <Section name="About">
      <h3 className="font-extrabold">
        Hey there <span className="waving-hand">👋</span>
      </h3>
      <p>
        I'm a 15 year old, full stack developer from the UK. I make stuff.
      </p>
    </Section>
  </div>
</div>

<Script src="scripts/particles.min.js" strategy="beforeInteractive" />
<Script src="scripts/particles_init.js" />
</>
  )
}
