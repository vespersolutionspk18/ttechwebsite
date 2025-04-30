"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

import TechnologiesMarquee from "./TechnologiesMarquee";



const ProjectSection = ({ number, title, description, imageUrl, technologies }: {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: Array<{ text: string; variant: 'white' | 'black' }>;
}) => {
  return (
    <section className="bg-stone-950 text-white py-2 px-8 md:px-16 relative overflow-hidden group">
        <Separator className="mb-16 bg-stone-700" />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Number and Background Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-[500px] bg-center bg-cover rounded-2xl transform transition-transform duration-500 relative overflow-hidden"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></motion.div>
        </motion.div>

        {/* Right: Title and Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full relative z-10 space-y-8"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-6 items-baseline">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-extralight text-stone-400"
              >
                {number}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-light tracking-tight"
              >
                {title}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-stone-400"
            >
              {description}
            </motion.p>
          </div>
          <div className="w-full">
            <TechnologiesMarquee technologiesData={technologies} />
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ProjectSection;
