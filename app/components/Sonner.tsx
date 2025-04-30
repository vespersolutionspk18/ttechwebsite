import React from 'react'

interface SonnerProps {
  text: string
  variant: 'white' | 'black'
}

const Sonner = ({ text, variant }: SonnerProps) => {
  return (
    <div className={`rounded-full py-1 px-3 font-light tracking-tight ${variant === 'white' ? 'bg-white text-black border border-white' : 'bg-stone-900 text-white border border-stone-800'}`}>
        <p className="text-lg">{text}</p>
    </div>
  )
}

export default Sonner