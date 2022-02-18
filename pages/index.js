import Image from 'next/image'
import React from 'react'

import Navbar from './navbar.js'

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container px-4 font-sans">
        <div className="text-huge">
          <h1 className="font-bold text-center text-gradient bg-gradient-to-r from-sky-700 to-pink-400 grid grid-cols-1">
            I'm Jack
          </h1>
        </div>

        <p>
            I'm a full stack developer from the UK.
          </p>
      </div>
    </div>
  )
}
