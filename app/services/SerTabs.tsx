"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";


interface Tab {
  id: string;
  label: string;
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonRoute: string;
}

const tabs: Tab[] = [
    {
      id: "software-development",
      label: "Software Development",
      image: "/assets/software-development.webp",
      heading: "Software Development",
      paragraph:
        "<p>Our software development services are tailored to help businesses build scalable, secure, and high-performing digital solutions. From enterprise systems to custom SaaS platforms, we deliver end-to-end development support across various technologies and industries. Our approach combines agile methodologies with clean code practices to ensure fast delivery and long-term maintainability.<br></br>Whether you’re modernizing legacy systems or launching a new platform, we align every feature with your business goals, ensuring performance, reliability, and future scalability.</p>",
      buttonText: "Learn More",
      buttonRoute: "/services/software-development",
    },
    {
      id: "web-development",
      label: "Web Development",
      image: "/assets/web-development.jpeg",
      heading: "Web Development",
      paragraph:
        "<p>We create fast, responsive, and elegant web applications that elevate your brand and deliver seamless user experiences. From marketing sites to complex web apps, our team uses the latest frameworks and design systems to ensure cross-platform compatibility and optimal performance.<br></br>Whether it’s a headless CMS, a custom dashboard, or an e-commerce platform, we bring your vision to life with pixel-perfect design and scalable code.</p>",
      buttonText: "Learn More",
      buttonRoute: "/services/web-development",
    },
    {
      id: "mobile-development",
      label: "Mobile Development",
      image: "/assets/mobile-development.jpeg",
      heading: "Mobile Development",
      paragraph:
        "<p>We specialize in building high-performance mobile applications for iOS and Android using native and cross-platform technologies. Our solutions are designed with smooth UI, reliable backend integrations, and a deep focus on user engagement.<br></br>Whether you're launching a startup app or transforming enterprise mobility, our mobile teams build fast, scalable apps that keep your users connected and your brand ahead.</p>",
      buttonText: "Learn More",
      buttonRoute: "/services/mobile-development",
    },
    {
      id: "ai-ml-consulting",
      label: "AI & ML Consulting",
      image: "/assets/artificial-intelligence.jpg",
      heading: "AI & ML Consulting",
      paragraph:
        "<p>Our AI & ML consulting services empower your business with advanced intelligence solutions tailored to your goals. We build custom models, optimize existing pipelines, and integrate AI into your processes to drive automation and insights.<br></br><b>Our Services Include:</b></p><ul><li>&#x2022; AI/ML Strategy & Roadmapping</li><li>&#x2022; Custom Model Development</li><li>&#x2022; AI Integration & Deployment</li><li>&#x2022; ML Ops & Model Optimization</li><li>&#x2022; Generative AI Solutions</li></ul>",
      buttonText: "Learn More",
      buttonRoute: "/services/ai-ml-consulting",
    },
    {
      id: "cloud-consulting",
      label: "Cloud Consulting",
      image: "/assets/cloud-consulting.webp",
      heading: "Cloud Consulting",
      paragraph:
        "<p>We help organizations migrate, modernize, and scale through cloud-first strategies. Our cloud consulting services cover everything from infrastructure design to DevOps automation and cost optimization.<br></br><b>Our Services Include:</b></p><ul><li>&#x2022; Cloud Architecture Design</li><li>&#x2022; Migration & Deployment</li><li>&#x2022; DevOps & CI/CD Automation</li><li>&#x2022; Cloud Cost Optimization</li><li>&#x2022; Multi-cloud & Hybrid Strategy</li></ul>",
      buttonText: "Learn More",
      buttonRoute: "/services/cloud-consulting",
    },
    {
      id: "erp-consulting",
      label: "ERP Consulting",
      image: "/assets/erp-consulting.jpg",
      heading: "ERP Consulting",
      paragraph:
        "<p>Our ERP consulting services help businesses streamline operations, improve data visibility, and boost productivity. We specialize in ERP selection, implementation, customization, and integration—ensuring the system fits your unique business processes.<br></br><b>Our Services Include:</b></p><ul><li>&#x2022; ERP Strategy & Evaluation</li><li>&#x2022; Implementation & Migration</li><li>&#x2022; Custom Workflows & Modules</li><li>&#x2022; Integration with Existing Systems</li><li>&#x2022; Ongoing Support & Optimization</li></ul>",
      buttonText: "Learn More",
      buttonRoute: "/services/erp-consulting",
    },
  ];
  

interface TabButtonProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ tab, isActive, onClick }: TabButtonProps) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setTextWidth(textRef.current.offsetWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [tab.label]);

  const padding = 20; // Space between text and icon
  const iconStartX = textWidth + padding;
  const iconEndX = containerWidth - 48; // 12px from the right edge plus icon width (20px)

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      className={`w-full p-3 md:p-4 text-xs md:text-2xl text-left relative ${
        isActive
          ? "text-integrayellow font-medium p-4 bg-white border-[1px] border-gray-200 rounded-2xl"
          : "text-slate-800 font-light border-[1px] border-gray-200 rounded-2xl"
      }`}
    >
      <div className="flex items-center">
        <span ref={textRef} className="inline-block">
          {tab.label}
        </span>
        <motion.div
          className="absolute inline-flex items-center"
          animate={{
            x: isActive ? iconEndX : iconStartX,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <FaRegArrowAltCircleRight
            className={`md:h-5 md:w-5 h-2 w-2 ${
              isActive ? "text-slate-900" : "text-slate-300 rotate-90"
            }`}
          />
        </motion.div>
      </div>
    </button>
  );
};

const SerTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isClient, setIsClient] = useState(false);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col xl:mt-5" id="sectors">
      <div className="flex flex-row justify-between gap-3 md:gap-10">
        <div className="w-[40%]">
          <ul className="list-none p-0 m-0 flex flex-col gap-0 md:gap-5">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <TabButton
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => handleClick(tab.id)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[60%] bg-white p-5 rounded-2xl border-[1px] border-gray-200">
          {activeTabContent && isClient && (
            <div className="flex flex-col gap-4">
              <div
                className="h-16 md:h-80 bg-cover bg-center rounded-md md:rounded-[12px]"
                style={{ backgroundImage: `url(${activeTabContent.image})` }}
              ></div>
              <h2 className="text-sm md:text-4xl font-light md:my-3">
                {activeTabContent.heading}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: activeTabContent.paragraph }}
                className="text-black font-light text-xs md:text-lg tracking-tight leading-tight text-justify"
              />
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="bg-ltonegray flex flex-col p-16 font-sans font-light gap-10">
      <div id="pre-menu heading" className="flex flex-col gap-4">
        <h5 className="text-5xl font-light text-integrayellow">
          Capability Portfolio <br />
          Range
        </h5>
        <p className="text-lg text-gray-800">
        <br></br>Looking to quickly expand your development capabilities or create a future-ready solution from the ground up?
<br></br>
We&apos;ve got you covered at every stage.
        </p>
      </div>
      <div id="contains the tab section">
        <SerTabs />
      </div>
    </div>
  );
};

export default ServicesSection;