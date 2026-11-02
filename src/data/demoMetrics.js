export const OVERALL_METRICS = {
  totalVisits: '48,250',
  uniqueVisitors: '32,100',
  campaignReach: '92,470',
  avgEngagementRate: '6.8%',
  demoConversions: '1,420',
  conversionRate: '2.94%',
  customerAcquisitionCost: '₹34.50',
  simulatedRevenue: '₹3,42,800'
};

export const WEEKLY_TRAFFIC = [
  { day: 'Mon', visits: 3800, reach: 9500, orders: 110 },
  { day: 'Tue', visits: 4200, reach: 11200, orders: 140 },
  { day: 'Wed', visits: 5100, reach: 12800, orders: 175 },
  { day: 'Thu', visits: 5900, reach: 14100, orders: 210 },
  { day: 'Fri', visits: 8400, reach: 18900, orders: 290 },
  { day: 'Sat', visits: 11200, reach: 24500, orders: 410 },
  { day: 'Sun', visits: 9650, reach: 21470, orders: 360 }
];

export const PLATFORM_SHARE = [
  { platform: 'Instagram', percentage: 38, reach: '35,100', color: '#E1306C', hexBg: 'bg-[#E1306C]' },
  { platform: 'YouTube', percentage: 26, reach: '24,100', color: '#FF0000', hexBg: 'bg-[#FF0000]' },
  { platform: 'Facebook', percentage: 16, reach: '14,600', color: '#1877F2', hexBg: 'bg-[#1877F2]' },
  { platform: 'X (Twitter)', percentage: 10, reach: '9,450', color: '#0F1419', hexBg: 'bg-[#0F1419]' },
  { platform: 'LinkedIn', percentage: 6, reach: '5,020', color: '#0A66C2', hexBg: 'bg-[#0A66C2]' },
  { platform: 'WhatsApp / Telegram', percentage: 4, reach: '4,200', color: '#25D366', hexBg: 'bg-[#25D366]' },
];

export const FUNNEL_STAGES = [
  { stage: 'Total Ad Impressions', count: '1,37,100', rate: '100%', dropoff: 'Top of Funnel' },
  { stage: 'Campaign Engagements (Likes, Comments, Shares)', count: '29,480', rate: '21.5%', dropoff: 'Active interest' },
  { stage: 'Website Menu Visitors', count: '14,820', rate: '10.8%', dropoff: 'Traffic to digital menu' },
  { stage: 'Items Added to Cart (Demo)', count: '3,640', rate: '2.65%', dropoff: 'High purchase intent' },
  { stage: 'Completed Demo Checkouts', count: '1,420', rate: '1.04%', dropoff: 'Final conversion' }
];
