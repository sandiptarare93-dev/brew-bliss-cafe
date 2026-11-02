import React, { useState } from 'react';
import { 
  SOCIAL_PLATFORMS, MARKETING_CAMPAIGNS 
} from '../data/campaignsData';
import { 
  Share2, ExternalLink, Instagram, Facebook, Youtube, 
  Send, Twitter, Linkedin, MessageCircle, Sparkles, Filter, 
  BarChart, Users, Eye, TrendingUp, ShieldAlert 
} from 'lucide-react';

const iconMap = {
  Instagram: Instagram,
  Facebook: Facebook,
  Youtube: Youtube,
  MessageCircle: MessageCircle,
  Send: Send,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export default function SocialMediaSection() {
  const [platformFilter, setPlatformFilter] = useState('All');

  const platformsList = ['All', 'Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'WhatsApp', 'X (Twitter)'];

  const filteredCampaigns = MARKETING_CAMPAIGNS.filter((c) => {
    if (platformFilter === 'All') return true;
    return c.platform.toLowerCase().includes(platformFilter.toLowerCase().replace(' (twitter)', ''));
  });

  return (
    <section id="campaigns" className="py-20 bg-[#FAF6EE] border-b border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Digital Channels & Social Outreach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Omnichannel Marketing Campaigns
          </h2>
          <p className="mt-3 text-base text-[#603316]">
            Demonstrating multi-platform content marketing strategies, engagement optimization, and community acquisition blueprints.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Academic Demonstration: All handles, campaigns, and metrics are simulated for college course presentation.</span>
          </div>
        </div>

        {/* Official Channels Grid */}
        <div className="mb-16">
          <h3 className="font-serif text-xl font-bold text-[#2C170A] mb-4 text-center sm:text-left">
            Connected Digital Touchpoints (Demo Hub)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {SOCIAL_PLATFORMS.map((platform) => {
              const IconComp = iconMap[platform.icon] || Share2;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3.5 rounded-2xl border border-[#E8D8C8] hover:border-[#94582E] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: platform.color }}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B88658] group-hover:text-[#7B4420] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#2C170A]">
                      {platform.name}
                    </h4>
                    <p className="text-[10px] text-[#94582E] truncate font-medium">
                      {platform.handle}
                    </p>
                    <span className="text-[10px] text-[#603316]/70 mt-1 block">
                      {platform.followers} demo reach
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 7 Required Student Marketing Campaigns */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#2C170A]">
                Featured Course Campaigns (7 Strategic Pillars)
              </h3>
              <p className="text-xs text-[#603316] mt-0.5">
                Detailed breakdowns of content formats, objectives, and simulated performance metrics.
              </p>
            </div>

            {/* Platform Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {platformsList.map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatformFilter(p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                    platformFilter === p
                      ? 'bg-[#7B4420] text-white shadow-xs'
                      : 'bg-white text-[#603316] border border-[#D7BEA8] hover:bg-[#F5EBE1]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCampaigns.map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-3xl border border-[#E8D8C8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Creative Mockup */}
                  <div className="relative h-48 overflow-hidden bg-[#F5EBE1]">
                    <img
                      src={camp.image}
                      alt={camp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Platform Tag */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                      <span>{camp.platform}</span>
                      <span className="text-[#D4A373]">•</span>
                      <span className="text-[10px] font-normal">{camp.format}</span>
                    </div>

                    {/* Status Badge */}
                    <div className={`absolute top-3 right-3 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${camp.statusBadge}`}>
                      {camp.status}
                    </div>

                    {/* Objective pill */}
                    <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                      Goal: {camp.objective}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h4 className="font-serif text-lg font-bold text-[#2C170A] group-hover:text-[#7B4420] transition-colors">
                      {camp.title}
                    </h4>

                    <p className="text-xs text-[#603316] leading-relaxed">
                      {camp.description}
                    </p>

                    <div className="bg-[#FAF6EE] p-2.5 rounded-xl border border-[#EDE0CF] text-[11px] space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#94582E] font-medium">Target Demographic:</span>
                        <span className="text-[#2C170A] font-semibold text-right">{camp.targetAudience}</span>
                      </div>
                      <div className="text-[10px] text-[#7B4420] font-mono truncate">
                        {camp.keyHashtags}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics Bar (Simulated) */}
                <div className="px-5 py-3.5 bg-[#FAF6EE] border-t border-[#E8D8C8] grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="text-[10px] text-[#94582E] uppercase font-bold block">Est. Reach</span>
                    <span className="font-bold text-xs text-[#2C170A]">{camp.reach}</span>
                  </div>
                  <div className="border-x border-[#E8D8C8]">
                    <span className="text-[10px] text-[#94582E] uppercase font-bold block">Engage Rate</span>
                    <span className="font-bold text-xs text-emerald-700">{camp.engagementRate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94582E] uppercase font-bold block">Clicks</span>
                    <span className="font-bold text-xs text-[#2C170A]">{camp.clicks}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
