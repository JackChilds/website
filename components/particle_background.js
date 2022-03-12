import jump from 'jump.js'
export default function ParticleBackground () {
    return (
<div className="h-screen absolute top-0 left-0 right-0 -z-10">
  <div id="particles-container" className="w-full h-screen bg-base-300"></div>

  <div 
  className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-base-300 shadow-[0_0_5px_4px_rgba(10,10,10,0.3)] flex justify-center items-center text-center color-white p-8 cursor-pointer select-none" 
  onClick={() => {jump('#about')}}
  >
    <div className="font-extrabold text-gradient bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 animate-gradient-x">

      <h1 className="text-2xl sm:text-4xl text-gradient">
        Hi, I&apos;m Jack
      </h1>
      <h2 className="text-md sm:text-xl mt-2 text-gradient">
        Scroll Down
      </h2>

    </div>
  </div>
</div>
    )
}