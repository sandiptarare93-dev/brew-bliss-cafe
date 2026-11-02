import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { Search, Plus, Check, Star, Sparkles, Filter, Leaf, ArrowUpDown } from 'lucide-react';

export default function MenuSection({ onAddToCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [addedItemIds, setAddedItemIds] = useState({});

  // Filter & Sort Logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Veg filter
      if (vegOnly && !item.isVeg) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesTags;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: bestsellers first
      if (a.isBestseller && !b.isBestseller) return -1;
      if (!a.isBestseller && b.isBestseller) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, vegOnly, sortBy]);

  const handleAddToCart = (item) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const getItemQuantityInCart = (itemId) => {
    const found = cartItems.find((ci) => ci.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] border border-[#D7BEA8] text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Curated Culinary Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Our Digital Menu
          </h2>
          <p className="mt-3 text-base text-[#603316]">
            Handcrafted espresso beverages, cold elixirs, artisan sourdough paninis, and melt-in-mouth desserts.
          </p>
          <div className="mt-2 inline-block text-xs bg-[#FAF6EE] text-[#94582E] px-3 py-1 rounded-md border border-[#EDE0CF] font-medium">
            Demo prices in Indian Rupees (₹) • Sample ordering demonstration
          </div>
        </div>

        {/* Controls Bar: Search, Category Filters, Veg Toggle, Sort */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E8D8C8] shadow-sm mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B88658]" />
              <input
                type="text"
                placeholder="Search coffee, panini, cold brew, brownie, croissant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-[#2C170A] placeholder-[#B88658] text-sm focus:outline-none focus:ring-2 focus:ring-[#94582E] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94582E] font-semibold hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Controls: Veg Only & Sort */}
            <div className="flex items-center gap-3">
              {/* Veg Only Toggle */}
              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                  vegOnly
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-400 shadow-sm'
                    : 'bg-[#FAF6EE] text-[#603316] border-[#D7BEA8] hover:bg-[#F5EBE1]'
                }`}
              >
                <span className="w-3 h-3 rounded-full border border-emerald-600 flex items-center justify-center p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </span>
                <span>Veg Only</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="relative flex items-center">
                <ArrowUpDown className="w-4 h-4 absolute left-3 text-[#94582E] pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-9 pr-8 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-[#2C170A] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#94582E] appearance-none cursor-pointer"
                >
                  <option value="featured">Featured / Bestsellers</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated (Stars)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    active
                      ? 'bg-[#7B4420] text-white shadow-sm'
                      : 'bg-[#FAF6EE] text-[#603316] hover:bg-[#E8D8C8]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#94582E] font-medium mb-6 px-1">
          <span>
            Showing <strong>{filteredItems.length}</strong> items
            {selectedCategory !== 'all' ? ` in ${selectedCategory}` : ''}
          </span>
          <span className="text-[#B88658]">All prices inclusive of demo taxes</span>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="bg-[#FAF6EE] rounded-3xl p-12 text-center border border-[#E8D8C8] max-w-lg mx-auto my-8">
            <Filter className="w-12 h-12 text-[#B88658] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#2C170A]">No menu items found</h3>
            <p className="text-sm text-[#603316] mt-1 mb-4">
              We couldn’t find anything matching "{searchQuery}". Try searching for coffee, latte, panini, or brownie!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegOnly(false);
              }}
              className="px-4 py-2 bg-[#7B4420] text-white rounded-xl text-xs font-semibold hover:bg-[#603316]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const inCartQty = getItemQuantityInCart(item.id);
            const isJustAdded = addedItemIds[item.id];

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-[#E8D8C8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Image & Badges */}
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#F5EBE1]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Vegetarian Indicator */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                      <span className="w-2.5 h-2.5 rounded-full border border-emerald-600 flex items-center justify-center p-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      </span>
                      <span>100% Veg</span>
                    </div>

                    {/* Bestseller Badge */}
                    {item.isBestseller && (
                      <div className="absolute top-3 right-3 bg-[#D4A373] text-[#2C170A] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Bestseller</span>
                      </div>
                    )}

                    {/* Calorie pill */}
                    <div className="absolute bottom-3 left-3 text-white text-[11px] font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.calories}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Rating & Category */}
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="uppercase tracking-wider font-semibold text-[#94582E]">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#432310] font-bold">
                        <Star className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />
                        <span>{item.rating}</span>
                        <span className="text-[#94582E] font-normal">({item.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-[#2C170A] group-hover:text-[#7B4420] transition-colors line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#603316] mt-1.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-[#FAF6EE] text-[#7B4420] px-2 py-0.5 rounded-md border border-[#EDE0CF] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Add to Cart */}
                <div className="px-5 pb-5 pt-2 border-t border-[#F5EBE1] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#94582E] font-medium">Price</span>
                    <p className="font-serif text-xl font-bold text-[#2C170A]">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#7B4420] text-white hover:bg-[#603316]'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>
                          {inCartQty > 0 ? `Add More (${inCartQty})` : 'Add to Cart'}
                        </span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
