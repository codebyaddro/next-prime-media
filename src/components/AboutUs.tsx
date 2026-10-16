import React from 'react';
import { Target, Award, ShieldCheck, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/content';
import aboutImage from "../assets/about.jpeg"

interface AboutUsProps {
  onOpenConsultation: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenConsultation }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#ff2a5f]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#ff2a5f]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#00f0ff]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#00f0ff]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#ff2a5f]" />;
    }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cyberpunk Studio Office Visual */}
          <div className="lg:col-span-6 relative group">
            <img src={aboutImage} alt="" className='h-120 rounded-3xl' />
          </div>

          {/* Right Column: Copy & 2x2 Feature Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
                ABOUT US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              We're More Than Just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                A Marketing Agency
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Next Prime Media is a result-driven digital marketing agency focused on helping
              businesses grow online. We combine creativity, strategy and technology to deliver
              marketing solutions that work. From SEO and ads to web development and design — we're
              your all-in-one digital partner.
            </p>

            {/* 2x2 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {ABOUT_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff1a53]/40 transition-colors flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0e1638] border border-white/10 flex items-center justify-center shrink-0">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#ff1a53] to-[#ff0055] shadow-[0_0_20px_rgba(255,26,83,0.5)] hover:shadow-[0_0_30px_rgba(255,26,83,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
