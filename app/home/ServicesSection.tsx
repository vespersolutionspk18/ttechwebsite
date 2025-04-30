"use client";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Button from "../components/Button";

interface ServiceProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  dangerousHTML?: boolean;
  
}
const Service = ({ number, title, description, imageUrl, dangerousHTML }: ServiceProps) => {
  return (
    <section className="text-black bg-white px-4 md:px-5 relative overflow-hidden group">
      <Separator className="my-10 h-[]" />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
            className="w-full h-[300px] md:h-[500px] bg-center bg-cover rounded-2xl transform transition-transform duration-500 relative overflow-hidden"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></motion.div>
        </motion.div>

        {/* Right: Title and Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full relative z-10 space-y-4 md:space-y-8"
        >
          <div className="flex flex-col gap-3 md:gap-8">
            <div className="flex flex-row md:justify-between gap-4 md:gap-6 items-baseline w-full">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-5xl font-extralight text-stone-400"
              >
                {number}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-5xl font-light tracking-tight"
              >
                {title}
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {dangerousHTML ? (
                <p
                  className="text-lg md:text-xl leading-relaxed text-stone-600"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              ) : (
                <p className="text-lg md:text-xl leading-relaxed text-stone-600">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
          <div className="w-fit  md:mt-8">
            <Button route="/" variant="black" text="Learn More" icon />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
