import React from 'react';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  FileText,
  Link2,
} from 'lucide-react';
import { LaptopMockup } from './LaptopMockup';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
                DIGITAL MARKETING AGENCY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Grow Your Business <br />
              With Strategic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a53] via-[#ff3366] to-[#ff0055] drop-shadow-[0_0_35px_rgba(255,26,83,0.7)]">
                Digital Marketing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-xl leading-relaxed mb-8 font-normal">
              Next Prime Media helps ambitious brands increase visibility, generate qualified leads,
              and achieve sustainable growth through data-driven digital marketing solutions.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* Primary Consultation Pill Button */}
              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#ff1a53] via-[#ff2a5f] to-[#ff0055] shadow-[0_0_25px_rgba(255,26,83,0.6)] hover:shadow-[0_0_35px_rgba(255,26,83,0.85)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Secondary Explore Services Button */}
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-[#0c1228]/80 hover:bg-[#111a38] border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
              >
                Explore Our Services
              </a>
            </div>

            {/* 4 Mini Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ff1a53]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#ff1a53]/15 border border-[#ff1a53]/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#ff2a5f]" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-tight">
                  Data-Driven <br /> Strategy
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#00f0ff]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/15 border border-[#00f0ff]/30 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#00f0ff]" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-tight">
                  Result Focused <br /> Campaigns
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ff1a53]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#ff1a53]/15 border border-[#ff1a53]/30 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#ff2a5f]" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-tight">
                  Transparent <br /> Reporting
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#00f0ff]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/15 border border-[#00f0ff]/30 flex items-center justify-center shrink-0">
                  <Link2 className="w-4 h-4 text-[#00f0ff]" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-tight">
                  Long-Term <br /> Partnership
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Laptop Visual */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center z-10 mt-8 lg:mt-0">
            <LaptopMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
