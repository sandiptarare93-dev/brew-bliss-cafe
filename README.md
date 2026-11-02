# ☕ Brew Bliss Café — Digital Marketing Website

> **Tagline:** *"Sip. Relax. Repeat."*  
> **Course / Project Type:** College Digital Marketing Showcase  
> **Stack:** React 18, Vite, Tailwind CSS, Lucide Icons, LocalStorage  

---

## 📋 Executive Overview

**Brew Bliss Café** is a modern, responsive, lightweight, and low-cost café digital marketing web application designed for a student Digital Marketing Project. It bridges offline artisan coffee culture with digital marketing channels, offering:
- An interactive digital menu with INR (₹) sample pricing, category filters, and search.
- An interactive shopping tray with live total calculations, demo coupon code support, and simulated checkout receipt generation.
- 7 strategic digital marketing campaigns across major social platforms (Instagram, Facebook, YouTube, WhatsApp, Telegram, LinkedIn, X).
- A Digital Marketing Analytics Dashboard showing simulated traffic trends, platform distribution, and conversion funnels.
- A client-side AI Café Assistant operating in zero-cost Demo Mode using local keyword matching.
- A customer feedback and review portal stored directly in the browser (`localStorage`).
- Newsletter signup with instant promo voucher code generation.

---

## 🎨 Visual Design System

- **Color Palette:**
  - Deep Espresso: `#2C170A`, `#432310`
  - Cappuccino Brown: `#7B4420`, `#94582E`
  - Latte Froth / Warm Biscuit: `#F5EBE1`, `#E8D8C8`
  - Cream Canvas: `#FDFBF7`, `#FAF6EE`
  - Golden Caramel Accent: `#D4A373`, `#E5A93C`
- **Typography:**
  - Headings: *Playfair Display* (Editorial luxury and warmth)
  - Body: *Plus Jakarta Sans* (Crisp, modern, high-readability UI font)
- **Imagery:** High-resolution, optimized coffee and bakery photography curated from Unsplash.

---

## 🚀 Key Features

### 1. Home & Hero Section
- Hero banner with brand identity and tagline: **"Sip. Relax. Repeat."**
- Dual CTA: "Explore Digital Menu" and "View Special Offers".
- Fast-facts highlight cards: 100% Arabica, 8 AM - 11 PM open hours, and 20% student discount.
- Floating promotional badge for Happy Hour BOGO.

### 2. About Concept & Story
- Introduces Brew Bliss as a campus sanctuary for studying, co-working, and casual meetups.
- 4 core pillars: Artisan Micro-Roasting, Vibrant Co-working, 100% Veg & Freshly Baked, and Student-First Pricing.
- Academic demonstration brand disclosure notices.

### 3. Digital Menu (18 Items in 5 Categories)
- **Categories:** Hot Coffee, Cold Brews & Frappes, Artisan Sandwiches, Bites & Snacks, Gourmet Desserts.
- **Search & Filter:** Real-time search query matching item names, ingredients, or tags.
- **Dietary Toggle:** 100% Vegetarian filter.
- **Sorting:** Featured / Bestsellers, Price (Low to High), Price (High to Low), and Top Rated.
- **Card Features:** Pricing in Indian Rupees (₹), calories, customer star ratings, review counts, and instant "Add to Cart" interaction.

### 4. Shopping Cart & Simulated Order Tray
- Slide-out drawer accessible from any point on the page via the sticky navbar badge.
- Quantity increment, decrement, and item removal.
- Real-time subtotal, 5% simulated GST, and discount deductions.
- **Promo Code Engine:**
  - `STUDENT20` — 20% flat discount on order
  - `BOGOBLISS` — Buy 1 Get 1 Free coffee saving (up to ₹180)
  - `WELCOME10` — 10% welcome newsletter voucher
  - `WEEKENDCOMBO` — ₹70 combo discount
  - `SWEETDUO` — ₹100 dessert pairing discount
- **Simulated Checkout Modal:** Select dine-in or takeaway, table booth, and generate a printable order receipt (`BLISS-XXXX`) without real payment gateways.

### 5. Special Promotional Offers
- 4 designated cards:
  1. *Buy 1 Get 1 Free Coffee (Happy Hours 4 PM - 7 PM)*
  2. *Student Special Discount (20% Off)*
  3. *Weekend Coffee Combos (₹249 Combo)*
  4. *Dessert & Coffee Duo (₹299 Pairing)*
- 1-click **Copy Promo Code** and **Apply to Cart** buttons.

### 6. AI Café Assistant — Demo Mode
- Floating chat badge with responsive popover modal.
- Operates 100% in the browser with **zero paid APIs or subscriptions**.
- Uses structured knowledge base parsing menu items, prices, opening hours, Wi-Fi info, and promo codes.
- Pre-configured quick question chips for rapid testing.
- Friendly fallback when unfamiliar questions are asked.

### 7. Omnichannel Social Media Integration
- Connects 7 channels: Instagram, Facebook, YouTube, WhatsApp, Telegram, LinkedIn, and X.
- **7 Detailed Student Digital Marketing Campaigns:**
  1. *Welcome to Brew Bliss Café* (Brand awareness / Reels)
  2. *New Coffee Arrivals: 18-Hour Cold Brew* (Product launch / Spotlight)
  3. *Top 5 Must-Try Café Foods* (Menu discovery / Carousel)
  4. *Coffee Making Behind the Scenes* (Barista craft / YouTube Shorts)
  5. *Benefits of Drinking Coffee* (Thought leadership / LinkedIn infographic)
  6. *Special Weekend Café Offers* (Direct VIP conversion / WhatsApp)
  7. *Customer Review of the Week* (UGC community building / X)
- Interactive platform filter to inspect campaign metrics and hashtags.

### 8. Digital Marketing Analytics Dashboard
- 4 Top KPI cards: Total Website Visits (48,250), Campaign Reach (92,470), Average Engagement (6.8%), and Demo Conversions (1,420).
- Interactive 7-Day Performance Trend chart toggleable by Visits, Reach, and Orders.
- Audience share breakdown by platform with colored progress bars.
- 5-Stage Customer Journey Conversion Funnel (Impressions → Engagements → Menu Visitors → Cart Adds → Completed Demo Checkouts).

### 9. Customer Feedback & Review Feed
- 5-star interactive rating with hover states.
- Category dropdown (Ambience, Coffee, Bites, Hospitality, Pricing).
- Local persistence via `localStorage`: user-submitted reviews immediately appear in the feed with a "User Submitted (Local)" badge!

### 10. Contact & Campus Hub
- Name, email, and message form with format validation.
- Simulated delivery feedback with clear transparency statements.
- Placeholder campus address, operating hours, and demonstration helpline.

### 11. Newsletter Signup Demo
- Email input validation.
- Instant unlocking of a `WELCOME10` voucher coupon card with 1-click copy and cart application.

### 12. Footer & Legal
- Quick links, social touchpoints, and copyright attribution.
- Interactive modals for Privacy Policy and Terms of Demonstration.

---

## 🛠️ Project Structure

```
Brew Bliss Café/
├── index.html                 # Semantic HTML5, SEO meta tags, Google Fonts, JSON-LD schema
├── package.json               # Project manifest and scripts
├── vite.config.js             # Vite development & build setup
├── tailwind.config.js         # Café color palette, fonts, and box shadows
├── postcss.config.js          # PostCSS configuration
├── src/
│   ├── main.jsx               # React DOM entrypoint
│   ├── App.jsx                # Application root & master state management
│   ├── index.css              # Tailwind base, utilities, and scrollbar animations
│   ├── data/
│   │   ├── menuData.js        # 18 curated menu items with photos & INR prices
│   │   ├── offersData.js      # 4 core promotional campaigns with promo codes
│   │   ├── campaignsData.js   # 7 digital marketing campaigns & platform links
│   │   ├── demoMetrics.js     # Analytics dashboard KPIs, charts & funnel data
│   │   └── assistantKnowledge.js # Local rule-based AI assistant engine
│   └── components/
│       ├── Navbar.jsx         # Sticky header with cart counter & mobile drawer
│       ├── Hero.jsx           # Hero banner with coffee visual & CTAs
│       ├── AboutSection.jsx   # Concept story, pillars, and quality badges
│       ├── MenuSection.jsx    # Menu grid with category tabs, search & filters
│       ├── CartDrawer.jsx     # Slide-over cart tray & simulated order receipt
│       ├── OffersSection.jsx  # Promotional cards with 1-click code apply
│       ├── MarketingDashboard.jsx # Analytics KPIs, charts & funnel stages
│       ├── SocialMediaSection.jsx # 7 campaigns showcase & platform buttons
│       ├── CustomerFeedbackSection.jsx # Feedback form & dynamic review feed
│       ├── ContactSection.jsx # Contact form with validation & address card
│       ├── NewsletterSection.jsx # Email signup & discount voucher popup
│       ├── Footer.jsx         # Footer with quick links & legal modals
│       ├── AiAssistantModal.jsx # Floating AI café assistant chatbot
│       └── Toast.jsx          # Non-intrusive action notifications
└── README.md                  # Complete documentation and setup guide
```

---

## 💻 Local Installation & Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Setup Steps
1. Open your terminal in the project directory:
   ```bash
   cd "c:\Brew Bliss Café"
   ```

2. Install dependencies (already installed if using this workspace):
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   The site will be accessible at: `http://localhost:3000`

4. Build for production:
   ```bash
   npm run build
   ```
   Production assets will be generated in the `dist/` directory.

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Free Deployment Instructions

This website has zero server dependencies and can be deployed for free on multiple platforms:

### Option A: Vercel (Recommended)
1. Push your project to a GitHub repository.
2. Visit [vercel.com](https://vercel.com) and log in.
3. Click **Add New Project** and import your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain with free SSL.

### Option B: Netlify
1. Run `npm run build` locally.
2. Drag and drop the `dist/` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
3. Or connect your GitHub repo with build command `npm run build` and publish directory `dist`.

### Option C: GitHub Pages
1. In `vite.config.js`, set `base: './'`.
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## ⚖️ Features Status: Functional vs. Future Integrations

| Feature Area | Working in Demo Prototype | Required for Real Production |
|---|---|---|
| **Digital Menu** | ✅ Search, filter by category, veg-only filter, price sort, dynamic add-to-cart | Connect to a CMS (e.g. Strapi, Sanity, or Supabase) for live inventory updates |
| **Shopping Cart** | ✅ Subtotal calculation, GST, item quantity increment/decrement, promo code engine | Payment Gateway integration (Razorpay, Stripe, or Paytm) |
| **Checkout Flow** | ✅ Simulated order placement, table/booth selection, receipt generation with order ID | Kitchen Display System (KDS) API or POS printer webhook |
| **Special Offers** | ✅ 1-click copy, automatic cart discount application, clear terms & expiration | Automated backend coupon validation database |
| **AI Café Assistant** | ✅ Rule-based local keyword engine answering questions about menu, prices, hours, and offers | Optional: OpenAI/Gemini API integration if open-ended chatting is desired |
| **Social Campaigns** | ✅ 7 detailed strategy cards, platform filters, estimated reach & engagement displays | Meta Graph API / YouTube Data API for live telemetry |
| **Marketing Dashboard** | ✅ Interactive SVG charts, weekly traffic view toggles, platform share, conversion funnel | Google Analytics 4 (GA4) or Mixpanel integration |
| **Customer Feedback** | ✅ 5-star rating, category selection, client validation, local storage persistence | Database (PostgreSQL, MongoDB) with moderation admin panel |
| **Contact Form** | ✅ Full field validation, email regex check, simulated success feedback | Email delivery service (SendGrid, Resend, or Formspree) |
| **Newsletter Signup** | ✅ Email validation, duplicate check, instant voucher discount reward | Email marketing platform (Mailchimp, ConvertKit, or Brevo) |

---

## 🎓 Academic Presentation Tips

When presenting this project for your Digital Marketing evaluation, highlight:
1. **Low-Cost Architecture:** Built entirely with free and open-source software without recurring cloud hosting fees.
2. **Speed & Lightweight Footprint:** Production bundle is under 330 kB total (less than 90 kB gzipped), ensuring instant load times on mobile 4G/5G campus networks.
3. **Omnichannel Strategy:** Demonstrates content marketing tailored for diverse audience segments (e.g., student focus on TikTok/Instagram, professional remote workers on LinkedIn).
4. **Data-Driven Transparency:** All demo data, placeholders, and simulated transactions are explicitly labeled, upholding academic integrity and ethical digital marketing standards.
