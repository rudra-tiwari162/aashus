import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-[2px] text-black">
            CONTACT US
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="border border-brand-gold bg-brand-cream p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="border border-brand-gold">
                    <input
                      type="text"
                      placeholder="NAME"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      required
                    />
                  </div>
                  
                  <div className="border border-brand-gold">
                    <input
                      type="tel"
                      placeholder="PHONE NUMBER"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      required
                    />
                  </div>

                  <div className="border border-brand-gold">
                    <input
                      type="email"
                      placeholder="EMAIL ID"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-xl lg:text-2xl tracking-[2px] outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-6">
                  <h2 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black">
                    SUBJECT
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="subject"
                          value="enquire"
                          checked={formData.subject === 'enquire'}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.subject === 'enquire' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        ENQUIRE
                      </span>
                    </label>

                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="subject"
                          value="appointment"
                          checked={formData.subject === 'appointment'}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.subject === 'appointment' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        BOOK AN APPOINTMENT
                      </span>
                    </label>

                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="subject"
                          value="custom"
                          checked={formData.subject === 'custom'}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.subject === 'custom' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        CUSTOM ORDER
                      </span>
                    </label>
                  </div>
                </div>

                {/* Select Service */}
                <div className="space-y-6">
                  <h2 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black">
                    SELECT SERVICE
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="service"
                          value="virtual"
                          checked={formData.service === 'virtual'}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.service === 'virtual' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        VIRTUAL APPOINTMENT
                      </span>
                    </label>

                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="service"
                          value="instore"
                          checked={formData.service === 'instore'}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.service === 'instore' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        IN-STORE CONSULTATION
                      </span>
                    </label>

                    <label className="flex items-center space-x-4 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="service"
                          value="fitting"
                          checked={formData.service === 'fitting'}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="sr-only"
                        />
                        <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center">
                          {formData.service === 'fitting' && (
                            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <span className="font-inter text-xl lg:text-2xl tracking-[2px] text-black">
                        FITTING SESSION
                      </span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                  <h2 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black">
                    MESSAGE
                  </h2>
                  <div className="border border-brand-gold">
                    <textarea
                      placeholder="Tell us about your requirements, preferred dates, or any specific details..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className="w-full p-4 bg-transparent placeholder:text-black placeholder:opacity-45 font-inter text-lg tracking-[2px] outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="bg-brand-gold text-brand-cream font-inter font-bold text-sm lg:text-base tracking-[2px] px-12 lg:px-16 py-3 lg:py-4 rounded-lg hover:bg-brand-gold/90 transition-colors"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="border border-brand-gold bg-brand-cream p-6 lg:p-8">
                <h3 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black mb-8">
                  GET IN TOUCH
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-inter text-lg tracking-[2px] text-black font-medium mb-2">
                      EMAIL
                    </h4>
                    <p className="font-inter text-base tracking-[2px] text-black opacity-75">
                      hello@aashus.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-inter text-lg tracking-[2px] text-black font-medium mb-2">
                      PHONE
                    </h4>
                    <p className="font-inter text-base tracking-[2px] text-black opacity-75">
                      +91 98765 43210
                    </p>
                  </div>

                  <div>
                    <h4 className="font-inter text-lg tracking-[2px] text-black font-medium mb-2">
                      STUDIO HOURS
                    </h4>
                    <p className="font-inter text-base tracking-[2px] text-black opacity-75">
                      Monday - Saturday<br />
                      10:00 AM - 7:00 PM
                    </p>
                  </div>

                  <div>
                    <h4 className="font-inter text-lg tracking-[2px] text-black font-medium mb-2">
                      RESPONSE TIME
                    </h4>
                    <p className="font-inter text-base tracking-[2px] text-black opacity-75">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="border border-brand-gold bg-brand-cream p-6 lg:p-8">
                <h3 className="font-inter text-2xl lg:text-[28px] font-medium tracking-[2px] text-black mb-8">
                  OUR SERVICES
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <p className="font-inter text-base tracking-[2px] text-black">
                      Custom Design Consultation
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <p className="font-inter text-base tracking-[2px] text-black">
                      Virtual Fitting Sessions
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <p className="font-inter text-base tracking-[2px] text-black">
                      Bridal Collection Appointments
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <p className="font-inter text-base tracking-[2px] text-black">
                      Size & Fit Consultation
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <p className="font-inter text-base tracking-[2px] text-black">
                      Styling Recommendations
                    </p>
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
