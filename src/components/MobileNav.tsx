import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, HelpCircle, Flame, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLogoClickTracker } from "@/hooks/useLogoClickTracker";
import ClickStatsPopup from "./ClickStatsPopup";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { showPopup, handleLogoClick, closePopup } = useLogoClickTracker();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLogoClickWithTracking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleLogoClick();
  };

  const navigateToEbookPage = () => {
    window.open('https://sreddedtonmoyfitness-ebook.lovable.app/', '_blank');
    setIsOpen(false);
  };

  // Handle scroll events for opacity effect
  React.useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <>
      <div className={`md:hidden fixed top-4 left-4 right-4 z-50 bg-[#0F0F0F] backdrop-blur-sm shadow-lg rounded-[3rem] transition-opacity duration-200 ${
        isScrolling ? 'opacity-90' : 'opacity-100'
      }`}>
        <div className="flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClickWithTracking}>
            <div className="bg-[#2A2A2A] backdrop-blur-sm p-2 rounded-full">
              <img 
                src="/lovable-uploads/91698ce1-361b-41ad-99e5-a40370791973.png" 
                alt="Shredded Fitness Logo" 
                className="w-12 h-12 rounded-full"
                style={{ animation: 'spin 4s linear infinite' }}
              />
            </div>
            <div>
              <h3 className="text-xs font-black text-white tracking-wide font-orbitron">
                ShreddedTonmoyFitness
              </h3>
              <p className="text-[#D3D3D3] text-xs font-medium font-inter">Your Fitness Partner</p>
            </div>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-[#2A2A2A] backdrop-blur-sm hover:bg-[#E63946] text-white rounded-xl"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#0F0F0F] border-none rounded-l-3xl">
              <Button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 bg-[#E63946] hover:bg-[#D32F3F] text-white rounded-full h-10 w-10 p-0"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="flex flex-col space-y-6 mt-16">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-white">ShreddedTonmoyFitness</h2>
                </div>
                
                <button 
                  onClick={scrollToTop}
                  className="text-left text-lg font-medium text-[#D3D3D3] hover:text-white transition-colors py-3 border-b border-[#3A3A3A] w-full flex items-center gap-3"
                >
                  <Home className="h-5 w-5 text-[#E63946]" />
                  Home
                </button>
                
                <button 
                  onClick={() => scrollToSection('about-trainer')}
                  className="text-left text-lg font-medium text-[#D3D3D3] hover:text-white transition-colors py-3 border-b border-[#3A3A3A]"
                >
                  About Trainer
                </button>
                
                <div className="relative">
                  <button 
                    onClick={navigateToEbookPage}
                    className="text-left text-lg font-medium text-[#D3D3D3] hover:text-white transition-colors py-3 border-b border-[#3A3A3A] w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Flame className="h-5 w-5 text-[#FFD700]" />
                      eBooks
                    </div>
                    <Badge className="bg-[#E63946] text-white text-xs font-bold animate-pulse">
                      HOT
                    </Badge>
                  </button>
                </div>
                
                <button 
                  onClick={() => scrollToSection('why-choose')}
                  className="text-left text-lg font-medium text-[#D3D3D3] hover:text-white transition-colors py-3 border-b border-[#3A3A3A]"
                >
                  Why Choose Us
                </button>

                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-left text-lg font-medium text-[#D3D3D3] hover:text-white transition-colors py-3 border-b border-[#3A3A3A] w-full flex items-center gap-3"
                >
                  <HelpCircle className="h-5 w-5 text-[#E63946]" />
                  FAQ
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-lg font-medium text-[#D3D3D3] hover:text-white transition-colors py-3 border-b border-[#3A3A3A]"
                >
                  Contact
                </button>
                
                <div className="pt-6">
                  <Button 
                    onClick={() => scrollToSection('featured-books')}
                    className="w-full bg-[#E63946] hover:bg-[#D32F3F] text-white font-semibold py-3 relative"
                  >
                    Browse Programs
                    <Badge className="absolute -top-2 -right-2 bg-[#FFD700] text-[#1C1C1C] text-xs font-bold">
                      HOT
                    </Badge>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ClickStatsPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
};

export default MobileNav;
