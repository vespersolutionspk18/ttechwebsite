import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="w-full bg-white/5 backdrop-blur-sm border-t border-b border-white/10">
      <Marquee
        gradient={false}
        speed={90}
        pauseOnHover={false}
        direction="left"
        delay={0}
        loop={0}
        play={true}
        className="flex flex-row items-center">
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ Enterprise Software Development</p>
            </div>
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ AI & ML Consulting</p>
            </div>
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ Web Development</p>
            </div>
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ Cloud Consulting</p>
            </div>
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ Mobile Development</p>
            </div>
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ IoT Solutions</p>
            </div>
            <div className="flex items-center mr-16">
              <span className="text-3xl md:text-5xl text-black mr-10">•</span>
              <p className="text-2xl md:text-4xl font-light tracking-tight text-black">/ Hardware Solutions</p>
            </div>
      </Marquee>
    </div>
  )
}

export default MarqueeComponent
