import { MENU_ITEMS } from './menuData';
import { SPECIAL_OFFERS } from './offersData';

export const QUICK_PROMPTS = [
  'What are your bestselling coffees?',
  'Tell me about the student discount',
  'What are your vegetarian snack options?',
  'How much is the signature cappuccino?',
  'What are your café hours and location?',
  'What offers or promo codes are active?'
];

export function getAssistantResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  if (!query) {
    return "Hello there! I'm the Brew Bliss Demo Concierge. Feel free to ask me about our coffee menu, prices, student offers, or café hours!";
  }

  // Greetings
  if (query.match(/^(hi|hello|hey|hola|good morning|good afternoon|good evening|namaste)/)) {
    return "Warm greetings! Welcome to Brew Bliss Café (Demo Mode). I can help you look up menu items, sample prices in ₹, student offers, and dietary choices. What can I brew up for you today?";
  }

  // Identity / AI Disclaimer
  if (query.includes('who are you') || query.includes('what are you') || query.includes('ai') || query.includes('real ai')) {
    return "I am the Brew Bliss Café Local Assistant — running entirely in your browser using local keyword matching for this College Digital Marketing Project. No paid API or external servers are involved!";
  }

  // Student Discount & Offers
  if (query.includes('student') || query.includes('discount') || query.includes('id card')) {
    return "🎓 We love students! Our Student Special gives you a flat 20% discount on food & beverages above ₹250. Use promo code 'STUDENT20' at checkout or flash a student ID (demo). Valid Monday to Friday!";
  }

  // BOGO / Buy 1 Get 1
  if (query.includes('bogo') || query.includes('buy 1 get 1') || query.includes('buy one get one') || query.includes('free coffee')) {
    return "☕ Double the happiness! Our Buy 1 Get 1 Free Happy Hour runs daily from 4 PM - 7 PM on all hot coffees. Use demo code 'BOGOBLISS' when checking out!";
  }

  // Offers general
  if (query.includes('offer') || query.includes('deal') || query.includes('promo') || query.includes('coupon') || query.includes('combo')) {
    const offerTitles = SPECIAL_OFFERS.map(o => `• ${o.title} (${o.promoCode})`).join('\n');
    return `Here are our current demonstration offers:\n${offerTitles}\n\nYou can apply any of these codes directly in your cart!`;
  }

  // Bestsellers
  if (query.includes('bestseller') || query.includes('recommend') || query.includes('popular') || query.includes('must try') || query.includes('special')) {
    const bestsellers = MENU_ITEMS.filter(item => item.isBestseller)
      .slice(0, 4)
      .map(item => `• ${item.name} (₹${item.price}) — ${item.category}`)
      .join('\n');
    return `Here are our top customer favorites:\n${bestsellers}\n\nOur crowd champion is definitely the Bliss Signature Cappuccino paired with the Warm Belgian Truffle Brownie!`;
  }

  // Cold coffee / iced / cold brew
  if (query.includes('cold brew') || query.includes('cold') || query.includes('iced') || query.includes('frappe')) {
    const coldItems = MENU_ITEMS.filter(i => i.category === 'cold')
      .map(i => `• ${i.name} (₹${i.price})`)
      .join('\n');
    return `Craving something chilled? Here are our cold specialties:\n${coldItems}\n\nOur 18-Hour Slow Cold Brew (₹190) is steeped for 18 hours with zero bitterness!`;
  }

  // Cappuccino price check
  if (query.includes('cappuccino')) {
    return "Our Bliss Signature Cappuccino is ₹180. It features a rich double shot of 100% Arabica espresso with velvety micro-foam and a dusting of organic cocoa.";
  }

  // Hazelnut Latte price check
  if (query.includes('hazelnut')) {
    return "Our Roasted Hazelnut Latte is ₹200. It combines fresh espresso with slow-roasted hazelnut syrup and steamed creamy milk.";
  }

  // Spanish Latte
  if (query.includes('spanish latte')) {
    return "Our Iced Spanish Latte is ₹210. Chilled espresso poured over sweetened condensed milk and cold fresh milk over crystal ice cubes.";
  }

  // Food / Snacks / Sandwiches
  if (query.includes('food') || query.includes('snack') || query.includes('sandwich') || query.includes('eat') || query.includes('panini') || query.includes('focaccia')) {
    return "For bites, we offer delicious artisan sandwiches and snacks! Popular items include:\n• Pesto Bocconcini Panini (₹230)\n• Tandoori Paneer Tikka Focaccia (₹220)\n• Truffle & Herb Crispy Wedges (₹160)\n• Cheesy Fiesta Nachos Supreme (₹210)\nAll prepared fresh upon order!";
  }

  // Desserts / Sweets / Brownie / Cheesecake
  if (query.includes('dessert') || query.includes('brownie') || query.includes('cake') || query.includes('croissant') || query.includes('sweet')) {
    return "Got a sweet tooth? Try our gourmet desserts:\n• Warm Belgian Truffle Brownie with Gelato (₹195)\n• New York Blueberry Cheesecake (₹230)\n• Parisian Butter Croissant (₹140)\nPair any dessert with hot coffee for an exquisite match!";
  }

  // Vegetarian / Vegan
  if (query.includes('veg') || query.includes('vegetarian') || query.includes('vegan') || query.includes('plant')) {
    return "🌱 Good news! 100% of our featured food and beverage items shown on our menu are vegetarian-friendly (marked with a green Veg indicator). We also offer oat milk and almond milk upon request (demo options)!";
  }

  // Location / Address / Hours
  if (query.includes('location') || query.includes('where') || query.includes('address') || query.includes('hours') || query.includes('time') || query.includes('open')) {
    return "📍 Demonstration Location:\nPlot 42, Campus Promenade, Demo Knowledge Park\n\n⏰ Demonstration Hours:\nMonday to Sunday: 8:00 AM – 11:00 PM\n(Note: As this is an academic marketing showcase, physical café visits are simulated!)";
  }

  // Wi-Fi / Co-working
  if (query.includes('wifi') || query.includes('study') || query.includes('work') || query.includes('laptop') || query.includes('co-working')) {
    return "Yes! Brew Bliss features dedicated quiet study & work zones with high-speed fiber Wi-Fi, convenient universal power outlets at every booth, and a calming ambient jazz playlist.";
  }

  // Menu Search Fallback: search individual item names
  const matchedItem = MENU_ITEMS.find(item => 
    query.includes(item.name.toLowerCase()) || 
    item.tags.some(t => query.includes(t.toLowerCase()))
  );
  if (matchedItem) {
    return `Found it! ${matchedItem.name} (${matchedItem.category.toUpperCase()}) is available for ₹${matchedItem.price}. ${matchedItem.description} It has a ${matchedItem.rating}★ rating from ${matchedItem.reviewsCount} demo guests.`;
  }

  // Friendly Fallback
  return `Thanks for asking! I'm a lightweight demo assistant trained on Brew Bliss Café's menu, offers, and campus info.\n\nCould you try asking about:\n• "Bestselling coffees"\n• "Student discount"\n• "Cold brews and frappes"\n• "Dessert menu"\n• "Café opening hours"\n\nOr click any of the suggestion chips below!`;
}
