import React, { useState } from 'react';
import { 
  Coffee, Heart, Instagram, Facebook, Youtube, 
  Send, Twitter, Linkedin, MessageCircle, X, Shield, FileText 
} from 'lucide-react';

export default function Footer() {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  return (
    <footer className="bg-[#1A0C06] text-[#E8D8C8] pt-16 pb-12 border-t border-[#432310]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#432310]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7B4420] flex items-center justify-center text-[#D4A373] shadow">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Brew Bliss <span className="text-[#D4A373]">Café</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B88658] font-bold">
                  Sip. Relax. Repeat.
                </span>
              </div>
            </div>

            <p className="text-xs text-[#B88658] leading-relaxed max-w-sm">
              An artisan coffee haven and co-working study lounge designed for college students and digital creatives. Model website created for a college Digital Marketing course evaluation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-[#E1306C] text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-[#1877F2] text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-[#FF0000] text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-[#25D366] text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-[#229ED9] text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-[#0A66C2] text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-[#2C170A] hover:bg-black text-[#E8D8C8] hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#B88658]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home Experience</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Concept</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Digital Menu (18 Items)</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">Special Offers & Combos</a></li>
            </ul>
          </div>

          {/* Marketing & Showcase */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Academic Showcase
            </h4>
            <ul className="space-y-2 text-xs text-[#B88658]">
              <li><a href="#dashboard" className="hover:text-white transition-colors">Marketing Analytics Dashboard</a></li>
              <li><a href="#campaigns" className="hover:text-white transition-colors">7 Social Media Campaigns</a></li>
              <li><a href="#feedback" className="hover:text-white transition-colors">Community Reviews (Demo)</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Campus Pin</a></li>
            </ul>
          </div>

          {/* Contact Details (Demo Placeholders) */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Demo Campus Lounge
            </h4>
            <p className="text-xs text-[#B88658] leading-relaxed">
              Plot 42, Campus Promenade, Demo Knowledge Park<br />
              New Delhi / Bengaluru, India<br />
              Hours: 8:00 AM – 11:00 PM<br />
              Phone: +91 98765 43210 (Demo)
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Placeholders */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B88658]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Brew Bliss Café. College Digital Marketing Project.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy (Demo)
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service (Demo)
            </button>
          </div>
        </div>

      </div>

      {/* Privacy / Terms Placeholder Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] text-[#2C170A] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8D8C8] shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-[#603316] hover:bg-[#F5EBE1] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#7B4420] mb-3">
              {modalType === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              <h3 className="font-serif font-bold text-xl">
                {modalType === 'privacy' ? 'Privacy Policy Notice' : 'Terms of Demonstration'}
              </h3>
            </div>

            <div className="text-xs text-[#603316] space-y-3 leading-relaxed">
              <p>
                <strong>Academic Purpose:</strong> Brew Bliss Café is a fictional student model developed solely to fulfill the requirements of an undergraduate/graduate Digital Marketing Project.
              </p>
              <p>
                <strong>Data Handling:</strong> All cart items, demo coupon codes, newsletter subscriptions, and feedback messages are stored purely within your local browser storage (`localStorage`) or handled in client memory. No personal data, email, credit card number, or payment token is ever transmitted to a server or external party.
              </p>
              <p>
                <strong>Imagery & Attribution:</strong> All cafe photography is curated from royalty-free Unsplash collections with proper web attribution.
              </p>
              <p>
                <strong>Simulated Transactions:</strong> No actual currency or merchandise is exchanged through this website.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2.5 bg-[#7B4420] text-white rounded-xl text-xs font-semibold hover:bg-[#603316]"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
