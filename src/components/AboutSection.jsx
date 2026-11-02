import React from 'react';
import { Coffee, Wifi, Sparkles, HeartHandshake, Leaf, Users, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Coffee,
      title: 'Artisan Micro-Roasting',
      description: 'Single-origin beans roasted in precise small batches to coax out delicate floral, nutty, and chocolate notes.'
    },
    {
      icon: Wifi,
      title: 'Vibrant Study & Work Haven',
      description: 'Fast fiber Wi-Fi, ample power outlets at every booth, ergonomic seating, and warm acoustic jazz for focus.'
    },
    {
      icon: Leaf,
      title: 'Freshly Baked & Vegetarian',
      description: 'Wholesome snacks, crusty artisan sourdough paninis, and European desserts baked fresh every morning.'
    },
    {
      icon: HeartHandshake,
      title: 'Student-First Community',
      description: 'Affordable student combos, campus loyalty incentives, and group discussion spaces tailored for college life.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF6EE] border-y border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Our Story & Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Crafting Moments of Calm, One Cup at a Time
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#603316] leading-relaxed">
            Brew Bliss Café was conceived as a model digital marketing case study for modern hospitality. We blend old-world espresso tradition with forward-thinking digital convenience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80"
                  alt="Cozy café interior seating"
                  className="rounded-2xl shadow-md object-cover h-64 w-full hover:brightness-105 transition-all"
                />
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
                  alt="Barista pouring coffee"
                  className="rounded-2xl shadow-md object-cover h-48 w-full hover:brightness-105 transition-all"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh flaky bakery croissant"
                  className="rounded-2xl shadow-md object-cover h-48 w-full hover:brightness-105 transition-all"
                />
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80"
                  alt="Friends studying in coffee shop"
                  className="rounded-2xl shadow-md object-cover h-64 w-full hover:brightness-105 transition-all"
                />
              </div>
            </div>

            {/* Academic Simulation Notice Pill */}
            <div className="absolute -bottom-5 left-6 right-6 bg-[#2C170A] text-[#FDFBF7] p-3.5 rounded-xl shadow-xl text-center text-xs font-medium border border-[#D4A373]/30">
              <span className="font-bold text-[#D4A373]">Demo Brand Notice:</span> Created exclusively as an interactive demonstration for college digital marketing evaluation.
            </div>
          </div>

          {/* Text Story & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C170A]">
                More Than Coffee — A Campus Sanctuary
              </h3>
              <p className="text-[#603316] leading-relaxed text-sm sm:text-base">
                In the bustle of student deadlines, exams, and fast-paced college life, <strong>Brew Bliss Café</strong> stands as a pause button. Whether you need a solitary espresso to tackle a coding assignment or a shared dessert platter for celebratory laughter, our spaces are intentionally curated to revive you.
              </p>
              <p className="text-[#603316] leading-relaxed text-sm sm:text-base">
                Our digital menu, social media campaigns, and analytics dashboard represent how contemporary food-and-beverage brands bridge offline hospitality with digital engagement.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-white p-4 rounded-xl border border-[#E8D8C8] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-[#F5EBE1] flex items-center justify-center text-[#7B4420] mb-2.5">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#2C170A] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#603316] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Promise checklist */}
            <div className="bg-[#F5EBE1] p-4 rounded-xl border border-[#D7BEA8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#432310] font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#94582E]" />
                <span>Fair Trade Certified Beans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#94582E]" />
                <span>Zero Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#94582E]" />
                <span>Complimentary High-Speed Wi-Fi</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
