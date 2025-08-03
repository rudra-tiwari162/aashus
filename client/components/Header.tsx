import { Link } from 'react-router-dom';
import { Menu, Search, User, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="w-full">
      {/* Top shipping banner */}
      <div className="bg-brand-dark text-white text-center py-2">
        <p className="text-sm font-inter tracking-[2px]">WORLDWIDE SHIPPING</p>
      </div>

      {/* Logo and action icons bar */}
      <div className="bg-brand-cream px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo - centered */}
          <div className="flex-1 text-center">
            <Link to="/" className="font-prata text-2xl lg:text-3xl text-brand-gold tracking-[2px]">
              Aashu's
            </Link>
          </div>

          {/* Action icons */}
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:text-brand-gold transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-1 hover:text-brand-gold transition-colors">
              <User className="h-5 w-5" />
            </button>
            <Link to="/shopping-bag" className="p-1 hover:text-brand-gold transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation menu bar */}
      <nav className="bg-brand-cream border-t border-brand-gold/20 px-4 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto">
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            <Link to="/" className="font-inter text-sm tracking-[2px] hover:text-brand-gold transition-colors">
              HOME
            </Link>
            <Link to="/new-arrivals" className="font-inter text-sm tracking-[2px] hover:text-brand-gold transition-colors">
              NEW ARRIVALS
            </Link>
            <Link to="/occasion" className="font-inter text-sm tracking-[2px] hover:text-brand-gold transition-colors">
              OCCASION
            </Link>
            <Link to="/collections" className="font-inter text-sm tracking-[2px] hover:text-brand-gold transition-colors">
              COLLECTIONS
            </Link>
            <Link to="/categories" className="font-inter text-sm tracking-[2px] hover:text-brand-gold transition-colors">
              CATEGORIES
            </Link>
            <Link to="/bestsellers" className="font-inter text-sm tracking-[2px] hover:text-brand-gold transition-colors">
              BESTSELLERS
            </Link>
          </div>

          {/* Mobile navigation menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 border-t pt-4 space-y-2">
              <Link to="/" className="block font-inter text-sm tracking-[2px] py-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/new-arrivals" className="block font-inter text-sm tracking-[2px] py-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                NEW ARRIVALS
              </Link>
              <Link to="/occasion" className="block font-inter text-sm tracking-[2px] py-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                OCCASION
              </Link>
              <Link to="/collections" className="block font-inter text-sm tracking-[2px] py-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                COLLECTIONS
              </Link>
              <Link to="/categories" className="block font-inter text-sm tracking-[2px] py-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                CATEGORIES
              </Link>
              <Link to="/bestsellers" className="block font-inter text-sm tracking-[2px] py-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                BESTSELLERS
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
