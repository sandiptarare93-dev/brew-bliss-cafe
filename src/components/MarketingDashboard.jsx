import React, { useState } from 'react';
import { 
  OVERALL_METRICS, WEEKLY_TRAFFIC, PLATFORM_SHARE, FUNNEL_STAGES 
} from '../data/demoMetrics';
import { 
  BarChart3, TrendingUp, Users, Eye, Target, 
  DollarSign, Sparkles, AlertTriangle, Layers, Calendar 
} from 'lucide-react';

export default function MarketingDashboard() {
  const [selectedMetricView, setSelectedMetricView] = useState('visits'); // 'visits' or 'reach' or 'orders'

  const maxVal = Math.max(...WEEKLY_TRAFFIC.map(d => d[selectedMetricView]));

  return (
    <section id="dashboard" className="py-20 bg-[#FDFBF7] border-b border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] border border-[#D7BEA8] text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Academic Performance Analytics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Digital Marketing Dashboard
          </h2>
          <p className="mt-3 text-base text-[#603316]">
            Simulated key performance indicators (KPIs), audience acquisition channels, and conversion funnel analytics.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>DEMO ANALYTICS DATA — Modeled for College Digital Marketing Coursework</span>
          </div>
        </div>

        {/* 4 Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          <div className="bg-white p-5 rounded-2xl border border-[#E8D8C8] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94582E]">Total Visits</span>
              <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#7B4420]">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-3xl font-bold text-[#2C170A] mt-2">
              {OVERALL_METRICS.totalVisits}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-700 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.4% vs last period</span>
            </div>
            <p className="text-[11px] text-[#94582E] mt-1">Unique demo visitors: {OVERALL_METRICS.uniqueVisitors}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8D8C8] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94582E]">Campaign Reach</span>
              <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#7B4420]">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-3xl font-bold text-[#2C170A] mt-2">
              {OVERALL_METRICS.campaignReach}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-700 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+24.1% cross-platform</span>
            </div>
            <p className="text-[11px] text-[#94582E] mt-1">Across 7 social channels</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8D8C8] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94582E]">Avg Engagement</span>
              <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#7B4420]">
                <Target className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-3xl font-bold text-[#2C170A] mt-2">
              {OVERALL_METRICS.avgEngagementRate}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-700 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Industry benchmark ~2.8%</span>
            </div>
            <p className="text-[11px] text-[#94582E] mt-1">High student community resonance</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8D8C8] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94582E]">Demo Conversions</span>
              <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#7B4420]">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-3xl font-bold text-[#2C170A] mt-2">
              {OVERALL_METRICS.demoConversions}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-700 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>CR: {OVERALL_METRICS.conversionRate}</span>
            </div>
            <p className="text-[11px] text-[#94582E] mt-1">Simulated Value: {OVERALL_METRICS.simulatedRevenue}</p>
          </div>

        </div>

        {/* Charts Grid: Weekly Trend & Platform Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Weekly Traffic Interactive Bar Chart */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2C170A]">
                  Weekly Performance Trend
                </h3>
                <p className="text-xs text-[#603316]">
                  7-Day simulated telemetry showing peak campus footfall on weekends.
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-[#FAF6EE] p-1 rounded-xl border border-[#D7BEA8] text-xs">
                <button
                  onClick={() => setSelectedMetricView('visits')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                    selectedMetricView === 'visits'
                      ? 'bg-[#7B4420] text-white shadow-xs'
                      : 'text-[#603316] hover:bg-[#E8D8C8]'
                  }`}
                >
                  Visits
                </button>
                <button
                  onClick={() => setSelectedMetricView('reach')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                    selectedMetricView === 'reach'
                      ? 'bg-[#7B4420] text-white shadow-xs'
                      : 'text-[#603316] hover:bg-[#E8D8C8]'
                  }`}
                >
                  Reach
                </button>
                <button
                  onClick={() => setSelectedMetricView('orders')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                    selectedMetricView === 'orders'
                      ? 'bg-[#7B4420] text-white shadow-xs'
                      : 'text-[#603316] hover:bg-[#E8D8C8]'
                  }`}
                >
                  Orders
                </button>
              </div>
            </div>

            {/* Custom Responsive SVG / Bar Chart */}
            <div className="pt-6 pb-2">
              <div className="h-48 flex items-end gap-3 sm:gap-6 justify-between px-2 border-b border-[#E8D8C8]">
                {WEEKLY_TRAFFIC.map((item) => {
                  const val = item[selectedMetricView];
                  const heightPercent = Math.round((val / maxVal) * 100);

                  return (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <span className="text-[10px] font-bold text-[#7B4420] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {val.toLocaleString()}
                      </span>
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-full max-w-[42px] bg-gradient-to-t from-[#7B4420] to-[#B88658] rounded-t-lg transition-all duration-500 group-hover:from-[#94582E] group-hover:to-[#D4A373] shadow-sm relative"
                      >
                        {item.day === 'Sat' && (
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2C170A] text-[#D4A373] text-[9px] font-bold px-1.5 py-0.2 rounded shadow">
                            Peak
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-[#603316]">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-right text-[11px] text-[#94582E]">
              Simulated 7-Day Metric: <strong>{selectedMetricView.toUpperCase()}</strong>
            </div>
          </div>

          {/* Platform Share Breakdown */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C170A]">
                Audience Share by Social Platform
              </h3>
              <p className="text-xs text-[#603316]">
                Instagram and YouTube Reels represent over 64% of student brand reach.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {PLATFORM_SHARE.map((item) => (
                <div key={item.platform} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-[#2C170A]">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.platform}</span>
                    </div>
                    <div className="space-x-2">
                      <span className="text-[#94582E] font-normal">{item.reach} reach</span>
                      <span className="font-bold">{item.percentage}%</span>
                    </div>
                  </div>

                  <div className="w-full h-2.5 bg-[#FAF6EE] rounded-full overflow-hidden border border-[#E8D8C8]">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#FAF6EE] rounded-xl border border-[#EDE0CF] text-[11px] text-[#603316]">
              <span className="font-bold text-[#7B4420]">Key Takeaway:</span> Visual-first platforms generate the highest click-through rate to our digital menu.
            </div>
          </div>

        </div>

        {/* Funnel Stage Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#94582E]" />
              <h3 className="font-serif text-xl font-bold text-[#2C170A]">
                Marketing & Digital Menu Conversion Funnel
              </h3>
            </div>
            <p className="text-xs text-[#603316] mt-1">
              End-to-end journey from impression on social media through digital menu exploration to demo order checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FUNNEL_STAGES.map((stage, idx) => (
              <div
                key={stage.stage}
                className="bg-[#FAF6EE] p-4 rounded-2xl border border-[#EDE0CF] flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#7B4420] mb-1">
                    <span>Stage 0{idx + 1}</span>
                    <span className="text-[#94582E] font-normal">{stage.rate}</span>
                  </div>
                  <h4 className="font-bold text-xs text-[#2C170A] line-clamp-2">
                    {stage.stage}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8D8C8]">
                  <p className="font-serif text-xl font-bold text-[#7B4420]">
                    {stage.count}
                  </p>
                  <span className="text-[10px] text-[#94582E] font-medium block mt-0.5">
                    {stage.dropoff}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
