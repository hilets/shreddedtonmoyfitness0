
import { useEffect } from 'react';
import Hero from "@/components/Hero";
import EbookSection from "@/components/EbookSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import Transformation from "@/components/Transformation";
import AboutTrainer from "@/components/AboutTrainer";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

import { trackVisitor } from "@/utils/trackingUtils";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <MobileNav />
      <DesktopNav />
      <div data-scroll-section>
        <Hero />
      </div>
      <div id="ebooks" data-scroll-section>
        <EbookSection />
      </div>
      <div id="transformation" data-scroll-section>
        <Transformation />
      </div>
      <div id="featured-books" data-scroll-section>
        <FeaturedBooks />
      </div>
      <div id="about-trainer" data-scroll-section>
        <AboutTrainer />
      </div>
      <div id="why-choose" data-scroll-section>
        <WhyChoose />
      </div>
      <div data-scroll-section>
        <FAQ />
      </div>
      <div id="contact" data-scroll-section>
        <Contact />
      </div>
      <div data-scroll-section>
        <Footer />
      </div>
      <ChatbotButton />
    </div>
  );
};

export default Index;
