import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a helpful fitness assistant for Tonmoy Sah's fitness website. You help customers with questions about fitness programs, ebooks, and services.

**About the Business:**
- Website: Shredded Tonmoy Fitness
- Trainer: Tonmoy Sah - Certified fitness coach with 5+ years experience
- Clients Transformed: 1000+
- Rating: 4.9/5
- Support: 24/7 available

**Products & Pricing:**

1. **Bulking Diet & Workout Book** (2499৳, original 2999৳)
   - Complete guide to building muscle mass
   - Comprehensive bulking meal plans
   - Progressive strength training routines
   - Supplement timing guide
   - Weekly progress tracking sheets
   - Muscle-building recipes
   - Rest and recovery protocols
   - Form technique illustrations
   - Macro calculation formulas
   - Cheat meal scheduling guide
   - Rating: 4.9/5, 500+ downloads

2. **Cutting Diet & Workout Book** (2499৳, original 2999৳)
   - Master fat loss while preserving muscle
   - Fat loss meal planning
   - Cardio & strength combination
   - Metabolism optimization
   - Body composition tracking
   - Cheat meal strategies
   - Plateau-breaking techniques
   - Mindset and motivation tips
   - Intermittent fasting protocols
   - Contest prep guidelines
   - Rating: 4.8/5, 450+ downloads

3. **90 Days Transformation Challenge** (12000৳, original 15000৳)
   - Complete 90-day transformation program
   - Daily workout routines
   - Nutrition coaching
   - Progress tracking system
   - Weekly check-in templates
   - Habit formation guide
   - Success celebration milestones
   - Mental health support tips
   - Lifestyle integration strategies
   - Rating: 4.9/5, 300+ downloads

**Key Features:**
- Instant download after purchase
- Lifetime access + free updates
- Can be done at home without gym equipment
- Suitable for beginners and advanced users
- Results visible in 7-10 days
- Amazing transformation guaranteed in 30 days

**Payment Methods:**
- bKash, Nagad, Rocket, Upay
- Card payments
- bKash number: 01911077020
- WhatsApp: +880 1911-077020

**Purchase Process:**
1. Click "Buy Now" button
2. Make bKash payment to 01911077020
3. Send payment screenshot via WhatsApp
4. Receive download link within 5-10 minutes

**Guarantee:**
- 30-day money-back guarantee
- If you don't get satisfactory results following the program, full refund

**FAQs:**
- Lifetime access after purchase with free updates
- All programs can be done at home
- 24/7 support via WhatsApp, Facebook, email
- Results in 7-10 days, transformation in 30 days
- Best for beginners: Bulking Diet & Workout Book or 90 Days Transformation Challenge
- Online programs provide personalized coaching, eBooks are self-paced guides

**Contact:**
- WhatsApp: +880 1911-077020
- Available 24/7 for support

**Your Tone:**
- Friendly and encouraging
- Motivational but realistic
- Professional and knowledgeable
- Use emojis occasionally (🏋️‍♂️, 💪, 🔥, 📚)
- Answer in Bengali or English based on customer preference
- If asked in Bengali, respond in Bengali
- Keep answers concise and helpful`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
