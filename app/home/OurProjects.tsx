'use client';
import React, { useRef } from 'react';
import Service from './ServicesSection';
import { motion, useScroll } from 'framer-motion';

// --- Project Data ---
// Using the project data structure you provided
const projects = [
  {
    id: '01',
    title: 'Predictamaint',
    description:
      "Our Client OSDCORB Tyres, a leading tyre manufacturer, faced frequent unplanned equipment downtime...",
    imageUrl: '/assets/grad1.jpg', // Make sure this path is correct
    // Ensure ProjectSection component can handle this array of strings
    technologies: [{ text: 'React', variant: 'white' },
      { text: 'Next.js', variant: 'black' },
      { text: 'TypeScript', variant: 'white' },
      { text: 'Node.js', variant: 'black' },
      { text: 'Next.js', variant: 'black' },
      { text: 'TypeScript', variant: 'white' },
      { text: 'Node.js', variant: 'black' }],
  },
  {
    id: '02',
    title: 'SmartLogix',
    description:
      'A logistics optimization system using route prediction, fleet management, and live tracking analytics.',
    imageUrl: '/assets/grad1.jpg', // Use different images if available
    technologies: [{ text: 'React', variant: 'white' },
      { text: 'Next.js', variant: 'black' },
      { text: 'TypeScript', variant: 'white' },
      { text: 'Node.js', variant: 'black' },
      { text: 'Next.js', variant: 'black' },
      { text: 'TypeScript', variant: 'white' },
      { text: 'Node.js', variant: 'black' }],


  },
  {
    id: '03',
    title: 'InsightPulse',
    description:
      'We helped a healthcare startup analyze large-scale medical data to drive predictive diagnostics.',
    imageUrl: '/assets/grad1.jpg', // Use different images if available
    technologies: [{ text: 'React', variant: 'white' },
      { text: 'Next.js', variant: 'black' },
      { text: 'TypeScript', variant: 'white' },
      { text: 'Node.js', variant: 'black' },
      { text: 'Next.js', variant: 'black' },
      { text: 'TypeScript', variant: 'white' },
      { text: 'Node.js', variant: 'black' }],
  },
  // Add more projects as needed
];
// --- End Project Data ---


const OurProjects = () => {
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
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">Our Projects</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.
        </h5>
      </div>

      {/* STACKED PINNING CONTAINER */}
      <div 
        ref={containerRef} 
        className="relative"
        style={{ height: `${(projects.length * 100) - 20}vh` }}
      >
        {projects.map((project, index) => {
          // Calculate scale based on index position
         // const sectionHeight = 1 / projects.length;
          
          // Calculate scale based on section position
          // This is a simplified version that doesn't use useTransform
          const scale = 1 - (0.15 * (index / (projects.length - 1)));
          
          return (
            <motion.div
              key={index}
              className="sticky top-0 w-full origin-center"
              style={{ 
                scale: scale,
                opacity: 1 - (0.2 * index / projects.length),
                // Reverse the z-index order so later items stack on top
                zIndex: index,
              }}
            >
              {/* Container to center content within the full-screen sticky area */}
              <div className="h-fit w-full flex flex-col md:flex-row items-center justify-center">
                <Service
                  number={`0${index + 1}`}
                  title={project.title}
                  description={project.description}
                  dangerousHTML={true}
                  imageUrl={project.imageUrl}
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

export default OurProjects;
