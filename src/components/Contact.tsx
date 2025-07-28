
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCallNowClick = () => {
    window.open("tel:+8801911077020", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100055639093615&mibextid=ZbWKwL", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/tonmoy__sah?igshid=OGQ5ZDc2ODk2ZA==", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+8801911077020", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:montysaha583@gmail.com", "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:amiffkheli85@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;
    window.open(mailtoLink, '_blank');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-6 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Get in <span className="text-[#E63946]">Touch</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] max-w-2xl mx-auto font-inter">
            Have questions about our programs? Ready to start your transformation? 
            We're here to help you succeed!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-[#3A3A3A]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-2 font-orbitron">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-4 w-full hover:bg-gray-600/50 p-2 rounded-lg transition-colors"
                >
                  <div className="bg-[#E63946] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-[#D3D3D3]">+8801911077020</div>
                  </div>
                </button>
                
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 w-full hover:bg-gray-600/50 p-2 rounded-lg transition-colors"
                >
                  <div className="bg-[#E63946] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-[#D3D3D3]">montysaha583@gmail.com</div>
                  </div>
                </button>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#E63946] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-[#D3D3D3]">Dhaka, Bangladesh</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#E63946] p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Support Hours</div>
                    <div className="text-[#D3D3D3]">24/7 Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <Button 
                onClick={handleCallNowClick}
                className="w-full bg-[#E63946] hover:bg-[#D32F3F] text-white text-lg py-6 font-semibold transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Phone className="mr-2 h-6 w-6" />
                Call Now
              </Button>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={handleFacebookClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition-all duration-300"
                >
                  📘 Facebook
                </Button>
                
                <Button 
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 font-semibold transition-all duration-300"
                >
                  📷 Instagram
                </Button>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-lg bg-[#3A3A3A]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white font-orbitron">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-[#E63946]" 
                    required
                  />
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email" 
                    type="email" 
                    className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-[#E63946]" 
                    required
                  />
                </div>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-[#E63946]" 
                  required
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-[#E63946] min-h-32"
                  rows={5}
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-[#E63946] hover:bg-red-700 text-white text-lg py-6 font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
