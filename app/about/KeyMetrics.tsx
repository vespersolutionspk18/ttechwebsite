import React from 'react'

const KeyMetrics = () => {
  return (
    <div className="flex p-10 md:px-0  flex-col md:flex-row gap-10 md:gap-16 font-light tracking-tight leading-tight w-full items-center justify-center py-20">
      <div className="flex flex-col md:w-[25%] text-center">
        <p className="text-black/60 mb-4">
        A growing team of 65+ experts including engineers, designers, and strategists dedicated to building digital products.</p>
        <h3 className="text-7xl font-medium text-black">65</h3>
      </div>
      <div className="flex flex-col md:w-[25%] text-center">
        <p className="text-black/60 mb-4">
        Over 200 successful projects launched across diverse industries — each crafted with precision, speed, and purpose.</p>
        <h3 className="text-7xl font-medium text-black">200+</h3>
      </div>
      <div className="flex flex-col md:w-[25%] text-center">
        <p className="text-black/60 mb-4">
        Trusted by 160+ clients globally, from startups to enterprises, who rely on us to drive measurable digital success.</p>
        <h3 className="text-7xl font-medium text-black">160+</h3>
      </div>
    </div>
  )
}

export default KeyMetrics