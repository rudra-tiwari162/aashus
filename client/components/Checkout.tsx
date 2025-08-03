import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    streetName: '',
    houseNumber: '',
    apartment: '',
    postalCode: '',
    deliveryMethod: '',
    paymentMethod: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear the error for the field when the user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.streetName) errors.streetName = 'Street name is required';
    if (!formData.houseNumber) errors.houseNumber = 'House number is required';
    if (!formData.postalCode) errors.postalCode = 'Postal code is required';
    if (!formData.deliveryMethod) errors.deliveryMethod = 'Delivery method is required';
    if (!formData.paymentMethod) errors.paymentMethod = 'Payment method is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Handle payment processing
    console.log('Processing payment...', formData);
  };

  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-[2px] text-black">
            CHECKOUT
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-brand-cream border border-brand-gold p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {Object.keys(formErrors).length > 0 && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> Please fill out all required fields.</span>
                  </div>
                )}
                {/* Customer Information */}
                <div className="space-y-6">
                  <div className="border border-brand-gold">
                    <input
                      type="text"
                      placeholder="NAME"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                    />
                  </div>
                  {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
                  
                  <div className="border border-brand-gold">
                    <input
                      type="tel"
                      placeholder="PHONE NUMBER"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                    />
                  </div>
                  {formErrors.phone && <p className="text-red-500 text-xs italic">{formErrors.phone}</p>}

                  <div className="border border-brand-gold">
                    <input
                      type="email"
                      placeholder="EMAIL ID"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                    />
                  </div>
                  {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
                </div>

                {/* Delivery Method */}
                <div className="space-y-6">
                  <h2 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black text-center">
                    DELIVERY METHOD
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="courier"
                          checked={formData.deliveryMethod === 'courier'}
                          onChange={(e) => handleInputChange('deliveryMethod', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.deliveryMethod === 'courier' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        COURIER DELIVERY
                      </span>
                    </label>

                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="pickup"
                          checked={formData.deliveryMethod === 'pickup'}
                          onChange={(e) => handleInputChange('deliveryMethod', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.deliveryMethod === 'pickup' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        PICK UP FROM STORE
                      </span>
                    </label>
                  </div>
                  {formErrors.deliveryMethod && <p className="text-red-500 text-xs italic">{formErrors.deliveryMethod}</p>}
                </div>

                {/* Address Information */}
                <div className="space-y-6">
                  <h2 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black text-center">
                    ADDRESS INFORMATION
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border border-brand-gold">
                      <input
                        type="text"
                        placeholder="COUNTRY"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      />
                    </div>
                    {formErrors.country && <p className="text-red-500 text-xs italic">{formErrors.country}</p>}

                    <div className="border border-brand-gold">
                      <input
                        type="text"
                        placeholder="CITY"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      />
                    </div>
                    {formErrors.city && <p className="text-red-500 text-xs italic">{formErrors.city}</p>}

                    <div className="border border-brand-gold">
                      <input
                        type="text"
                        placeholder="STREET NAME"
                        value={formData.streetName}
                        onChange={(e) => handleInputChange('streetName', e.target.value)}
                        className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      />
                    </div>
                    {formErrors.streetName && <p className="text-red-500 text-xs italic">{formErrors.streetName}</p>}

                    <div className="border border-brand-gold">
                      <input
                        type="text"
                        placeholder="HOUSE NUMBER"
                        value={formData.houseNumber}
                        onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                        className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      />
                    </div>
                    {formErrors.houseNumber && <p className="text-red-500 text-xs italic">{formErrors.houseNumber}</p>}

                    <div className="border border-brand-gold">
                      <input
                        type="text"
                        placeholder="APARTMENT"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                        className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      />
                    </div>
                    

                    <div className="border border-brand-gold">
                      <input
                        type="text"
                        placeholder="POSTAL CODE"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      />
                    </div>
                    {formErrors.postalCode && <p className="text-red-500 text-xs italic">{formErrors.postalCode}</p>}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-6">
                  <h2 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black text-center">
                    PAYMENT METHOD
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit"
                          checked={formData.paymentMethod === 'credit'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.paymentMethod === 'credit' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        CREDIT CARD
                      </span>
                    </label>

                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="debit"
                          checked={formData.paymentMethod === 'debit'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.paymentMethod === 'debit' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        DEBIT CARD
                      </span>
                    </label>
                  </div>
                  {formErrors.paymentMethod && <p className="text-red-500 text-xs italic">{formErrors.paymentMethod}</p>}
                </div>

                {/* Pay Button */}
                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="bg-brand-gold text-brand-cream font-inter font-bold text-sm lg:text-base tracking-[2px] px-12 lg:px-16 py-3 lg:py-4 rounded-lg hover:bg-brand-gold/90 transition-colors"
                  >
                    PAY
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-cream border border-brand-gold p-6 lg:p-8 space-y-6">
              {/* Payment Method Button */}
              <button className="w-full bg-brand-gold/30 border border-brand-gold p-4 text-center">
                <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                  Use this payment method
                </span>
              </button>

              {/* Divider */}
              <div className="w-full h-px bg-black opacity-14"></div>

              {/* Order Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    Items:
                  </span>
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    ---
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    Delivery:
                  </span>
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    ---
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    Total:
                  </span>
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    ---
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    Promotion Applied:
                  </span>
                  <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black opacity-73">
                    ---
                  </span>
                </div>

                {/* Order Total */}
                <div className="flex justify-between items-center pt-4 border-t border-black/10">
                  <span className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black">
                    Order Total:
                  </span>
                  <div className="flex items-center space-x-2">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3eb3ff52aa4709d7d6fa64ed393f7714475f481b?width=56"
                      alt="Rupee symbol"
                      className="w-7 h-7"
                    />
                    <span className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black">
                      58,000/-
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}