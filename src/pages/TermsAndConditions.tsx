import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-[#E63946] mb-4">Terms & Conditions</h1>
          <p className="text-[#D3D3D3]">Last updated: December 2024</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">1. Agreement to Terms</h2>
            <p className="text-[#D3D3D3] leading-relaxed">
              By accessing and using Shredded Tonmoy Fitness services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">2. Services Description</h2>
            <p className="text-[#D3D3D3] leading-relaxed">
              We provide fitness programs, workout plans, nutrition guides, and online coaching services. All digital products are delivered electronically upon successful payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">3. Refund Policy</h2>
            <div className="bg-[#2A2A2A] p-6 rounded-lg border border-[#E63946]/20">
              <h3 className="text-xl font-semibold text-[#E63946] mb-3">30-Day Money Back Guarantee</h3>
              <p className="text-[#D3D3D3] leading-relaxed mb-4">
                We are confident in the quality of our fitness programs. If you don't see results within 30 days of following our program as instructed, we offer a full refund.
              </p>
              <div className="space-y-2 text-[#D3D3D3]">
                <p><strong>Refund Conditions:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You must have followed the program consistently for 30 days</li>
                  <li>You must provide progress photos and workout logs as evidence</li>
                  <li>Refund request must be made within 35 days of purchase</li>
                  <li>Digital products cannot be returned after download</li>
                </ul>
              </div>
              <p className="text-[#D3D3D3] mt-4">
                To request a refund, contact us at montysaha583@gmail.com with your order details and evidence of program completion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">4. Health Disclaimer</h2>
            <p className="text-[#D3D3D3] leading-relaxed">
              Our fitness programs are for educational purposes only. Always consult with a healthcare professional before starting any new exercise or nutrition program. We are not responsible for any injuries or health issues that may arise from following our programs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">5. Intellectual Property</h2>
            <p className="text-[#D3D3D3] leading-relaxed">
              All content, including workout plans, nutrition guides, and educational materials, are the intellectual property of Shredded Tonmoy Fitness. Unauthorized distribution or sharing is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">6. Privacy Policy</h2>
            <p className="text-[#D3D3D3] leading-relaxed">
              We respect your privacy and protect your personal information. We do not share your data with third parties without your consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">7. Contact Information</h2>
            <div className="text-[#D3D3D3] space-y-2">
              <p><strong>Email:</strong> montysaha583@gmail.com</p>
              <p><strong>Phone:</strong> +8801911077020</p>
              <p><strong>WhatsApp:</strong> +8801911077020</p>
              <p><strong>Location:</strong> Dhaka, Bangladesh</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E63946] mb-4">8. Changes to Terms</h2>
            <p className="text-[#D3D3D3] leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3A3A3A]">
          <p className="text-center text-[#D3D3D3]">
            For any questions regarding these terms, please contact us at montysaha583@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;