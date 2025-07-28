
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      image: "https://images.unsplash.com/photo-1494790108755-2616b734b3f9?q=80&w=150",
      rating: 5,
      text: "Lost 15 kg in 2 months with the Fat Loss program! The nutrition guide was a game-changer. Highly recommend!",
      program: "Fat Loss in 30 Days"
    },
    {
      id: 2,
      name: "Fatima Khan",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
      rating: 5,
      text: "The home workout plan is perfect for busy moms like me. No gym needed and I'm seeing amazing results!",
      program: "Home Workout Plan"
    },
    {
      id: 3,
      name: "Nadia Rahman",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
      rating: 5,
      text: "Perfect for busy professionals! The workout plans fit perfectly into my schedule. Seeing amazing results!",
      program: "Muscle Gain Mastery"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#faf8f1' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-orbitron">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Real people, real results. See how our fitness programs have transformed lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative bg-white hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="absolute top-4 right-4 text-red-600 opacity-20">
                <Quote className="h-8 w-8" />
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg font-orbitron">{testimonial.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-lg font-inter">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <span className="text-sm font-medium text-red-600 font-inter">
                    {testimonial.program}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
