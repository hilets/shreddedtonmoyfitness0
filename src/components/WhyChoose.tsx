
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Users, Clock, Award, Smartphone, Headphones } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Download,
      title: "Instant Digital Download",
      description: "Get immediate access to your programs. No waiting, no shipping fees."
    },
    {
      icon: Users,
      title: "Beginner Friendly",
      description: "Designed for all fitness levels. Start wherever you are in your journey."
    },
    {
      icon: Award,
      title: "Proven & Easy-to-Follow",
      description: "Science-backed methods with step-by-step instructions for guaranteed results."
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Short, effective workouts that fit into your busy schedule."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access your programs on any device, anywhere, anytime."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it. We're here for your success."
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Why Choose Our <span className="text-[#FFD700]">Programs?</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] max-w-2xl mx-auto font-inter">
            We've designed every program with your success in mind. Here's why thousands 
            of clients choose our fitness programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#3A3A3A]">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 bg-[#E63946] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-orbitron">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D3D3D3] leading-relaxed font-inter">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-[#E63946] text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2 font-orbitron">30-Day Money Back Guarantee</h3>
          <p className="text-[#D3D3D3] text-lg font-inter">
            Not satisfied with your results? Get a full refund within 30 days. 
            We're confident in our programs because they work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
