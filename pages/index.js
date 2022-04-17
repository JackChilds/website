/*
* Jack Childs 2022
* MIT License
*/

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Navbar from '../components/navbar.js'
import Section from '../components/page_section.js'
import ParticleBackground from '../components/particle_background.js'
import Socials from '../components/socials.js'
import ProjectCard from '../components/project_card.js'
import ContactEmail from '../components/contact_email.js'
import Copyright from '../components/copyright.js'
import Analytics from '../components/analytics.js'
import FooterLinks from '../components/footer_links.js'

import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return ( 
<>
<div className="animate__animated animate__fadeIn">
  <Head>
    <title>Jack Childs</title>
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
        I&apos;m a 15 year old, self-taught programmer and a high school student from the UK. I make stuff.
      </p>
    </Section>
  </div>

  <div className="divider"></div>

  <Section name="Projects">
    <p className="p-6 m-3">
      Here are some of my projects that I have worked on. To view them all, please refer to <a href="https://github.com/JackChilds" className="hover:underline" target="_blank" rel="noreferrer">my GitHub page</a>.
    </p>
    <div className="pt-8">
      <ProjectCard projectName="Mock API" href="https://github.com/JackChilds/Mock-API">
        Quickly create Mock API responses and deploy them to Vercel.
      </ProjectCard>
      <ProjectCard projectName="Bug Reporter" href="https://github.com/JackChilds/Bug-Reporter">
        Quickly create bug reports for your website with useful information for debugging.
      </ProjectCard>
      <ProjectCard projectName="Math Captcha" href="https://github.com/JackChilds/MathCaptcha">
        A simple maths based captcha tool.
      </ProjectCard>
      <ProjectCard projectName="JSMYSQLDB" href="https://github.com/JackChilds/jsmysqldb">
        Read data from mysql databases with pure Javascript.
      </ProjectCard>
    </div>
  </Section>

  <div className="divider"></div>

  <Section name="Contact">
    <p className="text-center">
      Reach out to me: <ContactEmail subject="I am interested in your work" delay="3000" />.
    </p>

  </Section>

  <div className="px-8 mx-4 -mt-48">
    <p className="mt-64 flex justify-center">
      <Socials />
    </p>

    <FooterLinks/>
    
    <Copyright />
  </div>
</div>

<Script src="scripts/particles.min.js" strategy="beforeInteractive" />
<Script src="scripts/particles_init.js" />

<Analytics />
</>
  )
}
