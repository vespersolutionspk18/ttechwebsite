"use client";
import React from 'react'
import Marquee from 'react-fast-marquee'
import Sonner from '../components/Sonner'

// Technologies are now passed as props instead of defined here

const TechnologiesMarquee = ({ technologiesData }: { technologiesData: Array<{ text: string; variant: 'white' | 'black' }> }) => {
  return (
    <div
      className="w-full relative"
       style={{
         maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
         WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
       }}
    >
      <Marquee
        gradient={false}
        speed={50}
        direction="left"
        className="flex items-center gap-2"
      >
        {technologiesData.map((tech, index) => (
          <div key={index} className="mx-1">
            <Sonner text={tech.text} variant={tech.variant} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default TechnologiesMarquee