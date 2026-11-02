import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Heart, CheckCircle2, Coffee, ShieldAlert, Sparkles, Send } from 'lucide-react';

const INITIAL_DEMO_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Aanya Verma',
    role: 'College Senior (Computer Science)',
    rating: 5,
    category: 'Ambience & Wi-Fi',
    message: 'The peaceful ambience and lightning-fast Wi-Fi make this my favorite spot for sprint coding and exam prep. The 18-hour cold brew is unmatched!',
    date: '2 days ago',
    isSample: true
  },
  {
    id: 'rev-2',
    name: 'Rohan Mehta',
    role: 'MBA Student & Coffee Geek',
    rating: 5,
    category: 'Coffee Quality',
    message: 'Genuinely surprised by the espresso quality. Notes of dark cacao and hazelnut without that harsh bitterness. Great student combo deals too!',
    date: '5 days ago',
    isSample: true
  },
  {
    id: 'rev-3',
    name: 'Pooja Kulkarni',
    role: 'Design Intern',
    rating: 5,
    category: 'Desserts & Bites',
    message: 'The Warm Belgian Truffle Brownie served with Madagascar vanilla gelato is pure heaven. Beautiful aesthetic café interior!',
    date: '1 week ago',
    isSample: true
  }
];

export default function CustomerFeedbackSection() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('brew_bliss_reviews');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_REVIEWS;
    } catch {
      return INITIAL_DEMO_REVIEWS;
    }
  });

  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('Coffee Quality');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('brew_bliss_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.warn('Failed to save demo reviews to localStorage', e);
    }
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!message.trim() || message.trim().length < 8) {
      setErrorMsg('Please write a brief feedback message (at least 8 characters).');
      return;
    }

    const newReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Demo Guest',
      rating,
      category,
      message: message.trim(),
      date: 'Just now (Demo)',
      isSample: false
    };

    setReviews([newReview, ...reviews]);
    setSubmittedSuccess(true);
    setName('');
    setMessage('');
    setRole('');
    setRating(5);

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 4500);
  };

  return (
    <section id="feedback" className="py-20 bg-[#FAF6EE] border-b border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C8]/60 text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Community Voice & Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Guest Experience & Feedback
          </h2>
          <p className="mt-3 text-base text-[#603316]">
            Transparent community reflections and demonstration feedback stored locally in your browser.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Demonstration Testimonials: Realistic sample feedback for academic course presentation.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Feedback Submission Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8D8C8] shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2C170A] mb-2">
              Share Your Demo Experience
            </h3>
            <p className="text-xs text-[#603316] mb-6">
              Test submitting a review. It will instantly appear in the live demonstration feed on this page.
            </p>

            {submittedSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-start gap-3 text-emerald-900 text-xs animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Thank you for your feedback!</p>
                  <p className="mt-0.5 text-emerald-800">
                    Your response has been added to the local demonstration feed below. (No remote backend required).
                  </p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-300 rounded-xl text-xs text-rose-800 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1.5">
                  Rating (Select Coffee Stars) *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-2xl transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          (hoverRating || rating) >= star
                            ? 'fill-[#D4A373] text-[#D4A373]'
                            : 'text-[#D7BEA8]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-[#7B4420] ml-2">
                    {rating} out of 5 Stars
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Iyer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                />
              </div>

              {/* Role / Tag */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1">
                  College / Role (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marketing Student / Freelancer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1">
                  Experience Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                >
                  <option value="Coffee Quality">Coffee Quality & Roast</option>
                  <option value="Ambience & Wi-Fi">Ambience & Wi-Fi Co-working</option>
                  <option value="Desserts & Bites">Desserts & Food Bites</option>
                  <option value="Staff Hospitality">Staff Hospitality & Speed</option>
                  <option value="Student Pricing">Value for Money / Offers</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1">
                  Your Feedback / Thoughts *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you enjoyed about the brews or student environment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#7B4420] text-white rounded-xl font-bold text-xs hover:bg-[#603316] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Local Demo Review</span>
              </button>

              <p className="text-[11px] text-center text-[#94582E]">
                Stored locally in browser localStorage • No backend account required
              </p>
            </form>
          </div>

          {/* Right: Reviews Feed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#2C170A]">
                Recent Community Reviews ({reviews.length})
              </h3>
              <button
                onClick={() => {
                  setReviews(INITIAL_DEMO_REVIEWS);
                  localStorage.removeItem('brew_bliss_reviews');
                }}
                className="text-xs text-[#94582E] hover:underline font-semibold"
              >
                Reset to Sample Reviews
              </button>
            </div>

            <div className="space-y-4">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-5 rounded-2xl border border-[#E8D8C8] shadow-sm hover:shadow-md transition-shadow space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-[#2C170A]">
                          {rev.name}
                        </h4>
                        {rev.isSample ? (
                          <span className="text-[10px] bg-[#FAF6EE] text-[#94582E] px-2 py-0.5 rounded font-semibold border border-[#EDE0CF]">
                            Demo Sample
                          </span>
                        ) : (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold border border-emerald-300">
                            User Submitted (Local)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#603316]">
                        {rev.role} • <span className="font-medium text-[#7B4420]">{rev.category}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-0.5 text-[#D4A373]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4A373]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#94582E] block mt-0.5">{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#603316] leading-relaxed italic">
                    “{rev.message}”
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
