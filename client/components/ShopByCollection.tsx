export default function ShopByCollection() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="max-w-[1152px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center font-inter text-4xl lg:text-5xl tracking-[2px] mb-16 text-black font-normal">
          SHOP BY COLLECTION
        </h2>
        
        {/* Collections Layout - Exact Figma Positioning */}
        <div className="relative h-[600px] lg:h-[672px]">
          {/* AFREEN - Large Left Image */}
          <div 
            className="absolute"
            style={{
              left: '0px',
              top: '0px',
              width: '368px',
              height: '510px'
            }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/434e0d8461490f57673a4d2a7e1ae39f9b4388af?width=736"
              alt="AFREEN Collection"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
              style={{
                width: '168px',
                height: '47px',
                left: '75px',
                top: '439px'
              }}
            >
              <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                AFREEN
              </span>
            </div>
          </div>
          
          {/* GUL - Top Middle */}
          <div 
            className="absolute"
            style={{
              left: '294px',
              top: '57px',
              width: '270px',
              height: '396px'
            }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/67a3c5351f2ef40e51a9976f5602418cfffe9622?width=540"
              alt="GUL Collection"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
              style={{
                width: '168px',
                height: '47px',
                left: '51px',
                top: '325px'
              }}
            >
              <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                GUL
              </span>
            </div>
          </div>
          
          {/* HEERIYE - Top Right */}
          <div 
            className="absolute"
            style={{
              left: '588px',
              top: '57px',
              width: '270px',
              height: '396px'
            }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/67a3c5351f2ef40e51a9976f5602418cfffe9622?width=540"
              alt="HEERIYE Collection"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
              style={{
                width: '168px',
                height: '47px',
                left: '51px',
                top: '325px'
              }}
            >
              <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                HEERIYE
              </span>
            </div>
          </div>
          
          {/* BANNO RE - Far Right */}
          <div 
            className="absolute"
            style={{
              left: '882px',
              top: '57px',
              width: '270px',
              height: '396px'
            }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/67a3c5351f2ef40e51a9976f5602418cfffe9622?width=540"
              alt="BANNO RE Collection"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute bg-brand-gold rounded-lg flex items-center justify-center"
              style={{
                width: '168px',
                height: '47px',
                left: '51px',
                top: '325px'
              }}
            >
              <span className="text-brand-cream font-inter font-bold text-base tracking-[2px]">
                BANNO RE
              </span>
            </div>
          </div>
          
          {/* EXPLORE Button - Centered Bottom */}
          <div 
            className="absolute"
            style={{
              left: '492px',
              top: '542px',
              width: '168px',
              height: '47px'
            }}
          >
            <button className="w-full h-full border-2 border-brand-gold bg-transparent text-brand-gold font-inter font-bold text-base tracking-[2px] rounded-lg hover:bg-brand-gold hover:text-brand-cream transition-colors">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
