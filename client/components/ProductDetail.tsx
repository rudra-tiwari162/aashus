import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '@lib/context/CartContext';

const thumbnailImages = [
  "https://api.builder.io/api/v1/image/assets/TEMP/3cee7a9f4a84b5378c60f4266a7278cbcdddc8fd?width=148",
  "https://api.builder.io/api/v1/image/assets/TEMP/75f3b7812cf07fb01017f7a821b5c733357205f2?width=148",
  "https://api.builder.io/api/v1/image/assets/TEMP/4a975c80404c69248bcd982428d399f86053da0e?width=148",
  "https://api.builder.io/api/v1/image/assets/TEMP/c956154bd5f678944097c0e8148227421df9ce69?width=148",
  "https://api.builder.io/api/v1/image/assets/TEMP/ff82510162ebd0d88218fd4e56ff588b90b43a6e?width=148"
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const product = {
  id: 1,
  name: "Camilla Ivory Hand Embellished Net Fishcut Lehenga Set with Halter Neckline",
  price: 130000,
  image: "https://api.builder.io/api/v1/image/assets/TEMP/3cee7a9f4a84b5378c60f4266a7278cbcdddc8fd?width=148",
};

export default function ProductDetail() {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
    } else {
      alert('Please select a size');
    }
  };

  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="relative flex-shrink-0 w-16 h-24 lg:w-[74px] lg:h-[110px] rounded overflow-hidden border-2 border-transparent focus:outline-none"
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-white bg-opacity-50" />
                  )}
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="aspect-[3/4] lg:aspect-[466/649] w-full max-w-[466px] mx-auto">
                <img
                  src={thumbnailImages[selectedImage]}
                  alt="Camilla Ivory Hand Embellished Net Fishcut Lehenga Set"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="font-inter text-2xl lg:text-[24px] font-medium leading-[42px] tracking-[2px] text-gray-800">
              {product.name}
            </h1>

            {/* Product Description */}
            <p className="font-inter text-lg tracking-[2px] text-gray-800 opacity-79">
              Green embroidered corset with a draped skirt.
            </p>

            {/* Color */}
            <p className="font-inter text-lg tracking-[2px] text-gray-800 opacity-79">
              Color: Pink
            </p>

            {/* Set Include */}
            <p className="font-inter text-lg tracking-[2px] text-gray-800 opacity-79">
              Set Include: Skirt, Corset and Drape
            </p>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <span className="font-inter text-2xl tracking-[2px] text-gray-800">
                INR {product.price.toLocaleString()}
              </span>
              <span className="font-inter text-sm tracking-[2px] text-gray-800 opacity-79">
                (Inclusive of all taxes)
              </span>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-inter text-lg tracking-[2px] text-gray-800 opacity-79">
                  SIZE
                </span>
                <button className="font-inter text-xs font-bold tracking-[2px] text-brand-gold underline">
                  SIZE GUIDE
                </button>
              </div>

              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center font-inter text-sm tracking-[2px] transition-colors ${
                      selectedSize === size
                        ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                        : 'border-gray-400 hover:border-brand-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag Button */}
            <button onClick={handleAddToCart} className="w-full lg:w-[168px] h-12 bg-brand-gold rounded-lg font-inter text-white font-bold tracking-[2px] hover:bg-brand-gold/90 transition-colors">
              ADD TO BAG
            </button>

            {/* Expandable Sections */}
            <div className="space-y-0 border-t border-black/10">
              {/* Product Details */}
              <div className="border-b border-black/10 py-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-inter text-xl tracking-[2px] text-gray-800 opacity-78">
                    PRODUCT DETAILS
                  </span>
                  <Plus className="w-5 h-5 text-black opacity-78" />
                </button>
              </div>

              {/* Delivery & Returns */}
              <div className="border-b border-black/10 py-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-inter text-xl tracking-[2px] text-gray-800 opacity-78">
                    DELIVERY & RETURNS
                  </span>
                  <Plus className="w-5 h-5 text-black opacity-78" />
                </button>
              </div>

              {/* Disclaimer */}
              <div className="border-b border-black/10 py-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-inter text-xl tracking-[2px] text-gray-800 opacity-78">
                    DISCLAIMER
                  </span>
                  <Plus className="w-5 h-5 text-black opacity-78" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
