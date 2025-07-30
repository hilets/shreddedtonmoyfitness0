import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Copy, MessageCircle, CheckCircle, Phone } from "lucide-react";
import { toast } from "sonner";

const Buy = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const itemName = searchParams.get('item') || '';
  const price = searchParams.get('price') || '';
  const originalPrice = searchParams.get('originalPrice') || '';
  const type = searchParams.get('type') || 'ebook';

  useEffect(() => {
    if (!itemName || !price) {
      navigate('/');
    }
  }, [itemName, price, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bkashNumber = "01911077020";
  const whatsappNumber = "+880 1911-077020";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Number copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hi! I want to purchase "${itemName}" for ${price}. I have made the bKash payment to ${bkashNumber}. Here is my payment screenshot:`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const calculateSavings = () => {
    if (!originalPrice) return 0;
    const original = parseInt(originalPrice.replace('৳', ''));
    const current = parseInt(price.replace('৳', ''));
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="mb-6 text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Purchase Card */}
        <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#E63946] to-[#D32F3F] text-white">
            <CardTitle className="text-2xl font-bold font-orbitron">
              Complete Your Purchase
            </CardTitle>
            <p className="text-white/90 font-inter">
              Follow the steps below to complete your {type} purchase
            </p>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Item Details */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-white font-semibold font-orbitron mb-2">
                {type === 'ebook' ? '📚' : '🏋️‍♂️'} {itemName}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#FFD700] font-orbitron">
                  {price}
                </span>
                {originalPrice && (
                  <>
                    <span className="text-lg line-through text-gray-400">
                      {originalPrice}
                    </span>
                    <Badge className="bg-green-600 text-white">
                      Save {calculateSavings()}%
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold font-orbitron text-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center text-white font-bold">1</div>
                Make bKash Payment
              </h3>
              
              <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl p-4 border border-pink-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">bKash Number:</span>
                  <Button
                    onClick={() => copyToClipboard(bkashNumber)}
                    variant="outline"
                    size="sm"
                    className="text-white border-white/30 hover:bg-white/10"
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
                <div className="text-2xl font-bold text-[#FFD700] font-mono tracking-wider">
                  {bkashNumber}
                </div>
                <p className="text-white/80 text-sm mt-2">
                  💡 Send money to this number via bKash app
                </p>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                <h4 className="text-white font-medium mb-2">Payment Steps:</h4>
                <ol className="text-white/80 text-sm space-y-1">
                  <li>1. Open your bKash app</li>
                  <li>2. Select "Send Money"</li>
                  <li>3. Enter: <span className="font-mono font-bold">{bkashNumber}</span></li>
                  <li>4. Amount: <span className="font-bold text-[#FFD700]">{price}</span></li>
                  <li>5. Complete the payment</li>
                  <li>6. Take a screenshot of payment confirmation</li>
                </ol>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold font-orbitron text-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center text-white font-bold">2</div>
                Send Payment Proof
              </h3>
              
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                Send Payment Screenshot via WhatsApp
              </Button>

              <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                <p className="text-white/90 text-sm">
                  📱 Click the button above to open WhatsApp and send your payment screenshot. 
                  Our team will verify and provide your {type} download link within 5-10 minutes.
                </p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/30">
              <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Important Notes:</h4>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Make sure to send the exact amount: <span className="font-bold">{price}</span></li>
                <li>• Keep your payment screenshot ready</li>
                <li>• You will receive download link after payment verification</li>
                <li>• Contact us on WhatsApp if you face any issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Buy;