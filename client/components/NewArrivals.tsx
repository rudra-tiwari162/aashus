export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Aurelia Powder Blue...",
      price: "INR 58,000/-",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4142dc149b00e38ccf2bcda99b675e4260570915?width=736"
    },
    {
      id: 2,
      name: "Aurelia Powder Blue...",
      price: "INR 58,000/-",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4142dc149b00e38ccf2bcda99b675e4260570915?width=736"
    },
    {
      id: 3,
      name: "Aurelia Powder Blue...",
      price: "INR 58,000/-",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4142dc149b00e38ccf2bcda99b675e4260570915?width=736"
    }
  ];

  return (
    <section className="py-16 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center font-inter text-3xl lg:text-4xl tracking-[2px] mb-8">
          NEW ARRIVALS
        </h2>
        
        {/* Large Hero Image */}
        <div className="mb-12">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/612cdd9563b8d4ee5497b130d4ab13f4ef52b0d2?width=2304"
            alt="New Arrivals Collection"
            className="w-full h-[400px] md:h-[500px] lg:h-[648px] object-cover"
          />
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <div className="aspect-[368/510] mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-inter text-lg lg:text-xl tracking-[2px] mb-2 text-brand-dark">
                {product.name}
              </h3>
              <p className="font-inter text-lg lg:text-xl tracking-[2px] opacity-75 text-brand-dark">
                {product.price}
              </p>
            </div>
          ))}
        </div>
        
        {/* Explore Button */}
        <div className="text-center">
          <button className="border-2 border-brand-gold text-brand-gold font-inter font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg hover:bg-brand-gold hover:text-brand-cream transition-colors">
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
}
