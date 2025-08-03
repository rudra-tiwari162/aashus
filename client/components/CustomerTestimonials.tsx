import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Thank you so much!! It's beautiful I'm super pleased with the service. It was sent right on time and the fitting is absolutely perfect!",
      customer: "Jaspreet Kaur",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/dea654f0628ad57c57b939cba7b0030c9d17e47c?width=922"
    },
    {
      id: 2,
      text: "Thank you so much!! It's beautiful I'm super pleased with the service. It was sent right on time and the fitting is absolutely perfect!",
      customer: "Jaspreet Kaur",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/dea654f0628ad57c57b939cba7b0030c9d17e47c?width=922"
    },
    {
      id: 3,
      text: "Thank you so much!! It's beautiful I'm super pleased with the service. It was sent right on time and the fitting is absolutely perfect!",
      customer: "Jaspreet Kaur",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/eaf00aa5ffb0085fb94cadbcc60b4a8d9aef89f7?width=922"
    },
    {
      id: 4,
      text: "Thank you so much!! It's beautiful I'm super pleased with the service. It was sent right on time and the fitting is absolutely perfect!",
      customer: "Jaspreet Kaur",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/32b50501f0393c255dc0959d1398717b52214a74?width=922"
    },
    {
      id: 5,
      text: "Thank you so much!! It's beautiful I'm super pleased with the service. It was sent right on time and the fitting is absolutely perfect!",
      customer: "Jaspreet Kaur",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/32b50501f0393c255dc0959d1398717b52214a74?width=922"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-20 bg-brand-cream overflow-hidden mb-[115px]">
      {/* Section Title with Heart Icon */}
      <div className="flex items-center justify-center gap-4 mb-16 px-4">
        <h2 className="font-inter text-4xl lg:text-5xl tracking-[2px] text-black font-normal">
          OUR CUSTOMERS
        </h2>
        <svg className="w-9 h-8 fill-black" width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 5.60466L18.5197 6.58734C18.5259 6.59392 18.5321 6.60042 18.5382 6.60686L19.5 5.60466ZM10.4313 26.2375C9.85118 25.7402 8.99382 25.8269 8.51635 26.4311C8.03888 27.0354 8.12212 27.9285 8.70228 28.4258L10.4313 26.2375ZM1.98082 20.5515C2.34134 21.2381 3.16802 21.4903 3.82722 21.1147C4.48645 20.7391 4.72856 19.8781 4.36802 19.1915L1.98082 20.5515ZM22.1661 10.3843C22.6975 10.9376 23.5589 10.9374 24.09 10.3839C24.6213 9.83045 24.6212 8.93321 24.0897 8.37991L22.1661 10.3843ZM2.72093 12.4754C2.72093 8.41156 4.92556 5.00362 7.93489 3.57083C10.8585 2.17888 14.7867 2.54751 18.5197 6.58734L20.4803 4.62198C16.0508 -0.17146 10.9093 -0.961478 6.8037 0.993244C2.78389 2.90714 0 7.35123 0 12.4754H2.72093ZM13.1465 32.055C14.0756 32.8179 15.0731 33.6315 16.084 34.2467C17.0945 34.8617 18.2476 35.3616 19.5 35.3616V32.5275C18.9384 32.5275 18.2776 32.2994 17.4568 31.7997C16.6363 31.3003 15.7852 30.6128 14.831 29.8292L13.1465 32.055ZM25.8536 32.055C28.4413 29.9299 31.7493 27.4953 34.3441 24.4518C36.9856 21.3537 39 17.5116 39 12.4754H36.2791C36.2791 16.6272 34.648 19.8273 32.3096 22.57C29.9246 25.3672 26.9183 27.5718 24.1691 29.8292L25.8536 32.055ZM39 12.4754C39 7.35123 36.2161 2.90714 32.1962 0.993244C28.0907 -0.961478 22.9492 -0.17146 18.5197 4.62198L20.4803 6.58734C24.2132 2.54751 28.1415 2.17888 31.065 3.57083C34.0744 5.00362 36.2791 8.41156 36.2791 12.4754H39ZM24.1691 29.8292C23.2148 30.6128 22.3637 31.3003 21.5432 31.7997C20.7224 32.2994 20.0616 32.5275 19.5 32.5275V35.3616C20.7524 35.3616 21.9055 34.8617 22.916 34.2467C23.927 33.6315 24.9243 32.8179 25.8536 32.055L24.1691 29.8292ZM14.831 29.8292C13.3872 28.6438 11.92 27.5136 10.4313 26.2375L8.70228 28.4258C10.2084 29.7168 11.7993 30.9487 13.1465 32.055L14.831 29.8292ZM4.36802 19.1915C3.35001 17.2528 2.72093 15.0567 2.72093 12.4754H0C0 15.5693 0.76177 18.2298 1.98082 20.5515L4.36802 19.1915ZM18.5382 6.60686L22.1661 10.3843L24.0897 8.37991L20.4618 4.60248L18.5382 6.60686Z" fill="black"/>
        </svg>
      </div>

      {/* Carousel Container with proper spacing */}
      <div className="relative max-w-[1415px] mx-auto px-4">
        <div className="overflow-hidden mb-[145px]" ref={emblaRef}>
          <div className="flex gap-8 md:gap-12 lg:gap-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-24px)] lg:flex-[0_0_calc(33.333%-32px)] min-w-0">
                {/* Testimonial Card Container - Exact Figma Proportions */}
                <div className="relative w-full max-w-[616px] mx-auto">
                  <div className="relative aspect-[616/611]">
                    {/* Background cream layer - exact Figma positioning */}
                    <div 
                      className="absolute"
                      style={{
                        background: 'rgba(175, 118, 52, 0.37)',
                        width: '467px',
                        height: '510px',
                        left: '123px',
                        top: '31px'
                      }}
                    ></div>
                    
                    {/* Main image - exact Figma positioning */}
                    <div 
                      className="absolute overflow-hidden"
                      style={{
                        width: '461px',
                        height: '463px',
                        left: '173px',
                        top: '59px'
                      }}
                    >
                      <img 
                        src={testimonial.image}
                        alt={testimonial.customer}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Quote icon - exact Figma positioning */}
                      <div 
                        className="absolute"
                        style={{
                          left: '204px',
                          top: '143px'
                        }}
                      >
                        <svg className="w-[53px] h-[53px]" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2007_734)">
                            <path d="M10.1208 38.2506C7.84621 35.8347 6.625 33.1251 6.625 28.7327C6.625 21.0035 12.0509 14.076 19.9413 10.6509L21.9133 13.694C14.5485 17.6778 13.1087 22.8475 12.5345 26.107C13.7204 25.4931 15.2728 25.2789 16.7944 25.4202C20.7782 25.789 23.9185 29.0595 23.9185 33.1251C23.9185 35.175 23.1041 37.1409 21.6546 38.5904C20.2051 40.0399 18.2392 40.8543 16.1893 40.8543C13.8198 40.8543 11.554 39.7722 10.1208 38.2506ZM32.2041 38.2506C29.9295 35.8347 28.7083 33.1251 28.7083 28.7327C28.7083 21.0035 34.1342 14.076 42.0246 10.6509L43.9966 13.694C36.6318 17.6778 35.192 22.8475 34.6178 26.107C35.8037 25.4931 37.3562 25.2789 38.8777 25.4202C42.8615 25.789 46.0018 29.0595 46.0018 33.1251C46.0018 35.175 45.1875 37.1409 43.738 38.5904C42.2885 40.0399 40.3225 40.8543 38.2726 40.8543C35.9031 40.8543 33.6373 39.7722 32.2041 38.2506Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_2007_734">
                              <rect width="53" height="53" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      
                      {/* Text content - exact Figma positioning */}
                      <div 
                        className="absolute text-white"
                        style={{
                          width: '443px',
                          height: '181px',
                          left: '16px',
                          top: '206px'
                        }}
                      >
                        <p 
                          className="font-inter font-light tracking-[2px] mb-6"
                          style={{
                            fontSize: '20px',
                            lineHeight: '42px',
                            fontWeight: '300'
                          }}
                        >
                          {testimonial.text}
                        </p>
                        
                        {/* Divider line - exact Figma positioning */}
                        <div 
                          className="bg-white absolute"
                          style={{
                            width: '26px',
                            height: '1px',
                            left: '135px',
                            top: '153px'
                          }}
                        ></div>
                        
                        {/* Customer name - exact Figma positioning */}
                        <p 
                          className="font-inter font-light tracking-[2px] absolute"
                          style={{
                            fontSize: '20px',
                            lineHeight: '42px',
                            fontWeight: '300',
                            left: '184px',
                            top: '134px',
                            width: '168px',
                            height: '37px'
                          }}
                        >
                          {testimonial.customer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel indicators only - no navigation buttons */}
      <div className="flex justify-center mt-8 space-x-3 px-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === selectedIndex ? 'bg-black/60' : 'bg-black/20 hover:bg-black/40'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
