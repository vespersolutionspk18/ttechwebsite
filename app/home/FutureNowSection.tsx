import React from 'react'
import Spline from '@splinetool/react-spline/next'
import FutureMarquee from './FutureMarquee'

const FutureNowSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" relative h-[620px] md:h-screen overflow-hidden" id="spline here">
        <Spline
          className="absolute inset-0 w-full h-full sm:scale-100 sm:translate-x-0"
          style={{ transform: 'scale(1.4) ' }}
          scene="https://prod.spline.design/ubI5i3wBPrOoZjHc/scene.splinecode"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <FutureMarquee />
        </div>
      </div>
    </div>
  )
}

export default FutureNowSection
