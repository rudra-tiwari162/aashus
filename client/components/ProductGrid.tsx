import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const sampleProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Aurelia Powder Blue...",
  price: 58000,
  image: "https://api.builder.io/api/v1/image/assets/TEMP/4142dc149b00e38ccf2bcda99b675e4260570915?width=736"
}));

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const productsPerPage = 12;

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Filter and Sort Header */}
        <div className="flex items-center justify-between mb-12">
          {/* Show Filters */}
          <button className="flex items-center space-x-2 text-black hover:text-brand-gold transition-colors">
            <span className="font-inter text-sm tracking-[2px]">Show Filters</span>
            <Filter className="w-4 h-4" />
          </button>

          {/* Sort By */}
          <button className="flex items-center space-x-2 text-black hover:text-brand-gold transition-colors">
            <span className="font-inter text-sm tracking-[2px]">Sort By</span>
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {sampleProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer block"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] md:h-[450px] lg:h-[510px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-inter text-lg md:text-xl lg:text-2xl tracking-[2px] text-gray-800 text-center">
                  {product.name}
                </h3>
                <p className="font-inter text-lg md:text-xl lg:text-2xl tracking-[2px] text-gray-800 text-center opacity-75">
                  INR {product.price.toLocaleString()}/-
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-8">
          {/* Previous Button */}
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

          {/* Page Info */}
          <div className="text-center">
            <p className="font-inter text-lg md:text-xl tracking-[2px] text-gray-800">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          {/* Next Button */}
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
      </div>
    </section>
  );
}
