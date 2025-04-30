
// Removed unused import
import AboutUsSection from "./home/AboutUsSection";
import Hero from "./home/Hero";
import MarqueeComponent from "./home/MarqueeComponent";
import WhyChooseUs from "./home/WhyChooseUs";

import OurProjects from "./home/OurProjects";
import OurServicesSection from "./home/OurServicesSection";
import FaqSection from "./home/FaqSection";
import Footer from "./components/Footer";
import FutureNowSection from "./home/FutureNowSection";

export default function Home() {
  return (
    <>
    <Hero />
    <MarqueeComponent />
    <WhyChooseUs />
    <AboutUsSection />
    <OurServicesSection />
    <FutureNowSection />
    <div id="projects">
      
    <OurProjects />
    </div>
    <FaqSection />
   <Footer />
    </>
  );
}
