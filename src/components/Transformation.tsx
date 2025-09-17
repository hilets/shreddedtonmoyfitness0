import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";

const Transformation = () => {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  // Updated transformation images with new Cloudinary URLs
  const transformationImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751969237/IMG_20250708_160625_b1oauv.jpg",
      alt: "Transformation 1",
      before: "Before 1",
      after: "After 1"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1752208470/IMG-20250711-WA0001_pfeqej.jpg",
      alt: "Transformation 2",
      before: "Before 2",
      after: "After 2"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931670/IMG-20250708-WA0002_qggjur.jpg",
      alt: "Transformation 3",
      before: "Before 3",
      after: "After 3"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931670/IMG-20250708-WA0006_de8btw.jpg",
      alt: "Transformation 4",
      before: "Before 4",
      after: "After 4"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931670/IMG-20250708-WA0008_s1wlqo.jpg",
      alt: "Transformation 5",
      before: "Before 5",
      after: "After 5"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931672/IMG-20250708-WA0003_us2fzw.jpg",
      alt: "Transformation 6",
      before: "Before 6",
      after: "After 6"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931673/IMG-20250708-WA0001_fehuze.jpg",
      alt: "Transformation 7",
      before: "Before 7",
      after: "After 7"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931672/IMG-20250708-WA0000_hy3u1o.jpg",
      alt: "Transformation 8",
      before: "Before 8",
      after: "After 8"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931672/IMG-20250708-WA0004_kcipec.jpg",
      alt: "Transformation 9",
      before: "Before 9",
      after: "After 9"
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751944945/IMG-20250708-WA0009_vjsjuz.jpg",
      alt: "Transformation 10",
      before: "Before 10",
      after: "After 10"
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1751931670/IMG-20250708-WA0005_syugio.jpg",
      alt: "Transformation 11",
      before: "Before 11",
      after: "After 11"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/di8qqawwn/image/upload/v1752208482/IMG-20250711-WA0000_homosi.jpg",
      alt: "Transformation 12",
      before: "Before 12",
      after: "After 12"
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105828/IMG-20250731-WA0006_pneutc.jpg",
      alt: "Transformation 13",
      before: "Before 13",
      after: "After 13"
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105828/IMG-20250731-WA0005_cmho8c.jpg",
      alt: "Transformation 14",
      before: "Before 14",
      after: "After 14"
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105828/IMG-20250731-WA0001_lqgxzd.jpg",
      alt: "Transformation 15",
      before: "Before 15",
      after: "After 15"
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105828/IMG-20250731-WA0004_bvlpgk.jpg",
      alt: "Transformation 16",
      before: "Before 16",
      after: "After 16"
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105828/IMG-20250731-WA0008_hr5n8c.jpg",
      alt: "Transformation 17",
      before: "Before 17",
      after: "After 17"
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105828/IMG-20250731-WA0007_mzhmem.jpg",
      alt: "Transformation 18",
      before: "Before 18",
      after: "After 18"
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105829/IMG-20250731-WA0011_gcgpzn.jpg",
      alt: "Transformation 19",
      before: "Before 19",
      after: "After 19"
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105829/IMG-20250731-WA0009_qric66.jpg",
      alt: "Transformation 20",
      before: "Before 20",
      after: "After 20"
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105829/IMG-20250731-WA0012_qgedax.jpg",
      alt: "Transformation 21",
      before: "Before 21",
      after: "After 21"
    },
    {
      id: 22,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105842/IMG-20250731-WA0010_fdbziv.jpg",
      alt: "Transformation 22",
      before: "Before 22",
      after: "After 22"
    },
    {
      id: 23,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105842/IMG-20250731-WA0013_q0mv0s.jpg",
      alt: "Transformation 23",
      before: "Before 23",
      after: "After 23"
    },
    {
      id: 24,
      src: "https://res.cloudinary.com/dazjez4ww/image/upload/v1754105843/IMG-20250731-WA0019_u0n1af.jpg",
      alt: "Transformation 24",
      before: "Before 24",
      after: "After 24"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Amazing <span className="text-[#FFD700]">Transformations</span>
          </h2>
          <p className="text-lg text-[#D3D3D3] max-w-2xl mx-auto font-inter">
            See the incredible results our clients have achieved with our proven fitness programs
          </p>
        </div>

        {!expandedImage ? (
          <div className="relative px-6 md:px-8">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {transformationImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="bg-[#0F0F0F] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                       <div className="relative">
                         <img 
                           src={image.src}
                           alt={image.alt}
                           className="w-full h-48 object-cover cursor-pointer transition-transform duration-300"
                           onClick={() => setExpandedImage(image.id)}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                         <div className="absolute bottom-4 left-4 right-4">
                           <div className="text-white text-sm font-bold">
                             Client Transformation #{image.id}
                           </div>
                           <div className="text-[#FFD700] text-xs font-medium">
                             Amazing Results Achieved
                           </div>
                         </div>
                       </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-[#E63946] hover:bg-[#D32F3F] text-white border-none -left-4 md:-left-8 h-10 w-10 z-10" />
              <CarouselNext className="bg-[#E63946] hover:bg-[#D32F3F] text-white border-none -right-4 md:-right-8 h-10 w-10 z-10" />
            </Carousel>
          </div>
        ) : (
          <div 
            className="px-6 md:px-8 animate-fade-in cursor-pointer"
            onClick={() => setExpandedImage(null)}
          >
            <div className="flex justify-center items-center h-[600px]">
              <img
                src={transformationImages.find(img => img.id === expandedImage)?.src}
                alt={transformationImages.find(img => img.id === expandedImage)?.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-[#D3D3D3] font-inter">
            Join thousands of satisfied clients who transformed their lives with our programs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
