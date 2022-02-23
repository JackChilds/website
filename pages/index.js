import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Navbar from '../components/navbar.js'
import Section from '../components/page_section.js'
import ParticleBackground from '../components/particle_background.js'
import Socials from '../components/socials.js'
import ProjectCard from '../components/project_card.js'

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
    <div className="divider"></div>
    <Section name="About">
      <h3 className="font-extrabold">
        Hey there <span className="waving-hand">👋</span>
      </h3>
      <p>
        I'm a 15 year old, full stack developer from the UK. I make stuff.
      </p>
      <p className="mt-32 flex justify-center">
        <Socials />
      </p>
    </Section>
  </div>

  <div className="divider"></div>

  <Section name="Projects">
    <div className="p-8">
      <ProjectCard projectName="Mock API" href="https://github.com/JackChilds/Mock-API">
        Some information about Mock API
      </ProjectCard>
      <ProjectCard projectName="Bug Reporter" href="https://github.com/JackChilds/Bug-Reporter">
        Some information about Bug Reporter
      </ProjectCard>
      <ProjectCard projectName="Preview In Place" href="https://github.com/JackChilds/Preview-In-Place">
        Some information about Preview In Place
      </ProjectCard>
    </div>
  </Section>
</div>

<Script src="scripts/particles.min.js" strategy="beforeInteractive" />
<Script src="scripts/particles_init.js" />
</>
  )
}
