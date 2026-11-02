import React, { useState } from 'react';
import { Mail, Sparkles, Check, Copy, ArrowRight, ShieldCheck } from 'lucide-react';

export default function NewsletterSection({ onApplyOfferCode }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(() => {
    return localStorage.getItem('brew_bliss_subscribed') === 'true';
  });
  const [error, setError] = useState('');
  const [copiedVoucher, setCopiedVoucher] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    localStorage.setItem('brew_bliss_subscribed', 'true');
    localStorage.setItem('brew_bliss_sub_email', email);
    setIsSubscribed(true);
  };

  const handleCopyVoucher = () => {
    navigator.clipboard.writeText('WELCOME10');
    setCopiedVoucher(true);
    setTimeout(() => setCopiedVoucher(false), 2000);
  };

  const handleApplyVoucher = () => {
    onApplyOfferCode({
      code: 'WELCOME10',
      desc: '10% Welcome Newsletter Privilege'
    });
  };

  return (
    <section className="py-16 bg-[#2C170A] text-[#FDFBF7] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#94582E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B4420]/60 text-[#D4A373] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D4A373]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Coffee Club & Insider Privileges</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
          Join the Brew Bliss Newsletter
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#D7BEA8] max-w-xl mx-auto leading-relaxed">
          Be the first to hear about seasonal bean releases, weekend acoustic music lineups, and receive exclusive student discount codes.
        </p>

        {isSubscribed ? (
          <div className="mt-8 max-w-md mx-auto p-6 bg-[#432310] rounded-2xl border border-[#D4A373]/40 shadow-xl space-y-3 animate-in fade-in">
            <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">
              You’re On the VIP Guest List!
            </h3>
            <p className="text-xs text-[#E8D8C8]">
              Your welcome voucher code is ready to use on your next demo order:
            </p>
            <div className="flex items-center justify-between bg-[#2C170A] p-2.5 rounded-xl border border-[#D4A373]/40">
              <span className="font-mono font-bold text-base text-[#D4A373] tracking-wider pl-2">
                WELCOME10
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyVoucher}
                  className="px-3 py-1.5 bg-[#7B4420] text-xs font-bold rounded-lg hover:bg-[#94582E] transition-colors flex items-center gap-1"
                >
                  {copiedVoucher ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedVoucher ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleApplyVoucher}
                  className="px-3 py-1.5 bg-[#D4A373] text-[#2C170A] text-xs font-bold rounded-lg hover:bg-white transition-colors"
                >
                  Apply in Cart
                </button>
              </div>
            </div>
            <p className="text-[11px] text-[#B88658] pt-1">
              *Demonstration voucher for college marketing simulation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B88658]" />
                <input
                  type="email"
                  placeholder="Enter your email for 10% demo voucher"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#432310] border border-[#603316] text-white text-xs sm:text-sm placeholder-[#B88658] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#D4A373] text-[#2C170A] font-bold text-xs sm:text-sm rounded-xl hover:bg-[#E5A93C] transition-all flex items-center justify-center gap-2 shadow-md shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {error && (
              <p className="text-xs text-rose-400 font-medium text-left pl-1">{error}</p>
            )}

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#B88658] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D4A373]" />
              <span>Demonstration signup • No spam • Local browser test only</span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
