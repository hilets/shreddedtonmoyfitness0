import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Button
          onClick={() => navigate("/")}
          className="mb-8 bg-[#E63946] hover:bg-[#E63946]/80 text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#E63946] mb-4">Terms & Conditions</h1>
            <p className="text-[#D3D3D3] text-lg">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-[#1C1C1C] p-8 rounded-lg border border-[#3A3A3A]">
              <h2 className="text-2xl font-semibold text-[#E63946] mb-4">Service Agreement</h2>
              <p className="text-[#D3D3D3] leading-relaxed mb-4">
                By purchasing our fitness programs and ebooks, you agree to follow the provided guidelines and instructions. 
                Our programs are designed based on scientific principles and proven methodologies.
              </p>
              <p className="text-[#D3D3D3] leading-relaxed">
                All content provided is for educational purposes and should be used in conjunction with proper medical advice 
                if you have any health conditions.
              </p>
            </section>

            <section className="bg-[#1C1C1C] p-8 rounded-lg border border-[#3A3A3A]">
              <h2 className="text-2xl font-semibold text-[#E63946] mb-4">30-Day Money Back Guarantee</h2>
              <div className="text-[#D3D3D3] leading-relaxed space-y-4">
                <p>
                  <strong>We stand behind our programs 100%.</strong> If you follow our program exactly as outlined 
                  and don't see results within 30 days, we will provide a full refund.
                </p>
                <p>
                  <strong>Refund Conditions:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must follow the program for a minimum of 30 consecutive days</li>
                  <li>You must provide progress photos and measurements as proof of compliance</li>
                  <li>You must maintain consistent workout and nutrition tracking</li>
                  <li>Refund requests must be submitted within 35 days of purchase</li>
                  <li>You must provide evidence that you followed the program as instructed</li>
                </ul>
                <p>
                  <strong>To request a refund:</strong> Contact us via WhatsApp at +8801911077020 with your proof of compliance 
                  and progress documentation. Refunds will be processed within 7-10 business days after approval.
                </p>
              </div>
            </section>

            <section className="bg-[#1C1C1C] p-8 rounded-lg border border-[#3A3A3A]">
              <h2 className="text-2xl font-semibold text-[#E63946] mb-4">Digital Product Policy</h2>
              <p className="text-[#D3D3D3] leading-relaxed mb-4">
                All our products are digital downloads. Upon successful payment, you will receive immediate access to your purchased content.
              </p>
              <p className="text-[#D3D3D3] leading-relaxed">
                Due to the digital nature of our products, all sales are final except under our 30-day money back guarantee terms outlined above.
              </p>
            </section>

            <section className="bg-[#1C1C1C] p-8 rounded-lg border border-[#3A3A3A]">
              <h2 className="text-2xl font-semibold text-[#E63946] mb-4">Intellectual Property</h2>
              <p className="text-[#D3D3D3] leading-relaxed mb-4">
                All content, including workout plans, nutrition guides, and educational materials, are the intellectual property 
                of Shredded Tonmoy Fitness.
              </p>
              <p className="text-[#D3D3D3] leading-relaxed">
                Redistribution, sharing, or reselling of our content is strictly prohibited and may result in legal action.
              </p>
            </section>

            <section className="bg-[#1C1C1C] p-8 rounded-lg border border-[#3A3A3A]">
              <h2 className="text-2xl font-semibold text-[#E63946] mb-4">Contact Information</h2>
              <div className="text-[#D3D3D3] leading-relaxed space-y-2">
                <p><strong>WhatsApp:</strong> +8801911077020</p>
                <p><strong>Email:</strong> montysaha583@gmail.com</p>
                <p><strong>Location:</strong> Dhaka, Bangladesh</p>
              </div>
            </section>

            <section className="bg-[#1C1C1C] p-8 rounded-lg border border-[#3A3A3A]">
              <h2 className="text-2xl font-semibold text-[#E63946] mb-4">Updates to Terms</h2>
              <p className="text-[#D3D3D3] leading-relaxed">
                We reserve the right to update these terms and conditions at any time. Updated terms will be posted on this page 
                and will be effective immediately upon posting.
              </p>
            </section>
          </div>

          <div className="text-center pt-8">
            <p className="text-sm text-[#D3D3D3]">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;