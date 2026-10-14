import React, { useState } from 'react';
import {
  Search,
  Flame,
  Camera,
  Code,
  Palette,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/content';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-[#00f0ff]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#ff2a5f]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#00f0ff]" />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#ff2a5f]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#00f0ff]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#ff2a5f]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#00f0ff]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Layout: Left Header + Right 3x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Subtitle & Action */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
                OUR SERVICES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Digital Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Real Growth
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              We offer a full range of digital marketing services to help your brand grow, engage,
              and convert.
            </p>

            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-[#ff1a53]/80 hover:bg-[#ff1a53]/15 shadow-[0_0_15px_rgba(255,26,83,0.35)] hover:shadow-[0_0_25px_rgba(255,26,83,0.6)] transition-all duration-300"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-[#ff2a5f] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Right Column: 3x2 Interactive Neon Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => {
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceModal(service)}
                  className="group relative cursor-pointer rounded-2xl p-6 bg-[#080d22]/80 backdrop-blur-xl border border-[#ff1a53]/30 hover:border-[#ff1a53] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,26,83,0.35)] hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px]"
                >
                  {/* Subtle Corner Glow Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff1a53]/15 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-[#ff1a53]/30 transition-colors" />

                  {/* Top Bar: Icon + Arrow Trigger */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Glowing Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-[#0e1638] border border-white/10 group-hover:border-[#00f0ff]/50 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                      {getIcon(service.iconName)}
                    </div>

                    {/* Top Right Arrow Pill */}
                    <div className="w-7 h-7 rounded-full border border-[#ff1a53]/40 group-hover:border-[#ff1a53] group-hover:bg-[#ff1a53] flex items-center justify-center transition-all duration-300 shadow-[0_0_8px_rgba(255,26,83,0.3)]">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff3366] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Tag Metric */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-mono font-medium text-[#00f0ff]">
                      {service.stats}
                    </span>
                    <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Details Interactive Modal */}
      {activeServiceModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveServiceModal(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#090e24] border border-[#ff1a53]/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,26,83,0.4)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0e1638] border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                {getIcon(activeServiceModal.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#ff2a5f] font-mono font-semibold">
                  NEXT PRIME SERVICE
                </span>
                <h3 className="text-2xl font-bold text-white">{activeServiceModal.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {activeServiceModal.description} We engineer bespoke campaigns utilizing rigorous data models,
              conversion-tested designs, and continuous iteration.
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Key Deliverables & Capabilities
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {activeServiceModal.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 mb-6">
              <span className="text-xs text-slate-400">Benchmark Performance:</span>
              <span className="text-sm font-bold text-[#00f0ff] font-mono">
                {activeServiceModal.stats}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveServiceModal(null);
                  onOpenConsultation();
                }}
                className="flex-1 py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#ff1a53] to-[#ff0055] shadow-[0_0_20px_rgba(255,26,83,0.5)] hover:shadow-[0_0_30px_rgba(255,26,83,0.8)] transition-all flex items-center justify-center gap-2"
              >
                <span>Request {activeServiceModal.title} Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
