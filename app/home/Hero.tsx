import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className="relative m-5 rounded-2xl overflow-hidden h-[95vh]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform-gpu"
          src="/assets/herovid.m4v"
        />
      </div>
      <div className="relative h-full z-10 flex flex-col justify-between p-5">
        <Header />
        <div className="flex flex-col lg:flex-row justify-between lg:mb-10">
          <div className="lg:w-[50%] px-5 lg:px-10 flex flex-col justify-end gap-8">
            <h1 className="text-4xl lg:text-7xl text-white font-light tracking-tight leading-tighter">
              Transforming tech solutions for a new digital age
            </h1>
            <p className="text-white/80 text-lg lg:text-xl font-light lg:mt-2">
              Unlock the power of modern technology: efficient, streamlined, and built for a digital-first world.
            </p>
            <div className="flex flex-row gap-3 mb-7 lg:mb-0">
              <Button variant="white" route="/services" text="Services"/>
              <Button variant="frost" route="/about" text="Learn More" icon/>
            </div>
          </div>
          <div id="form here" className="lg:w-[30%] rounded-2xl bg-white mx-0 lg:mx-10 flex flex-col p-5 gap-3 lg:gap-5">
            <h2 className="text-xl lg:text-3xl font-light tracking-tight leading-tighter">
              Request a Professional Quote Today
            </h2>
            <p className="text-stone-500 text-sm lg:text-md font-light">
              Get your personalized estimate in just a few clicks — it&apos;s fast, easy, and completely free
            </p>
            <form className="flex flex-col gap-2 lg:gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
              />
              <Button variant="black" route="/" text="Get an Estimate" icon />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
