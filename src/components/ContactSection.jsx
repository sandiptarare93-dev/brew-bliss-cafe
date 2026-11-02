import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry / Reservation',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@campus.edu).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry / Reservation',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FDFBF7] border-b border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EBE1] border border-[#D7BEA8] text-[#7B4420] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#94582E]" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C170A] tracking-tight">
            Get in Touch With Us
          </h2>
          <p className="mt-3 text-base text-[#603316]">
            Have a question regarding campus catering, table reservations, or student collaborations? Reach out below.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Academic Demonstration: All contact information and maps are placeholders for demonstration purposes.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details (Clearly Marked Placeholders) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF6EE] p-6 sm:p-8 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#2C170A]">
                Demonstration Café Hub
              </h3>
              <p className="text-xs text-[#603316] leading-relaxed">
                As this website is an academic project prototype, the details below represent an idealized campus café layout.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#D7BEA8] flex items-center justify-center text-[#7B4420] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#2C170A] uppercase tracking-wider">
                      Location Placeholder
                    </h4>
                    <p className="text-xs text-[#603316] mt-0.5">
                      Plot 42, Campus Promenade, Demo Knowledge Park, New Delhi / Bengaluru, India (Demo)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#D7BEA8] flex items-center justify-center text-[#7B4420] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#2C170A] uppercase tracking-wider">
                      Demo Hours of Operation
                    </h4>
                    <p className="text-xs text-[#603316] mt-0.5">
                      Monday to Sunday: 8:00 AM – 11:00 PM IST
                    </p>
                    <span className="text-[10px] text-[#94582E] font-medium">
                      *Late night study lounge during exam weeks
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#D7BEA8] flex items-center justify-center text-[#7B4420] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#2C170A] uppercase tracking-wider">
                      Demo Helpline
                    </h4>
                    <p className="text-xs text-[#603316] mt-0.5 font-mono">
                      +91 98765 43210 (Demonstration Number)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#D7BEA8] flex items-center justify-center text-[#7B4420] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#2C170A] uppercase tracking-wider">
                      Academic Email
                    </h4>
                    <p className="text-xs text-[#603316] mt-0.5 font-mono">
                      project@brewbliss.demo
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Preview Simulation Box */}
              <div className="rounded-2xl overflow-hidden border border-[#D7BEA8] relative h-40 bg-gradient-to-br from-[#E8D8C8] to-[#FAF6EE] flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <MapPin className="w-6 h-6 text-[#94582E] mx-auto animate-bounce" />
                  <p className="font-serif font-bold text-xs text-[#2C170A]">
                    Interactive Campus Map Placeholder
                  </p>
                  <p className="text-[10px] text-[#603316]">
                    Latitude: 28.5355° N, Longitude: 77.3910° E (Demo Pin)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8D8C8] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#2C170A] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#603316] mb-6">
              Fill out the form below. As this is a frontend prototype, submission simulates delivery and gives instant validation feedback.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-start gap-3 text-emerald-900 text-xs animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Message Submitted in Demo Mode!</p>
                  <p className="mt-0.5 text-emerald-800">
                    Your inquiry has been processed by the client application. In a production environment, this would integrate with an SMTP server or webhook.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#2C170A] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E] bg-[#FAF6EE] ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-[#D7BEA8]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-[#2C170A] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. priya@university.edu"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E] bg-[#FAF6EE] ${
                      errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-[#D7BEA8]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1">
                  Subject / Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                >
                  <option value="General Inquiry / Reservation">General Inquiry / Table Booking</option>
                  <option value="Campus Collaboration">Student Council / Campus Club Event</option>
                  <option value="Feedback on Coffee">Feedback on Coffee / Food Quality</option>
                  <option value="Digital Marketing Project Query">Digital Marketing Presentation Question</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#2C170A] mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details of your inquiry, group size, or questions..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E] bg-[#FAF6EE] ${
                    errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-[#D7BEA8]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#7B4420] text-white rounded-xl font-bold text-xs hover:bg-[#603316] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Simulated Message</span>
              </button>

              <p className="text-[11px] text-[#94582E] text-center">
                Strict Privacy: No emails are harvested or shared with external commercial advertisers.
              </p>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
