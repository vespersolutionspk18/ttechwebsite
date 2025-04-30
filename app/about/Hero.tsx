"use client";
import React from 'react'
import Header from '../components/Header'
import Spline from '@splinetool/react-spline'


const Hero = () => {
  return (
    <div className="relative m-5 rounded-2xl overflow-hidden h-[55vh] md:h-[75vh]">
      <div className="absolute inset-0 z-0 scale-130 md:scale-165 transform-gpu">
        <Spline
          scene="https://prod.spline.design/5e6w78tcrTehiljx/scene.splinecode"
        />
      </div>
      <div className="relative h-full z-10 flex flex-col justify-between p-5">
        <Header />
        <div className="flex flex-col lg:flex-row justify-between lg:mb-10">
          <div className="lg:w-[50%] px-5 lg:px-10 flex flex-col justify-end gap-8">
            <h1 className="text-[10vw] text-white font-light tracking-tight leading-tighter">
              About Us
            </h1>
           
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero