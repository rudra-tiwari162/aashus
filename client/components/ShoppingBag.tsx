import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@lib/context/CartContext';

export default function ShoppingBag() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach(id => removeFromCart(id));
    setSelectedItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => {
    if (selectedItems.includes(item.id)) {
      return sum + item.price * item.quantity;
    }
    return sum;
  }, 0);

  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-[2px] text-black">
            SHOPPING BAG
          </h1>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSelectAll}
              className="w-6 h-6 border border-black bg-gray-100/20 flex items-center justify-center hover:bg-brand-gold/10 transition-colors"
            >
              {selectedItems.length === cartItems.length && cartItems.length > 0 && (
                <div className="w-4 h-4 bg-gray-800 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
            <span className="font-inter text-sm tracking-[2px] text-black">
              SELECT ALL
            </span>
          </div>
          
          <button
            onClick={handleRemoveSelected}
            className="font-inter text-sm tracking-[2px] text-red-500 hover:text-red-600 transition-colors"
          >
            Remove
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mb-16">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-brand-gold bg-transparent p-6 flex items-center space-x-6"
            >
              {/* Checkbox */}
              <button
                onClick={() => handleSelectItem(item.id)}
                className="w-6 h-6 border border-brand-gold bg-gray-100/20 flex items-center justify-center hover:bg-brand-gold/10 transition-colors flex-shrink-0"
              >
                {selectedItems.includes(item.id) && (
                  <div className="w-6 h-6 bg-gray-800 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white">
                      <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>

              {/* Product Image */}
              <div className="w-32 h-24 lg:w-[169px] lg:h-[126px] flex-shrink-0">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 space-y-2">
                <h3 className="font-inter text-lg lg:text-2xl tracking-[2px] text-gray-800">
                  {item.name}
                </h3>
                <p className="font-inter text-lg lg:text-2xl tracking-[2px] text-gray-800 opacity-73">
                  INR {item.price.toLocaleString()}/-
                </p>
                <p className="font-inter text-lg lg:text-xl tracking-[2px] text-black opacity-73">
                  Size - {item.size}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="px-2 py-1 border border-black">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border border-black">+</button>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-6 h-6 flex-shrink-0 hover:text-red-500 transition-colors"
              >
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f1ecbecfe4e3ee91e404c9acfb7e6f6a75f81905?width=48"
                  alt="Remove item"
                  className="w-full h-full"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Divider Lines */}
        <div className="space-y-0">
          <div className="w-full h-px bg-black opacity-14"></div>
          <div className="h-16"></div>
          <div className="w-full h-px bg-black opacity-14"></div>
        </div>

        {/* Subtotal and Checkout */}
        <div className="flex items-center justify-between pt-8">
          <div className="flex items-center space-x-4">
            <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
              Subtotal ({selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''})
            </span>
            <div className="flex items-center space-x-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b8aea23e2477b5bc5a5b888ca4dff81ba242c533?width=48"
                alt="Rupee symbol"
                className="w-6 h-6 opacity-92"
              />
              <span className="font-inter text-lg lg:text-xl tracking-[2px] text-black opacity-92">
                {subtotal.toLocaleString()}/-
              </span>
            </div>
          </div>

            <Link
            to="/checkout"
            className="bg-brand-gold text-brand-cream font-inter font-bold text-sm lg:text-base tracking-[2px] px-8 lg:px-12 py-3 lg:py-4 rounded-lg hover:bg-brand-gold/90 transition-colors inline-block text-center"
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </section>
  );
}
