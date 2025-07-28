
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import { useLogoClickTracker } from "@/hooks/useLogoClickTracker";
import ClickStatsPopup from "./ClickStatsPopup";

const DesktopNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const { showPopup, handleLogoClick, closePopup } = useLogoClickTracker();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClickWithTracking = () => {
    scrollToTop();
    handleLogoClick();
  };

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Keep existing section detection logic
      const sections = ['home', 'about-trainer', 'featured-books', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <>
      <nav className={`hidden md:block fixed top-4 left-4 right-4 z-50 bg-[#0F0F0F] backdrop-blur-sm shadow-lg rounded-[3rem] transition-opacity duration-200 ${
        isScrolling ? 'opacity-90' : 'opacity-100'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClickWithTracking}>
              <div className="bg-[#2A2A2A] backdrop-blur-sm p-2 rounded-full">
                <img 
                  src="/lovable-uploads/91698ce1-361b-41ad-99e5-a40370791973.png" 
                  alt="Shredded Fitness Logo" 
                  className="w-16 h-16 rounded-full"
                  style={{ animation: 'spin 4s linear infinite' }}
                />
              </div>
              <div>
                <h3 className="text-base font-black text-white tracking-wide font-orbitron">
                  ShreddedTonmoyFitness
                </h3>
                <p className="text-[#D3D3D3] text-xs font-medium font-inter">Your Fitness Partner</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <button 
                onClick={scrollToTop}
                className={`font-medium transition-colors ${
                  activeSection === 'home' 
                    ? 'text-white border-b-2 border-[#E63946] pb-1' 
                    : 'text-[#D3D3D3] hover:text-white'
                }`}
              >
                Home
              </button>
              
              <button 
                onClick={() => scrollToSection('about-trainer')}
                className={`font-medium transition-colors ${
                  activeSection === 'about-trainer' 
                    ? 'text-white border-b-2 border-[#E63946] pb-1' 
                    : 'text-[#D3D3D3] hover:text-white'
                }`}
              >
                About
              </button>
              
              <button 
                onClick={() => scrollToSection('featured-books')}
                className={`font-medium transition-colors flex items-center gap-2 ${
                  activeSection === 'featured-books' 
                    ? 'text-white border-b-2 border-[#E63946] pb-1' 
                    : 'text-[#D3D3D3] hover:text-white'
                }`}
              >
                <Flame className="h-4 w-4 text-[#FFD700]" />
                Ebook
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-white border-b-2 border-[#E63946] pb-1' 
                    : 'text-[#D3D3D3] hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ClickStatsPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
};

export default DesktopNav;
