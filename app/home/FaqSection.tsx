

import React from 'react'
import NewAccordion from './NewAccordion'


// FAQ data separated for better maintainability
const faqData = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including healthcare, logistics, manufacturing, and finance. Our expertise allows us to deliver tailored solutions across various sectors."
  },
  {
    question: "How do you ensure project success?",
    answer: "We follow a rigorous project management methodology, maintain transparent communication, and implement regular checkpoints to ensure alignment with client goals and timely delivery."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with cutting-edge technologies including React, Next.js, Node.js, Python, and various AI/ML frameworks. Our tech stack is constantly evolving to meet modern business needs."
  },
  {
    question: "How do you handle project security?",
    answer: "Security is paramount in our development process. We implement industry-standard security protocols, regular security audits, and follow best practices for data protection and privacy."
  }
];

const FaqSection = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col rounded-2xl bg-stone-950  pb-24 w-full p-5 font-light tracking-tight leading-tight text-white/95">
      <div className="flex items-center flex-col w-full text-center">
        <div className="w-full py-10 px-20">
        
        </div>
        <div>
          <h2 className="text-3xl md:text-6xl mb-8">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-stone-300">Find answers to common questions about our services, process, and expertise.</p>
        </div>
        <div className="space-y-4 w-full md:w-3/4 mt-8">
          {faqData.map((faq, index) => (
            <NewAccordion 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default FaqSection