export default function ShopByCategory() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center font-inter text-4xl lg:text-5xl tracking-[2px] mb-16 text-black font-normal">
          SHOP BY CATEGORY
        </h2>
        
        {/* Category Layout - Responsive Grid */}
        <div className="relative w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Sarees */}
            <div className="relative w-full max-w-[300px] mx-auto">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2F52526326a2d149868eff7486dd835d21?format=webp&width=800"
                alt="Sarees Collection"
                className="w-full h-[400px] object-cover"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-cream font-inter font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                SAREES
              </button>
            </div>
            
            {/* Lehenga Sets */}
            <div className="relative w-full max-w-[300px] mx-auto">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2F16ce1cdf16124e56891f4245f8b1035b?format=webp&width=800"
                alt="Lehenga Sets Collection"
                className="w-full h-[400px] object-cover"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-cream font-inter font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                LEHENGA SETS
              </button>
            </div>
            
            {/* Indo Western */}
            <div className="relative w-full max-w-[300px] mx-auto">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2F002cf005bc1347a6a3e7d8e09329222b?format=webp&width=800"
                alt="Indo Western Collection"
                className="w-full h-[400px] object-cover"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-cream font-inter font-bold text-sm tracking-[2px] px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                INDO WESTERN
              </button>
            </div>
          </div>

          {/* Desktop Layout - Exact Figma Positioning */}
          <div className="hidden lg:block relative h-[900px] max-w-[1200px] mx-auto">
            {/* Left Image - Sarees */}
            <div 
              className="absolute w-[270px] h-[579px]"
              style={{
                left: '0px',
                top: '134px'
              }}
            >
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2F52526326a2d149868eff7486dd835d21?format=webp&width=800"
                alt="Sarees Collection"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
                style={{
                  width: '168px',
                  height: '47px',
                  left: '44px',
                  top: '614px'
                }}
              >
                <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                  SAREES
                </span>
              </div>
            </div>
            
            {/* Background Image */}
            <div 
              className="absolute"
              style={{
                width: '565px',
                height: '847px',
                left: '294px',
                top: '0px'
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2Fc102c2b7552c4cb4827f7a9d15f3e769?format=webp&width=800"
                alt="Category Background"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(50%)'
                }}
              />
            </div>
            
            {/* Center Overlay Image - Lehenga Sets */}
            <div 
              className="absolute z-10"
              style={{
                width: '445px',
                height: '667px',
                left: '354px',
                top: '95px'
              }}
            >
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2F16ce1cdf16124e56891f4245f8b1035b?format=webp&width=800"
                alt="Lehenga Sets Collection"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
                style={{
                  width: '168px',
                  height: '47px',
                  left: '132px',
                  top: '783px'
                }}
              >
                <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                  LEHENGA SETS
                </span>
              </div>
            </div>
            
            {/* Right Image - Indo Western */}
            <div 
              className="absolute"
              style={{
                width: '270px',
                height: '579px',
                left: '883px',
                top: '134px'
              }}
            >
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5861e8fe704c4114ae46cafbc91f9554%2F002cf005bc1347a6a3e7d8e09329222b?format=webp&width=800"
                alt="Indo Western Collection"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
                style={{
                  width: '168px',
                  height: '47px',
                  left: '51px',
                  bottom: '-24px',
                  top: '614px'
                }}
              >
                <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                  INDO WESTERN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
