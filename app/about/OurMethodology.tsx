import React from 'react'
import { Atom, Compass, Layers, Target } from 'lucide-react';

const OurMethodology = () => {
  return (
    <div className="p-5 font-light tracking-tight leading-tight text-black/85">
        <div className="p-5 md:p-10 rounded-2xl bg-white flex flex-col md:flex-row justify-between gap-5 md:gap-0">
            <div className="w-1/5">
                <h2 className="text-3xl md:text-4xl mb-10 md:mb-0">Our Methodology</h2>
            </div>
            <div className="md:w-3/5 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-5 md:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Atom className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Define</h3>
          <p className="group-hover:text-white/90">We start by understanding your business goals and objectives. This includes identifying your target audience, your key metrics, and your desired outcomes.</p>
        </div>

        <div className="p-5 md:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Compass className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Design</h3>
          <p className="group-hover:text-white/90">We translate your goals into clear, intuitive designs that focus on usability, brand alignment, and delivering a seamless user experience.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-5 md:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Layers className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Build</h3>
          <p className="group-hover:text-white/90">We bring designs to life using robust technologies and frameworks, ensuring performance, security, and scalability are embedded at every level.</p>
        </div>

        <div className="p-5 md:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Target className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Refine</h3>
          <p className="group-hover:text-white/90">Post-launch, we fine-tune and optimize your product based on real-world usage, ensuring it continuously evolves to meet new challenges.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default OurMethodology