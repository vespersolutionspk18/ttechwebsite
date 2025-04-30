"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastHoveredRef = useRef<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    if (lastHoveredRef.current !== index) {
      setIsAnimating(prev => !prev);
      lastHoveredRef.current = index;
    }
  };

  return (
    <div className="flex flex-col tracking-tight font-light text-center items-center justify-between pb-5 pt-24 px-5 gap-40 m-5 rounded-2xl bg-white relative">
      <div id="top half here" className="flex flex-col md:flex-row px-5  md:px-10">
        <div ref={containerRef} className="w-full md:w-1/6 pr-10 gap-24  flex-col justify-between relative md:h-[300px] hidden md:block">
          <div className="px-10">
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 rounded-xl bg-[url('/assets/grad1.jpg')] bg-cover bg-center"
              animate={{ top: isAnimating ? `${containerHeight - 96}px` : "0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-10 w-24 h-24 rounded-xl bg-[url('/assets/grad1.jpg')] bg-cover bg-center"
              animate={{ bottom: isAnimating ? `${containerHeight - 96}px` : "0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div className="w-full md:w-4/6 flex flex-col gap-10">
          <h5 className="text-lg md:text-xl text-black/60">How We Make A Difference</h5>
          <h2 className="text-3xl md:text-5xl text-black/85">
            We&apos;re not just a tech company — We build{" "}
            <b>scalable, smart, and stunning</b> digital solutions that drive{" "}
            <b>real business growth</b>
          </h2>
        </div>
        <div className="w-full md:w-1/6 gap-24 flex flex-col justify-between relative md:h-[300px]">
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 rounded-xl bg-[url('/assets/grad1.jpg')] bg-cover bg-center hidden md:block"
            animate={{ top: isAnimating ? `${containerHeight - 96}px` : "0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-10 w-24 h-24 rounded-xl bg-[url('/assets/grad1.jpg')] bg-cover bg-center hidden md:block"
            animate={{ bottom: isAnimating ? `${containerHeight - 96}px` : "0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(0)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            Tailor-Made Solutions
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            We don&apos;t believe in one-size-fits-all. Every project we take on
            is custom-built to meet your exact needs — scalable, secure, and
            future-proof from day one.
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            Speed Oriented
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            Time is money — and we don&apos;t waste either. Our agile delivery model ensures you get your MVP or full-scale product to market fast, without ever sacrificing quality.
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(2)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            Elite Engineering Talent
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            Our developers are not just coders — they&apos;re problem-solvers and innovators, committed to delivering nothing short of world-class software.
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(3)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            AI-First Thinking
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            From smart automation to deep learning models, we bake AI into the foundation of our solutions — giving your business a strategic edge from the start.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;
