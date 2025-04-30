import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-5 px-10 font-light tracking-tight leading-tight">
      <div className="mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-30">
        <div className="flex flex-col gap-5 md:w-[40%]">
          <h5 className="text-2xl text-black leading-[1.1]">Embrace the future of technology with our comprehensive skillset.</h5>
          <div className="flex flex-row mb-10 md:mb-0 gap-5 text-md text-stone-600">
            <h5>info@nexusmindstech.com</h5>
            <h5>+1 (754) 5368 553</h5>
          </div>
        </div>
        <div className="flex  gap-5 justify-end   md:w-[60%] flex-row">
        <div className="flex flex-col md:w-1/3 text-black text-2xl">
        <Link href="/">
          <h5 className="hover:text-stone-600">Home</h5>
        </Link>
        <Link href="/about">
          <h5 className="hover:text-stone-600">About</h5>
        </Link>
        <Link href="/services">
          <h5 className="hover:text-stone-600">Services</h5>
        </Link>
        <Link href="/#projects">
          <h5 className="hover:text-stone-600">Projects</h5>
        </Link>
        <Link href="/about#methodology">
          <h5 className="hover:text-stone-600">Methodology</h5>
        </Link>
        <Link href="/contact">
          <h5 className="hover:text-stone-600">Contact</h5>
        </Link>
        
        </div>
        <div className="flex flex-col md:w-1/3 text-black text-2xl">
        <Link href="/services">
          <h5 className="hover:text-stone-600">Software Development</h5>
        </Link>
        <Link href="/services">
          <h5 className="hover:text-stone-600">Web Development</h5>
        </Link>
        <Link href="/services">
          <h5 className="hover:text-stone-600">Mobile Development</h5>
        </Link>
        <Link href="/services">
          <h5 className="hover:text-stone-600">AI & ML Consulting</h5>
        </Link>
        <Link href="/services">
          <h5 className="hover:text-stone-600">ERP Consulting</h5>
        </Link>
        <Link href="/services">
          <h5 className="hover:text-stone-600">Cloud Consulting</h5>
        </Link>
        
        </div>
        </div>
       </div>
        <div className="mt-10">
          <Image 
            src="/assets/nexusfooterlogo.svg"
            alt="Nexus Footer Logo"
            width={300}
            height={100}
            className="w-auto h-auto [filter:drop-shadow(-1.5px_-1.5px_0_rgba(0,0,0,0.9))_drop-shadow(1.5px_1.5px_0_rgba(255,255,255,0.4))_invert(0.1)_brightness(2.23)]"
            priority
          />
        </div>
        <div className="pt-10 pb-5">
          <Separator />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-stone-600">
          <div className="flex gap-3 md:gap-0 md:space-x-6">
            <span>© NEXUS.MINDS</span>
            <Link href="/privacy" className="hover:text-stone-900">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-stone-900">TERMS & CONDITIONS</Link>
          </div>
          <div className="flex gap-3 md:gap-0 md:space-x-6">
            <Link href="https://www.instagram.com/nexus.mindstechnologies/" className="hover:text-stone-900">INSTAGRAM</Link>
            <Link href="https://linkedin.com" className="hover:text-stone-900">LINKEDIN</Link>
            <Link href="https://twitter.com" className="hover:text-stone-900">X(TWITTER)</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer