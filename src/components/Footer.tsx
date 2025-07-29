
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import visaLogo from "@/assets/payment/visa-logo.png";
import mastercardLogo from "@/assets/payment/mastercard-logo.png";
import amexLogo from "@/assets/payment/amex-logo.png";
import bkashLogo from "@/assets/payment/bkash-logo.png";
import nagadLogo from "@/assets/payment/nagad-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1C1C1C] via-[#2A1A1A] to-[#1C1C1C] text-white py-16 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23E63946%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#E63946] to-[#FF6B6B] bg-clip-text text-transparent">
                Shredded Tonmoy Fitness
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-[#E63946] to-[#FF6B6B] rounded-full"></div>
            </div>
            <p className="text-[#D3D3D3] leading-relaxed max-w-sm">
              Transform your body with our expert fitness programs. Get instant access to proven workout plans and nutrition guides that deliver real results.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100055639093615&mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-blue-600/20 border border-blue-600/30 p-3 rounded-xl hover:bg-blue-600/30 hover:border-blue-600/50 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </a>
              <a 
                href="https://instagram.com/tonmoy__sah?igshid=OGQ5ZDc2ODk2ZA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600/30 p-3 rounded-xl hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-600/50 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </a>
              <a 
                href="https://wa.me/8801911077020" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-600/20 border border-green-600/30 p-3 rounded-xl hover:bg-green-600/30 hover:border-green-600/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="w-8 h-0.5 bg-[#E63946] rounded-full"></div>
            </div>
            <ul className="space-y-3 text-[#D3D3D3]">
              <li>
                <a href="#featured-books" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Programs
                </a>
              </li>
              <li>
                <a href="#about-trainer" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#transformation" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Contact
                </a>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Programs</h4>
              <div className="w-8 h-0.5 bg-[#E63946] rounded-full"></div>
            </div>
            <ul className="space-y-3 text-[#D3D3D3]">
              <li>
                <a href="#featured-books" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Contest Prep Program
                </a>
              </li>
              <li>
                <a href="#featured-books" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Weight Loss & Gain
                </a>
              </li>
              <li>
                <a href="#featured-books" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Bulking & Cutting
                </a>
              </li>
              <li>
                <a href="#featured-books" className="group flex items-center hover:text-[#E63946] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#E63946]/50 rounded-full mr-3 group-hover:bg-[#E63946] transition-colors"></span>
                  Nutrition Guide
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>
              <div className="w-8 h-0.5 bg-[#E63946] rounded-full"></div>
            </div>
            <div className="space-y-4 text-[#D3D3D3]">
              <div className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300">
                <div className="bg-[#E63946]/20 p-2 rounded-lg group-hover:bg-[#E63946]/30 transition-colors">
                  <Phone className="h-4 w-4 text-[#E63946]" />
                </div>
                <span>+8801911077020</span>
              </div>
              <div className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300">
                <div className="bg-[#E63946]/20 p-2 rounded-lg group-hover:bg-[#E63946]/30 transition-colors">
                  <Mail className="h-4 w-4 text-[#E63946]" />
                </div>
                <span>montysaha583@gmail.com</span>
              </div>
              <div className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300">
                <div className="bg-[#E63946]/20 p-2 rounded-lg group-hover:bg-[#E63946]/30 transition-colors">
                  <MapPin className="h-4 w-4 text-[#E63946]" />
                </div>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-8">
          <Separator className="bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#D3D3D3] text-sm flex items-center justify-center md:justify-start gap-2">
              © 2024 Shredded Tonmoy Fitness. Made with 
              <Heart className="h-4 w-4 text-[#E63946] fill-current animate-pulse" /> 
              by Jahin. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-[#D3D3D3] flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              We Accept
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {/* Payment Method Logos */}
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <img 
                  src={visaLogo} 
                  alt="Visa" 
                  className="h-6 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <img 
                  src={mastercardLogo} 
                  alt="Mastercard" 
                  className="h-6 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <img 
                  src={amexLogo} 
                  alt="American Express" 
                  className="h-6 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <img 
                  src={bkashLogo} 
                  alt="bKash" 
                  className="h-8 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
