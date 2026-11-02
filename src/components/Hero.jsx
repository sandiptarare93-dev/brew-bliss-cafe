import React from 'react';
import { ArrowRight, Coffee, Sparkles, Clock, Heart, Award, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreMenu, onViewOffers }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-[#F5EBE1]/60 via-[#FDFBF7] to-[#FDFBF7]">
      {/* Decorative background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4A373]/15 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBE1] border border-[#D7BEA8] text-[#7B4420] text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#94582E] animate-pulse" />
              <span>Artisan Roastery & Student Hub</span>
              <span className="text-[#D4A373]">•</span>
              <span className="font-normal text-[#603316]">Demo Concept</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C170A] tracking-tight leading-[1.15]">
              Every Great Idea Begins With a{' '}
              <span className="relative inline-block text-[#7B4420] italic">
                Blissful Brew.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D4A373]" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C40 2 120 1 199 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Tagline & Description */}
            <p className="text-xl sm:text-2xl font-serif text-[#94582E] italic font-medium">
              “Sip. Relax. Repeat.”
            </p>
            <p className="text-base sm:text-lg text-[#603316] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <strong>Brew Bliss Café</strong> — an inviting sanctuary designed for passionate coffee lovers, college study groups, and remote creators. From slow-steeped 18-hour cold brews to warm chocolate brownies, experience hospitality crafted with intention.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#7B4420] text-white hover:bg-[#603316] font-semibold text-base shadow-lg shadow-[#7B4420]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <span>Explore Digital Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewOffers}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-[#D7BEA8] text-[#432310] hover:bg-[#F5EBE1] font-semibold text-base shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#94582E]" />
                <span>View Special Offers</span>
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 border-t border-[#E8D8C8] grid grid-cols-3 gap-3 text-left">
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#EDE0CF]">
                <div className="flex items-center gap-1.5 text-[#7B4420] font-bold text-sm">
                  <Coffee className="w-4 h-4 text-[#94582E]" />
                  <span>100% Arabica</span>
                </div>
                <p className="text-xs text-[#603316] mt-0.5">Ethically sourced single origins</p>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#EDE0CF]">
                <div className="flex items-center gap-1.5 text-[#7B4420] font-bold text-sm">
                  <Clock className="w-4 h-4 text-[#94582E]" />
                  <span>8 AM - 11 PM</span>
                </div>
                <p className="text-xs text-[#603316] mt-0.5">Open all 7 days for study & work</p>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#EDE0CF]">
                <div className="flex items-center gap-1.5 text-[#7B4420] font-bold text-sm">
                  <Award className="w-4 h-4 text-[#94582E]" />
                  <span>Student 20% Off</span>
                </div>
                <p className="text-xs text-[#603316] mt-0.5">Campus discount with code</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image with border and shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                  alt="Brew Bliss signature latte art coffee cup on wooden café table"
                  className="w-full h-[430px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl backdrop-blur-md bg-black/35 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif font-bold text-base">Signature Espresso Roast</p>
                      <p className="text-xs text-white/80">Roasted fresh in small batches</p>
                    </div>
                    <span className="px-2.5 py-1 bg-[#D4A373] text-[#2C170A] font-bold text-xs rounded-full shadow">
                      From ₹130
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 4.9 Star Rating */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#E8D8C8] flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-[#F5EBE1] flex items-center justify-center text-[#94582E]">
                  <Heart className="w-5 h-5 fill-[#94582E] text-[#94582E]" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-bold text-sm text-[#2C170A]">
                    <span>4.9 / 5.0</span>
                    <span className="text-[#D4A373]">★★★★★</span>
                  </div>
                  <p className="text-[11px] text-[#603316]">500+ Demo Reviews</p>
                </div>
              </div>

              {/* Floating Badge 2: Special Combo Alert */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E8D8C8] max-w-[220px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7B4420] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Promo Spotlight</span>
                </div>
                <p className="text-xs font-semibold text-[#2C170A] mt-1">
                  BOGO Free Hot Coffee (4 PM – 7 PM)
                </p>
                <span className="inline-block mt-1 text-[10px] bg-[#94582E]/10 text-[#94582E] font-bold px-2 py-0.5 rounded">
                  Code: BOGOBLISS
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
