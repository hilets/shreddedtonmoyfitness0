
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";

const AboutTrainer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const trainerImages = [
    "/lovable-uploads/2129acb6-5b33-44fd-b997-036e69df79cc.png",
    "/lovable-uploads/31458ba4-c151-42bd-bb6e-97333e4529a0.png",
    "/lovable-uploads/33d75ed3-84ae-4980-90c3-171ba8774607.png",
    "/lovable-uploads/5a45fb66-8d71-4ada-83ba-658a38d5a46b.png"
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === trainerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [trainerImages.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-20 px-6 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Carousel Container */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                {trainerImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={index === 3 ? `Hero Background` : `Tonmoy Sah - Fitness Trainer ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {trainerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-[#E63946] scale-125'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#E63946] text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold font-orbitron">5+</div>
                  <div className="text-sm font-inter">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <Badge className="bg-[#E63946] text-white mb-4 font-inter">Certified Trainer</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
                Meet <span className="text-[#FFD700]">Tonmoy Sah</span>
              </h2>
            </div>
            
            <p className="text-lg text-[#D3D3D3] leading-relaxed font-inter">
              I'm Tonmoy Sah, a certified fitness coach with over 5 years of experience helping people 
              transform their bodies and lives. My programs have helped thousands of clients 
              achieve their fitness goals through scientifically-backed methods and practical approaches.
            </p>
            
            <p className="text-lg text-[#D3D3D3] leading-relaxed font-inter">
              Whether you're a complete beginner or looking to break through plateaus, 
              my programs are designed to deliver real results in the shortest time possible.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#E63946] p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">1000+</div>
                  <div className="text-sm text-[#D3D3D3]">Clients Transformed</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#E63946] p-3 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Certified</div>
                  <div className="text-sm text-[#D3D3D3]">Professional Coach</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#E63946] p-3 rounded-full">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">4.9/5</div>
                  <div className="text-sm text-[#D3D3D3]">Average Rating</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#E63946] p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">24/7</div>
                  <div className="text-sm text-[#D3D3D3]">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;
