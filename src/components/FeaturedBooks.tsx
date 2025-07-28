import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Clock, Users, Trophy, Target, Dumbbell, CheckCircle, ArrowLeft } from "lucide-react";
import { trackClick } from "@/utils/clickStatsTracker";
import { useCurrencyByLocation } from "@/hooks/useCurrencyByLocation";

const FeaturedBooks = () => {
  const [showBenefits, setShowBenefits] = useState<{[key: number]: boolean}>({});
  const { formatPrice, currencyData, getCurrencyDisplayName, isLoading } = useCurrencyByLocation();

  const handleBuyNow = (programTitle: string) => {
    // Track the click
    trackClick(programTitle);
    alert("This Button will Bring you SSL commerce payment gateway and after Confirm payment Customer will see a thank you page and Book will start to be download🥰");
  };

  const toggleBenefits = (bookId: number) => {
    setShowBenefits(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  const books = [
    {
      id: 4,
      title: "Online Contest Prep Program",
      description: "Complete contest preparation guide with training, nutrition, and posing tips.",
      price: "30000৳",
      originalPrice: "35000৳",
      package: "12 weeks (At least 3 months)",
      image: "/lovable-uploads/9380bf41-09d2-41c5-8ece-7f4b167128f7.png",
      rating: 4.9,
      downloads: "200+",
      badge: "Premium",
      icon: Trophy,
      features: [
        "Personalized Training Plan",
        "Weekly Progress Tracking",
        "Nutrition Guidelines",
        "Posing Practice Sessions",
        "24/7 Support Access"
      ],
      benefits: [
        "12-week structured contest prep plan",
        "Peak week nutrition protocols",
        "Posing routine development",
        "Stage presentation techniques",
        "Recovery and deload strategies",
        "Supplement timing optimization",
        "Contest day preparation guide",
        "Psychological preparation techniques",
        "Advanced cutting strategies"
      ]
    }
  ];

  return (
    <section id="featured-books" className="py-20 px-6" style={{ backgroundColor: '#1C1C1C' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Featured <span style={{ color: '#FFD700' }}>Fitness Program</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-inter" style={{ color: '#D3D3D3' }}>
            Transform your body with our expertly crafted digital fitness program. 
            Instant download, lifetime access.
          </p>
          {!isLoading && currencyData.currency !== 'BDT' && (
            <div className="mt-4 bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 max-w-md mx-auto">
              <p className="text-blue-300 text-sm font-medium">
                🌍 Prices shown in {getCurrencyDisplayName()} for international visitors
              </p>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-md">
            {books.map((book) => {
              const IconComponent = book.icon;
              const isBenefitsShown = showBenefits[book.id];
              
              return (
                <Card key={book.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 rounded-3xl" style={{ backgroundColor: '#0F0F0F' }}>
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="font-semibold rounded-full text-white" style={{ backgroundColor: '#E63946' }}>
                      {book.badge}
                    </Badge>
                  </div>
                  
                  <div className="relative h-80 overflow-hidden rounded-t-3xl cursor-pointer" onClick={() => toggleBenefits(book.id)}>
                    <div className={`transition-all duration-500 ${isBenefitsShown ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                        onLoad={() => console.log(`Image loaded: ${book.title}`, book.image)}
                        onError={(e) => {
                          console.error(`Image failed to load: ${book.title}`, book.image);
                          console.error('Error event:', e);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-600/20 backdrop-blur-sm transition-all duration-500 ${isBenefitsShown ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                      <div className="p-4 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                          <ArrowLeft className="h-5 w-5 text-white" />
                          <span className="text-white font-semibold">Benefits</span>
                        </div>
                        <div className="space-y-2">
                          {book.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span className="text-white text-sm font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-white mb-2 font-orbitron">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed font-inter" style={{ color: '#D3D3D3' }}>
                      {book.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="py-0">
                    <div className="mb-4">
                      <div className="bg-gradient-to-r from-[#E63946]/20 to-[#FFD700]/20 border border-[#FFD700]/30 rounded-lg p-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#FFD700]" />
                          <span className="text-[#FFD700] font-semibold text-xs">Package:</span>
                        </div>
                        <p className="text-white font-bold text-sm mt-1">{book.package}</p>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
                        {book.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-[#FFD700] flex-shrink-0" />
                            <span className="text-[#D3D3D3] text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium" style={{ color: '#D3D3D3' }}>{book.rating}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm" style={{ color: '#D3D3D3' }}>
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>{book.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Instant</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-4">
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-[#F5F5DC]">
                          {isLoading ? book.price : formatPrice(book.price)}
                        </span>
                        <span className="text-sm line-through" style={{ color: '#D3D3D3' }}>
                          {isLoading ? book.originalPrice : formatPrice(book.originalPrice)}
                        </span>
                      </div>
                      <Button 
                        onClick={() => handleBuyNow(book.title)}
                        className="w-full text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 rounded-2xl"
                        style={{ backgroundColor: '#E63946' }}
                      >
                        Buy Now - Instant Download
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
