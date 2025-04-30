"use client";
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'

// Card data array
const cardData = [
  {
    title: "Our Methodology",
    description: "We follow a proven, collaborative process—combining research, strategy, and agile execution to deliver exceptional results for every client.",
    backgroundImage: "/assets/grad1.jpg"
  },
  {
    title: "Our Expertise",
    description: "With deep technical knowledge across multiple domains, we bring specialized skills and industry insights to every project we undertake.",
    backgroundImage: "/assets/grad1.jpg"
  },
  {
    title: "Our Values",
    description: "We're guided by integrity, innovation, and a relentless commitment to excellence in everything we do for our clients and partners.",
    backgroundImage: "/assets/grad1.jpg"
  }
];

const missionText = `Our mission is to deliver scalable, intelligent solutions that empower businesses to thrive. With a focus on excellence, we combine deep technical expertise with strategic insight.`

const AboutUsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const words = missionText.split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const wordVariant = {
    hidden: { color: 'rgba(0,0,0,0.45)' },
    visible: { color: 'rgba(0,0,0,0.90)', transition: { duration: 1 } }
  }

  return (
    <div className="mb-10 font-light tracking-tight leading-tight flex flex-col p-5 md:p-10 gap-5"> 
        <div className="flex  flex-col md:flex-row justify-between w-full p-5">
            <h5 className="text-lg md:text-left text-center mb-8 md:mb-0 md:text-xl text-black/60">About Us</h5>
            <motion.h3
              ref={ref}
              className="text-3xl md:text-4xl text-center md:text-justify w-full md:w-[65%] leading-[1.1]"
              variants={container}
              initial="hidden"
              animate={controls}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                >
                  {word}
                  {" "}
                </motion.span>
              ))}
            </motion.h3>
        </div>
        <div className="flex flex-col md:flex-row p-5 w-full gap-5 justify-between">
              {cardData.map((card, idx) => (
                <HoverImageCard 
                  key={idx} 
                  title={card.title}
                  description={card.description}
                  backgroundImage={card.backgroundImage}
                />
              ))}
        </div>
    </div>
  )
}

// Refactored HoverImageCard component with props
interface HoverImageCardProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const HoverImageCard = ({ title, description, backgroundImage }: HoverImageCardProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="flex flex-col gap-5 w-full md:w-1/3">
      <div
        className="w-full aspect-square rounded-2xl bg-cover bg-center overflow-hidden relative group"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 ease-out transform">
          <motion.h5
            className="text-white text-4xl font-normal transition-all duration-300"
            animate={{ 
              y: hovered ? -7 : 0,
              scale: hovered ? 1 : 1
            }}
          >
            {title}
          </motion.h5>
          <motion.div
            className="text-white/90 text-lg leading-tight tracking-tight overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: hovered ? 1 : 0,
              height: hovered ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection