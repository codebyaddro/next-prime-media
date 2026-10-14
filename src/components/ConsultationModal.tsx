import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$5,000 - $15,000',
    primaryGoal: 'Scale Leads & Revenue',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ff1a53', '#00f0ff', '#ffffff', '#0080ff'],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#080d24] border border-[#ff1a53]/60 p-6 sm:p-8 shadow-[0_0_60px_rgba(255,26,83,0.5)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-10 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Consultation Scheduled!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Our Senior Growth Strategist will contact you within 2 hours to confirm your custom roadmap session.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a53] animate-ping" />
              <span className="text-xs uppercase tracking-widest text-[#ff2a5f] font-mono font-bold">
                FREE 30-MIN STRATEGY AUDIT
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Get Your Free Consultation
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              We’ll analyze your current funnel, audit your competitors, and present an actionable blueprint for high-ROI scaling.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Monthly Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f26] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm cursor-pointer"
                  >
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000+">$15,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Primary Growth Goal</label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f26] border border-white/10 focus:border-[#ff1a53] focus:outline-none text-white text-sm cursor-pointer"
                >
                  <option value="Scale Leads & Revenue">Scale Leads & Revenue</option>
                  <option value="Boost Organic Search (SEO)">Boost Organic Search (SEO)</option>
                  <option value="Optimize Paid Ads (ROAS)">Optimize Paid Ads (ROAS)</option>
                  <option value="Redesign High-Converting Website">Redesign High-Converting Website</option>
                  <option value="Brand Identity & Social Growth">Brand Identity & Social Growth</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#ff1a53] to-[#ff0055] shadow-[0_0_25px_rgba(255,26,83,0.5)] hover:shadow-[0_0_35px_rgba(255,26,83,0.85)] transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm & Reserve Free Strategy Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 font-mono mt-1">
                <span>🔒 100% Confidential</span>
                <span>• No Pushy Sales</span>
                <span>• Actionable Insights</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
