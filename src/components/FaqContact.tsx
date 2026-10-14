import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FAQS, CONTACT_INFO, SERVICES } from '../data/content';

export const FaqContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string>('1'); // First FAQ open by default matching design
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    service: 'SEO',
    message: '',
  });

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? '' : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1a53', '#00f0ff', '#ffffff', '#0080ff'],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        website: '',
        service: 'SEO',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Frequently Asked Questions */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Find quick answers to common questions about our services, process, pricing and more.
            </p>

            {/* Accordion List */}
            <div className="flex flex-col gap-3 w-full">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-xl transition-all duration-300 overflow-hidden border ${
                      isOpen
                        ? 'border-[#ff1a53]/80 bg-[#090e24] shadow-[0_0_20px_rgba(255,26,83,0.25)]'
                        : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-sm transition-colors"
                    >
                      <span className={isOpen ? 'text-[#ff3366]' : 'text-slate-200'}>
                        {faq.question}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                          isOpen
                            ? 'border-[#ff1a53] bg-[#ff1a53]/20 text-[#ff2a5f] rotate-180'
                            : 'border-white/10 text-slate-400'
                        }`}
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.05] animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Get In Touch Lead Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-9 bg-[#070b1c]/90 backdrop-blur-2xl border border-white/[0.1] shadow-2xl shadow-black/80">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#ff1a53]/15 to-transparent rounded-tr-3xl pointer-events-none" />

              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#ff2a5f] font-mono font-semibold block mb-1">
                  GET IN TOUCH
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Let's Grow Your Business Together!
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Have a project in mind or want to learn more? Send us a message and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out to Next Prime Media. Our growth strategists will review your project and reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Website + Service Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Website (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Service Interested In *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c1228] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#0c1228]">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Tell us about your project...
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current challenges, timeline, and growth goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#ff1a53] via-[#ff2a5f] to-[#ff0055] shadow-[0_0_25px_rgba(255,26,83,0.5)] hover:shadow-[0_0_35px_rgba(255,26,83,0.85)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-1"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Direct Contact Footer matching mockup bottom bar */}
              <div className="mt-8 pt-5 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-mono">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#ff2a5f] shrink-0" />
                  <span className="truncate">{CONTACT_INFO.email}</span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ff2a5f] shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>

                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#ff2a5f] shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
