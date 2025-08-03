import { Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Categories */}
          <div>
            <h3 className="font-inter text-lg tracking-[2px] mb-6">CATEGORIES</h3>
            <div className="space-y-2 font-inter text-sm tracking-[2px] opacity-75">
              <p>NEW ARRIVALS</p>
              <p>LEHENGA</p>
              <p>INDO WESTERN</p>
              <p>DRESSES</p>
              <p>SAREES</p>
              <p>JUMPSUIT</p>
              <p>GOWNS</p>
              <p>ANARKALI</p>
            </div>
          </div>
          
          {/* The Company */}
          <div>
            <h3 className="font-inter text-lg tracking-[2px] mb-6">THE COMPANY</h3>
            <div className="space-y-2 font-inter text-sm tracking-[2px] opacity-75">
               <Link to="/about-us" className="block hover:text-brand-gold transition-colors">
                ABOUT US
              </Link>
              <p>AASHU'S STORES</p>
              <p>SIZE CHART</p>
              <p>CELEBRITY STYLE</p>
              <p>ORDER CUSTOMIZATION</p>
              <p>CAREERS</p>
              <p>GIVE US FEEDBACK</p>
              <p>BESTSELLERS</p>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-inter text-lg tracking-[2px] mb-6">LEGAL</h3>
            <div className="space-y-2 font-inter text-sm tracking-[2px] opacity-75">
              <p>PRIVACY POLICY</p>
              <p>PAYMENT POLICY</p>
              <Link to="/contact-us" className="block hover:text-brand-gold transition-colors">
                CONTACT US
              </Link>
              <p>SHIPPING POLICY</p>
              <p>FAQ's</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-inter text-lg tracking-[2px] mb-6">NEWSLETTER</h3>
            
            {/* Email Input */}
            <div className="mb-4">
              <div className="flex items-center border-b border-white/50 pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent placeholder-white/50 font-inter text-sm tracking-[2px] flex-1 outline-none"
                />
                <button className="ml-2">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Follow Us */}
            <div>
              <h4 className="font-inter text-lg tracking-[2px] mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-inter text-sm tracking-[2px] opacity-75">
            © 2024 Aashu's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
