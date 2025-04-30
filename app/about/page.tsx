"use client";
import React from 'react'

import Footer from '../components/Footer'
import Hero from './Hero'
import PreMain from './PreMain';
import OurMethodology from './OurMethodology';
import FaqSection from '../home/FaqSection';
import OurStory from './OurStory';
import KeyMetrics from './KeyMetrics';
import OurValues from './OurValues';

const page = () => {
  return (
    <>
    <Hero />
    <PreMain />
   <div id="methodology">
   <OurMethodology />
   </div>
    <KeyMetrics />
    <OurStory />
    <div id="our-values">
    <OurValues />
    </div>
    <FaqSection />
    <Footer />
    </>
  )
}

export default page