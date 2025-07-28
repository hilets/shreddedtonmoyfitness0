import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What are our eBooks about?",
      answer: "Our eBooks are specifically designed for fitness transformation. We offer Bulking Diet & Workout Guides, Cutting Diet & Workout Guides, and a 90-Day Transformation Challenge program."
    },
    {
      question: "How do I purchase an eBook?",
      answer: "Click the Buy Now button and complete your payment through card, bKash, Nagad, Rocket, Upay, and other methods. The eBook will automatically download or you'll receive a download link to access your purchase."
    },
    {
      question: "Do I get lifetime access after downloading the eBook?",
      answer: "Yes, once you purchase an eBook, you have lifetime access. You'll also receive any future updates for free. You can download it anytime you want."
    },
    {
      question: "Can I do this program at home?",
      answer: "Yes, all our eBooks and programs include exercises that can be done at home without any gym equipment. Perfect workouts using just your body weight."
    },
    {
      question: "What's the difference between online programs and eBooks?",
      answer: "eBooks are digital guides that you download and follow at your own pace. Online programs provide personalized coaching, live support, and customized plans."
    },
    {
      question: "How soon will I see results?",
      answer: "Following our programs, you'll see initial changes within 7-10 days. Complete 30 days of consistent following and you're guaranteed amazing transformation results."
    },
    {
      question: "How do I make payment?",
      answer: "We accept all popular mobile banking in Bangladesh: bKash, Nagad, Rocket, and Upay. After placing your order, contact us to complete the payment process."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you don't get satisfactory results following our program, we'll refund your full payment."
    },
    {
      question: "Which program is best for beginners?",
      answer: "For beginners, our 'Bulking Diet & Workout Book' or '90 Days Transformation Challenge' is most suitable. Everything is taught step by step with easy exercises to start with."
    },
    {
      question: "How do I get support?",
      answer: "We have 24/7 support team available. You can contact us anytime through WhatsApp, Facebook, or email. We also provide personal guidance."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-[#1C1C1C]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#D3D3D3] max-w-2xl mx-auto font-inter">
            Most commonly asked questions about our eBooks and fitness programs
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-[#3A3A3A] rounded-xl shadow-lg border border-gray-600 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-600/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4 font-inter">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-[#E63946] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#E63946] flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <p className="text-[#D3D3D3] leading-relaxed font-inter">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#D3D3D3] mb-4 font-inter">
            Have more questions?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E63946] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors font-inter"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
