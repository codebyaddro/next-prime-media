import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 md:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Don't just take our word for it. Here's what some of our amazing clients have to say about working with Next Prime Media.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={prev}
            aria-label="Previous Testimonial"
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0a0f26]/80 hover:bg-[#ff1a53] border border-white/10 hover:border-[#ff1a53] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={next}
            aria-label="Next Testimonial"
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0a0f26]/80 hover:bg-[#ff1a53] border border-white/10 hover:border-[#ff1a53] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards Grid (Desktop displays 3, Mobile shows current) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={t.id}
                  className={`relative rounded-2xl p-6 sm:p-7 bg-[#070b1c]/85 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${
                    isCenter
                      ? 'border-[#ff1a53]/60 shadow-[0_0_30px_rgba(255,26,83,0.35)] -translate-y-1'
                      : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Glowing Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-7 h-7 text-[#00f0ff]/50" />
                    </div>

                    {/* Testimonial Body */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Author Info + 5 Stars */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight">{t.name}</h4>
                        <span className="text-[11px] text-slate-400">{t.role}, {t.company}</span>
                      </div>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#00f0ff] text-[#00f0ff]" />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === i
                    ? 'w-6 bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
