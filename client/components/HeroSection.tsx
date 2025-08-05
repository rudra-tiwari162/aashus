import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroSection() {
  const bannerImages = [
    {
      id: 1,
      image: "/images/banner1.jpg",
      title: "THE WORLD COLLECTION",
      subtitle: "Weaving timeless Tales within our Ethereal Threads"
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      title: "ETHEREAL ELEGANCE",
      subtitle: "Crafted with Love, Worn with Pride"
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      title: "TIMELESS TRADITIONS",
      subtitle: "Where Heritage Meets Contemporary Style"
    },
    {
      id: 4,
      image: "/images/banner4.jpg",
      title: "THE WORLD COLLECTION",
      subtitle: "Weaving timeless Tales within our Ethereal Threads"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Auto-advance carousel
    }
  }, [emblaApi]);

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[626px] w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {bannerImages.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${banner.image}')`
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Content overlay - positioned exactly as in Figma */}
              <div className="relative z-10 h-full flex items-end">
                <div 
                  className="text-white absolute"
                  style={{
                    left: '768px',
                    bottom: '24px',
                    width: '542px'
                  }}
                >
                  <h1 
                    className="font-artifika mb-4"
                    style={{
                      fontSize: '40px',
                      lineHeight: '52px'
                    }}
                  >
                    {banner.title}
                  </h1>
                  <p 
                    className="font-inter font-semibold"
                    style={{
                      fontSize: '20px',
                      lineHeight: '22px',
                      width: '503px'
                    }}
                  >
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* No navigation buttons or indicators as requested */}
    </section>
  );
}
