import React, { useState } from 'react';
import { SPECIAL_OFFERS } from '../data/offersData';
import { Sparkles, Copy, Check, Tag, ArrowRight, Clock, ShieldAlert } from 'lucide-react';

export default function OffersSection({ onApplyOfferCode }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleApply = (offer) => {
    onApplyOfferCode({
      code: offer.promoCode,
      desc: offer.title
    });
  };

  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] border-b border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Digital Marketing Campaigns</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Special Promotional Offers
          </h2>
          <p className="mt-3 text-base text-[#603316]">
            Exclusive discounts, happy hour pairings, and student privileges designed to elevate your café visit.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Demonstration Examples: Simulated promotions for academic marketing project analysis.</span>
          </div>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.promoCode;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-3xl border border-[#E8D8C8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Image on left or top */}
                <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden bg-[#F5EBE1] shrink-0">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-40" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-[#7B4420] text-[#FDFBF7] text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    {offer.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#94582E]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{offer.validUntil}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C170A] mt-1 group-hover:text-[#7B4420] transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#B88658] mt-0.5">
                      {offer.subtitle}
                    </p>

                    <p className="text-xs text-[#603316] mt-2.5 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  {/* Promo Code Box & Action */}
                  <div className="pt-2 border-t border-[#F5EBE1] space-y-3">
                    <div className="flex items-center justify-between bg-[#FAF6EE] p-2.5 rounded-xl border border-[#E8D8C8]">
                      <div>
                        <span className="text-[10px] text-[#94582E] uppercase font-bold tracking-wider">
                          Promo Code
                        </span>
                        <p className="font-mono font-bold text-sm text-[#2C170A] tracking-wider">
                          {offer.promoCode}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopy(offer.promoCode)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#D7BEA8] text-[#7B4420] hover:bg-[#F5EBE1] flex items-center gap-1 transition-all"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] text-[#94582E] italic truncate">
                        {offer.terms}
                      </p>
                      <button
                        onClick={() => handleApply(offer)}
                        className="shrink-0 px-3 py-1.5 bg-[#7B4420] text-white rounded-lg text-xs font-semibold hover:bg-[#603316] transition-colors flex items-center gap-1"
                      >
                        <span>Apply in Cart</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
