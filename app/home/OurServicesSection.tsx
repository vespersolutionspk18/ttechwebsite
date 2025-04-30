'use client';
import React, { useRef } from 'react';
import Service from './ServicesSection';
import { motion, useScroll } from 'framer-motion';

// --- Project Data ---
// Using the project data structure you provided
const services = [
  {
    title: "Software Development",
    image: "/assets/pex.jpg",
    description: "From strategy to execution, we deliver end-to-end technology solutions designed to solve real-world business challenges."
  },
  {
    title: "Cloud & DevOps Solutions",
    image: "/assets/grad1.jpg",
    description: "Modernize your infrastructure and streamline development with our expert cloud and DevOps services."
  },
  {
    title: "AI & Machine Learning",
    image: "/assets/pex.jpg",
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights from your data.Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.<br></br>Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results."
  }
]
// --- End Project Data ---


const OurServices = () => {
  const containerRef = useRef(null);
  
  // Initialize scroll functionality
  useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div className="p-5">
      <div className="bg-white p-5 rounded-2xl">
      <div className="w-full font-light tracking-tight leading-tight bg-white flex flex-col gap-5 md:p-5 text-black/85">
      {/* HEADING */}
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg mt-10 mb-5 md:mt-0 md:mb-0 text-center md:text-left md:text-xl flex-shrink-0">Our Services</h2>
        <h5 className="text-3xl p-2 md:p-0 text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        From strategy to execution, we deliver end-to-end technology solutions designed to solve real-world business challenges, enhance operational efficiency, and drive sustainable growth.
        </h5>
      </div>

      {/* STACKED PINNING CONTAINER */}
      <div 
        ref={containerRef} 
        className="relative"
        style={{ height: `${(services.length * 100) - 20}vh` }}
      >
        {services.map((service, index) => {
          // Calculate scale based on index position
        //  const sectionHeight = 1 / services.length;
          
          // Calculate scale based on section position
          // This is a simplified version that doesn't use useTransform
          const scale = 1 - (0.15 * (index / (services.length - 1)));
          
          return (
            <motion.div
              key={index}
              className="sticky top-0 w-full origin-center"
              style={{
                scale: scale,
                opacity: 1 - (0.2 * index / services.length),
                // Reverse the z-index order so later items stack on top
                zIndex: index,
                // Add padding to create space between items
                paddingTop: `${index * 2}vh`,
              }}
            >
              {/* Container to center content within the full-screen sticky area */}
              <div className="h-fit w-full flex items-center justify-center">
                <Service
                  number={`0${index + 1}`}
                  title={service.title}
                  description={service.description}
                  dangerousHTML={true}
                  imageUrl={service.image}
                />
              </div>
            </motion.div>
          );
        })}
      </div> {/* End STACKED PINNING CONTAINER */}
      
      {/* Content AFTER the sticky sections */}
      {/* Added margin-top for spacing */}
      
    </div>
    </div>
    </div>
  );
};

export default OurServices;
