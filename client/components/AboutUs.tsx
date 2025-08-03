export default function AboutUs() {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-[2px] text-black">
            ABOUT US
          </h1>
        </div>

        {/* Image Section with Background Elements */}
        <div className="relative mb-16">
          {/* Background decorative rectangles */}
          <div 
            className="absolute top-0 left-8 lg:left-16 w-64 lg:w-[466px] h-48 lg:h-[319px] z-0"
            style={{background: 'rgba(175, 118, 52, 0.28)'}}
          ></div>
          <div 
            className="absolute bottom-0 right-8 lg:right-16 w-64 lg:w-[466px] h-48 lg:h-[319px] z-0"
            style={{background: 'rgba(175, 118, 52, 0.28)'}}
          ></div>

          {/* Main Image */}
          <div className="relative z-10 flex justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f880480c716754d08f3c27b9a13556c2485185d1?width=1520"
              alt="Aashu's team - three women representing the brand"
              className="w-full max-w-[760px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="border border-brand-gold bg-brand-cream p-6 lg:p-8">
          <div className="max-w-full">
            <p className="font-inter text-lg lg:text-xl leading-[42px] tracking-[2px] text-black">
              Aashu's was started in June 2020 with the love for art and creativity. All the 3 of us were always into something creative, little did we know, we would together start a brand one day. We create everything hand-painted, sarees, lehengas and more, adding pearls or sequins for that extra shimmer! All our pieces are inspired by nature, the flowers, the leaves, everything. We take pride in the fact that every little detail is hand-painted. Each and every sequin/pearl is hand-embroidered on the motifs.
            </p>
            <br />
            <p className="font-inter text-lg lg:text-xl leading-[42px] tracking-[2px] text-black">
              Ours is a made to order brand as we believe in creating each piece specially for each of our clients according to their preferences. With our customisation process, we absolutely love creating unique pieces for everyone. Quality and customer satisfaction are of the utmost importance to us. The team also makes sure each and every order reaches the client in the specified timeline. The most joyous moment for us is to see a happy face wearing Aashu's!
            </p>
            <br />
            <p className="font-inter text-lg lg:text-xl leading-[42px] tracking-[2px] text-black">
              We feel our brand is all about floral art and happy colours and we want to make you feel beautiful from the inside. Our garments make the perfect outfits for everyone from wedding functions to intimate get-togethers.
            </p>
            <br />
            <p className="font-inter text-lg lg:text-xl leading-[42px] tracking-[2px] text-black font-medium">
              We are an all women team involved in creating the perfect piece for you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
