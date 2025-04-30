
import React from 'react'

const LongerButton = () => {
  return (
    <div className="flex flex-col w-full font-light tracking-tight">
        <div className="bg-black h-[1.5px]"></div>
        <div className="flex px-2 items-center flex-row gap-5 hover:gap-0 transition-all hover:justify-between py-2">
        <p className="text-black text-xl">Learn More</p>
        <div>icon here</div>
        </div>
        <div className="bg-black h-[1.5px]"></div>
        
    </div>
  )
}

export default LongerButton