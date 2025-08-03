import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const allProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Aurelia Powder Blue...",
  price: 58000,
  image: "https://api.builder.io/api/v1/image/assets/TEMP/4142dc149b00e38ccf2bcda99b675e4260570915?width=736"
}));

const PRODUCTS_PER_PAGE = 6;

export default function Recommendations({ showAll = false }: { showAll?: boolean }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = allProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const sampleProducts = allProducts.slice(0, 3);
  const productsToShow = showAll ? paginatedProducts : sampleProducts;

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center font-inter text-4xl lg:text-5xl tracking-[2px] mb-16 text-black font-normal">
          RECOMMENDATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {productsToShow.map((product, index) => (
            <div key={product.id} className="text-center">
              <Link
                to={`/product/${product.id}`}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] md:h-[450px] lg:h-[510px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-inter text-lg md:text-xl lg:text-2xl tracking-[2px] text-gray-800 text-center">
                  {product.name}
                </h3>
                <p className="font-inter text-lg md:text-xl lg:text-2xl tracking-[2px] text-gray-800 text-center opacity-75">
                  INR {product.price.toLocaleString()}/-
                </p>
              </Link>
              {!showAll && index === 1 && (
                <Link to="/recommendations">
                  <button className="mt-4 bg-brand-gold text-white font-bold py-2 px-4 rounded">
                    Explore
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
        {showAll && totalPages > 1 && (
          <div className="flex items-center justify-center space-x-8">
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-20 h-16 border border-black transition-colors ${
                currentPage === 1 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'hover:bg-black hover:text-white'
              }`}
            >
              <ChevronLeft className="w-7 h-6" strokeWidth={2} />
            </button>

            <div className="text-center">
              <p className="font-inter text-lg md:text-xl tracking-[2px] text-gray-800">
                Page {currentPage} of {totalPages}
              </p>
            </div>

            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-20 h-16 border border-black transition-colors ${
                currentPage === totalPages 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'hover:bg-black hover:text-white'
              }`}
            >
              <ChevronRight className="w-7 h-6" strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
