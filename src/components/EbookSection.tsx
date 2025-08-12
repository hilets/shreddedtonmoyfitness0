import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Clock, BookOpen, Zap, Target, HelpCircle, ArrowRight } from "lucide-react";
import { trackClick } from "@/utils/trackingUtils";
import { useCurrencyByLocation } from "@/hooks/useCurrencyByLocation";
import { useLogoClickTracker } from "@/hooks/useLogoClickTracker";
import { useNavigate } from "react-router-dom";
import bulkingCover from "@/assets/bulking-ebook-cover.png";
import cuttingCover from "@/assets/cutting-ebook-cover.png";
import transformationCover from "@/assets/transformation-ebook-cover.png";

const EbookSection = () => {
  const { formatPrice, currencyData, getCurrencyDisplayName, isLoading } = useCurrencyByLocation();
  const { handleLogoClick } = useLogoClickTracker();
  const navigate = useNavigate();

  const handleBuyNow = (ebookTitle: string, ebookId: number) => {
    // Track the click
    trackClick('ebook', ebookTitle, `ebook-${ebookId}`);
    
    // Find the ebook details
    const ebook = ebooks.find(e => e.id === ebookId);
    if (!ebook) return;
    
    // Navigate to buy page with ebook details
    const buyUrl = `/buy?item=${encodeURIComponent(ebookTitle)}&price=${encodeURIComponent(ebook.price)}&originalPrice=${encodeURIComponent(ebook.originalPrice)}&type=ebook`;
    navigate(buyUrl);
  };

  const ebooks = [
    {
      id: 1,
      title: "Bulking Diet & Workout Book",
      description: "Complete guide to building muscle mass with strategic nutrition and progressive training routines.",
      price: "2499৳",
      originalPrice: "2999৳",
      rating: 4.9,
      downloads: "500+",
      badge: "Bestseller",
      icon: Target,
      posterColor: "bg-gradient-to-br from-red-500 via-red-600 to-red-800",
      coverImage: bulkingCover,
      features: [
        "Comprehensive bulking meal plans",
        "Progressive strength training routines",
        "Supplement timing guide",
        "Weekly progress tracking sheets",
        "Muscle-building recipes collection",
        "Rest and recovery protocols",
        "Form technique illustrations",
        "Macro calculation formulas",
        "Cheat meal scheduling guide"
      ]
    },
    {
      id: 2,
      title: "Cutting Diet & Workout Book",
      description: "Master the art of fat loss while preserving muscle with precision cutting strategies.",
      price: "2499৳",
      originalPrice: "2999৳",
      rating: 4.8,
      downloads: "450+",
      badge: "Popular",
      icon: Zap,
      posterColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800",
      coverImage: cuttingCover,
      features: [
        "Fat loss meal planning",
        "Cardio & strength combination",
        "Metabolism optimization",
        "Body composition tracking",
        "Cheat meal strategies",
        "Plateau-breaking techniques",
        "Mindset and motivation tips",
        "Intermittent fasting protocols",
        "Contest prep guidelines"
      ]
    },
    {
      id: 3,
      title: "90 Days Transformation Challenge",
      description: "Complete 90-day transformation program with daily workout plans and nutrition guidance.",
      price: "12000৳",
      originalPrice: "15000৳",
      rating: 4.9,
      downloads: "300+",
      badge: "Premium",
      icon: BookOpen,
      posterColor: "bg-gradient-to-br from-green-500 via-green-600 to-green-800",
      coverImage: transformationCover,
      features: [
        "90-day structured program",
        "Daily workout routines",
        "Nutrition coaching",
        "Progress tracking system",
        "Weekly check-in templates",
        "Habit formation guide",
        "Success celebration milestones",
        "Mental health support tips",
        "Lifestyle integration strategies"
      ]
    }
  ];

  const calculateSavings = (originalPrice: string, price: string) => {
    const original = parseInt(originalPrice.replace('৳', ''));
    const current = parseInt(price.replace('৳', ''));
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section id="ebooks" className="py-12 px-6 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Our Premium <span className="text-[#FFD700]">Ebook Collection</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] max-w-2xl mx-auto font-inter">
            Transform your fitness journey with our expertly crafted ebooks. 
            Instant download, lifetime access, proven results.
          </p>
          {!isLoading && currencyData.currency !== 'BDT' && (
            <div className="mt-4 bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 max-w-md mx-auto">
              <p className="text-blue-300 text-sm font-medium">
                🌍 Prices shown in {getCurrencyDisplayName()} for international visitors
              </p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ebooks.map((ebook) => {
            const IconComponent = ebook.icon;
            
            return (
              <Card key={ebook.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black group w-full mx-auto">
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-[#E63946] text-white font-medium text-xs rounded-full px-2 py-1">
                    {ebook.badge}
                  </Badge>
                </div>
                
                <div className="relative h-[450px] overflow-hidden rounded-t-2xl mb-2">
                  <div className="w-full h-full flex items-center justify-center relative px-6">
                    <div className={`w-64 h-80 ${ebook.posterColor} rounded-xl flex items-center justify-center relative p-4`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                      
                      {/* Ebook cover image */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                          <img 
                            src={ebook.coverImage} 
                            alt={ebook.title}
                            className="w-48 h-72 rounded-xl shadow-2xl object-contain border border-white/30 bg-white/5 backdrop-blur-sm"
                          />
                          
                          {/* 3D effect shadow */}
                          <div className="absolute -right-3 -bottom-3 w-48 h-72 bg-black/50 rounded-xl -z-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-2 px-4 pt-2">
                  <CardTitle className="text-lg font-bold text-white mb-2 font-orbitron leading-tight">
                    {ebook.title}
                  </CardTitle>
                  <CardDescription className="text-[#D3D3D3] text-sm leading-relaxed font-inter line-clamp-2">
                    {ebook.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="py-0 px-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-[#D3D3D3]">{ebook.rating}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#D3D3D3]">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{ebook.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Instant</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-white font-semibold mb-2 font-orbitron text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {ebook.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="text-sm text-[#D3D3D3] flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full flex-shrink-0 mt-2" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2 px-4 pb-4">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#F5F5DC] font-orbitron">
                          {isLoading ? ebook.price : formatPrice(ebook.price)}
                        </span>
                        <span className="text-sm line-through text-[#D3D3D3]">
                          {isLoading ? ebook.originalPrice : formatPrice(ebook.originalPrice)}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-green-400 border-green-400 text-xs">
                        Save {calculateSavings(ebook.originalPrice, ebook.price)}%
                      </Badge>
                    </div>
                    <Button 
                      onClick={() => handleBuyNow(ebook.title, ebook.id)}
                      className="w-full bg-[#E63946] hover:bg-[#D32F3F] text-white font-semibold py-2 text-sm transition-all duration-300 transform hover:scale-105 rounded-xl"
                    >
                      Buy Now - Instant Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-[#D3D3D3] font-inter text-lg">
            🔥 Limited Time Offer - All ebooks include <span className="text-[#FFD700] font-semibold">lifetime access</span> and <span className="text-[#FFD700] font-semibold">free updates</span>
          </p>
        </div>

        {/* Improved See FAQ Button */}
        <div className="text-center mt-6">
          <button 
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-[#E63946] to-[#D32F3F] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#D32F3F] hover:to-[#B71C1C] transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[#E63946]/25 font-inter flex items-center gap-3 mx-auto"
          >
            <HelpCircle className="h-5 w-5 group-hover:animate-pulse" />
            <span className="text-base">See FAQ</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-[#D3D3D3] text-sm mt-3 font-inter">
            আপনার সব প্রশ্নের উত্তর পেয়ে যান
          </p>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
