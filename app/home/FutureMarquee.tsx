import React from 'react'
import Marquee from 'react-fast-marquee'

const FutureMarquee = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        gradient={false}
        speed={90}
        pauseOnHover={false}
        direction="left"
        delay={0}
        loop={0}
        play={true}
        className="flex overflow-hidden flex-row items-center">
            <div className="flex items-center">
              <p className="text-5xl md:text-8xl font-light tracking-tight text-white/85">/ The Future Starts Now</p>
            </div>
            <div className="flex items-center">
              <p className="text-5xl md:text-8xl font-light tracking-tight text-white/85 mr-5">/ The Future Starts Now</p>
            </div>
            <div className="flex items-center">
              <p className="text-5xl md:text-8xl font-light tracking-tight text-white/85 mr-5">/ The Future Starts Now </p>
            </div>
            <div className="flex items-center">
              <p className="text-5xl md:text-8xl font-light tracking-tight text-white/85 mr-5">/ The Future Starts Now</p>
            </div>
            <div className="flex items-center">
              <p className="text-5xl md:text-8xl font-light tracking-tight text-white/85 mr-5">/ The Future Starts Now</p>
            </div>
            <div className="flex items-center">
              <p className="text-5xl md:text-8xl font-light tracking-tight text-white/85 mr-5">/ The Future Starts Now</p>
            </div>
        </Marquee>
    </div>
  )
}

export default FutureMarquee
