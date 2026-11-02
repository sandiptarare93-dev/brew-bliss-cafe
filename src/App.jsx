import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import OffersSection from './components/OffersSection';
import MarketingDashboard from './components/MarketingDashboard';
import SocialMediaSection from './components/SocialMediaSection';
import CustomerFeedbackSection from './components/CustomerFeedbackSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import AiAssistantModal from './components/AiAssistantModal';
import Toast from './components/Toast';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('brew_bliss_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedPromo, setAppliedPromo] = useState(() => {
    try {
      const saved = localStorage.getItem('brew_bliss_promo');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('brew_bliss_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Sync applied promo
  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem('brew_bliss_promo', JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem('brew_bliss_promo');
      }
    } catch (e) {
      console.warn('Failed to save promo to localStorage', e);
    }
  }, [appliedPromo]);

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast('Added to tray!', `${item.name} added to your demo order.`);
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed', 'Item was removed from your tray.');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleApplyPromo = (promoObj) => {
    setAppliedPromo(promoObj);
    showToast('Promo code applied!', `${promoObj.code}: ${promoObj.desc}`);
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    showToast('Promo removed', 'Code was removed from cart.');
  };

  const handleApplyOfferFromSection = (promoObj) => {
    handleApplyPromo(promoObj);
    setIsCartOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C170A]">
      {/* Sticky Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onViewOffers={() => scrollToSection('offers')}
        />

        {/* 2. About Concept */}
        <AboutSection />

        {/* 3. Digital Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItems={cart}
        />

        {/* 4. Special Offers */}
        <OffersSection
          onApplyOfferCode={handleApplyOfferFromSection}
        />

        {/* 5. Digital Marketing Dashboard */}
        <MarketingDashboard />

        {/* 6. Social Media Campaigns */}
        <SocialMediaSection />

        {/* 7. Community Feedback */}
        <CustomerFeedbackSection />

        {/* 8. Contact & Location */}
        <ContactSection />

        {/* 9. Newsletter Signup */}
        <NewsletterSection
          onApplyOfferCode={handleApplyOfferFromSection}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Shopping Cart Tray & Checkout Simulation */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
        onRemovePromo={handleRemovePromo}
      />

      {/* Floating AI Café Assistant (Demo Mode) */}
      <AiAssistantModal />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
