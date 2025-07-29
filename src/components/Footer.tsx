
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import visaLogo from "@/assets/payment/visa-logo.png";
import mastercardLogo from "@/assets/payment/mastercard-logo.png";
import amexLogo from "@/assets/payment/amex-logo.png";
import bkashLogo from "@/assets/payment/bkash-logo.png";
import nagadLogo from "@/assets/payment/nagad-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E63946]">Shredded Tonmoy Fitness</h3>
            <p className="text-[#D3D3D3] leading-relaxed">
              Transform your body with our expert fitness programs. Get instant access to proven workout plans and nutrition guides.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100055639093615&mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/tonmoy__sah?igshid=OGQ5ZDc2ODk2ZA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/8801911077020" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-[#D3D3D3]">
              <li><a href="#featured-books" className="hover:text-[#E63946] transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Contact</a></li>
              <li><a href="/terms" className="hover:text-[#E63946] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="space-y-2 text-[#D3D3D3]">
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Contest Prep Program</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Weight Loss & Gain</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Bulking & Cutting</a></li>
              <li><a href="#" className="hover:text-[#E63946] transition-colors">Nutrition Guide</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-[#D3D3D3]">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#E63946]" />
                <span>+8801911077020</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#E63946]" />
                <span>montysaha583@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#E63946]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-[#3A3A3A]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#D3D3D3] text-sm">
              © 2024 Shredded Tonmoy Fitness. All rights reserved. Design by Jahin.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-[#D3D3D3]">We Accept</p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {/* Payment Method Logos */}
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src={visaLogo} 
                  alt="Visa" 
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src={mastercardLogo} 
                  alt="Mastercard" 
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src={amexLogo} 
                  alt="American Express" 
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src={bkashLogo} 
                  alt="bKash" 
                  className="h-8 w-auto object-contain"
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
