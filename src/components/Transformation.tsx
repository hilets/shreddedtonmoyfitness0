import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Transformation = () => {
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
                        className="w-full h-48 object-cover"
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
