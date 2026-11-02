import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu, X, Sparkles, BarChart3, Tag } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu', badge: '18 Items' },
    { label: 'Offers', href: '#offers', icon: Tag },
    { label: 'Dashboard', href: '#dashboard', icon: BarChart3, highlight: true },
    { label: 'Campaigns', href: '#campaigns' },
    { label: 'Feedback', href: '#feedback' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Academic Showcase Banner */}
      <div className="bg-[#432310] text-[#E8D8C8] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#603316]/50">
        <span className="inline-flex items-center gap-1 bg-[#D4A373]/20 text-[#D4A373] px-2 py-0.5 rounded-full text-[11px] font-semibold border border-[#D4A373]/30">
          <Sparkles className="w-3 h-3" /> DEMO SHOWCASE
        </span>
        <span>College Digital Marketing Project • Realistic Simulation (No Live Charges)</span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md border-b border-[#E8D8C8]'
            : 'bg-[#FDFBF7] border-b border-[#F5EBE1]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#94582E] rounded-lg p-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7B4420] to-[#432310] flex items-center justify-center text-[#FDFBF7] shadow-md group-hover:scale-105 transition-transform duration-200">
                <Coffee className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#2C170A] group-hover:text-[#7B4420] transition-colors leading-none">
                  Brew Bliss <span className="text-[#94582E]">Café</span>
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#B88658] font-semibold mt-1">
                  Sip. Relax. Repeat.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${
                    link.highlight
                      ? 'bg-[#F5EBE1] text-[#7B4420] hover:bg-[#E8D8C8] font-semibold border border-[#D7BEA8]'
                      : 'text-[#603316] hover:text-[#2C170A] hover:bg-[#F5EBE1]'
                  }`}
                >
                  {link.icon && <link.icon className="w-4 h-4 text-[#94582E]" />}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] bg-[#94582E] text-white px-1.5 py-0.2 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Cart Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCart}
                aria-label={`Open shopping cart with ${cartCount} items`}
                className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#7B4420] text-white hover:bg-[#603316] active:scale-95 transition-all shadow-sm group"
              >
                <ShoppingBag className="w-5 h-5 text-[#D4A373] group-hover:rotate-6 transition-transform" />
                <span className="hidden sm:inline text-sm font-semibold">Cart</span>
                <span className="bg-[#D4A373] text-[#2C170A] text-xs font-bold rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2.5 rounded-lg text-[#603316] hover:bg-[#F5EBE1] focus:outline-none focus:ring-2 focus:ring-[#94582E]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8D8C8] bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  link.highlight
                    ? 'bg-[#F5EBE1] text-[#7B4420] font-semibold border border-[#D7BEA8]'
                    : 'text-[#432310] hover:bg-[#F5EBE1]'
                }`}
              >
                <div className="flex items-center gap-3">
                  {link.icon && <link.icon className="w-5 h-5 text-[#94582E]" />}
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-xs bg-[#94582E] text-white px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 bg-[#7B4420] text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow"
              >
                <ShoppingBag className="w-5 h-5 text-[#D4A373]" />
                <span>View Cart ({cartCount} items)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
