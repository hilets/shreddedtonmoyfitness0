
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Join SreddedTonmoyFitness - your premier fitness destination. Experience world-class programs, expert trainers, and a community that motivates you to achieve your best.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 7000 / fullText.length); // 7 seconds total divided by text length

    return () => clearInterval(timer);
  }, []);

  const scrollToEbooks = () => {
    document.getElementById('ebooks')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = () => {
    document.getElementById('featured-books')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-[#1C1C1C] text-white py-12 px-6 md:py-16 overflow-hidden min-h-[80vh] md:min-h-[70vh] flex items-center">
      <div 
        className="absolute top-32 left-4 right-4 bottom-4 bg-cover bg-center rounded-[4rem]"
        style={{ backgroundImage: "url('/lovable-uploads/5a45fb66-8d71-4ada-83ba-658a38d5a46b.png')" }}
      />
      
      <div className="absolute top-32 left-4 right-4 bottom-4 bg-black/50 rounded-[4rem]" />
      
      <div className="relative w-full max-w-6xl mx-auto mt-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight text-white drop-shadow-2xl font-orbitron">
            Transform Your
            <span className="block text-[#F5F5DC] drop-shadow-lg" style={{ textShadow: '0 0 20px #FFD700' }}>
              Body in 30 Days
            </span>
          </h1>
          
          <div className="mb-8 text-[#D3D3D3] max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg font-inter">
            <p className="text-base md:text-lg h-16 md:h-auto flex items-center justify-center">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToEbooks}
              size="lg" 
              className="bg-[#E63946] hover:bg-[#D32F3F] text-white text-lg px-10 py-5 font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-full border-2 border-white/20 flex items-center gap-2"
            >
              <Flame className="h-10 w-10 text-[#F5F5DC]" style={{ filter: 'drop-shadow(0 0 10px #FFD700)' }} />
              View Our Ebooks
            </Button>
            <Button 
              onClick={scrollToPrograms}
              size="sm" 
              variant="outline" 
              className="border-2 border-[#D3D3D3] bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#1C1C1C] text-sm px-3 py-1 font-bold transition-all duration-300 rounded-full w-fit mx-auto sm:mx-0"
            >
              View Programs <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#F5F5DC] mb-1 drop-shadow-lg" style={{ textShadow: '0 0 15px #FFD700' }}>1000+</div>
              <div className="text-[#D3D3D3] text-sm font-medium drop-shadow-lg">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#F5F5DC] mb-1 drop-shadow-lg" style={{ textShadow: '0 0 15px #FFD700' }}>5+</div>
              <div className="text-[#D3D3D3] text-sm font-medium drop-shadow-lg">Expert Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#F5F5DC] mb-1 drop-shadow-lg" style={{ textShadow: '0 0 15px #FFD700' }}>24/7</div>
              <div className="text-[#D3D3D3] text-sm font-medium drop-shadow-lg">Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#F5F5DC] mb-1 drop-shadow-lg" style={{ textShadow: '0 0 15px #FFD700' }}>3+</div>
              <div className="text-[#D3D3D3] text-sm font-medium drop-shadow-lg">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
