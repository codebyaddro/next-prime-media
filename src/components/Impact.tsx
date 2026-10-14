import React, { useState, useEffect, useRef } from 'react';
import { Users, Layers, Globe2, Star } from 'lucide-react';
import { STATS } from '../data/content';

export const Impact: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // 1.8 seconds
          const steps = 60;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts(
              STATS.map((stat) => {
                const currentVal = stat.value * easeOutQuart;
                return stat.value % 1 === 0 ? Math.round(currentVal) : Math.round(currentVal * 10) / 10;
              })
            );

            if (step >= steps) {
              clearInterval(timer);
              setCounts(STATS.map((s) => s.value));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#00f0ff]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#00f0ff]" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#00f0ff]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-[#00f0ff]" />;
      default:
        return <Star className="w-6 h-6 text-[#00f0ff]" />;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
              OUR IMPACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Numbers That Speak
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            We're proud of the results we deliver for our clients. Here are some numbers that define our journey.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="group relative rounded-2xl p-6 sm:p-8 bg-[#080d22]/85 backdrop-blur-xl border border-[#ff1a53]/35 hover:border-[#ff1a53] shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,26,83,0.35)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-center text-center"
            >
              {/* Top Glow Dot */}
              <div className="absolute top-2.5 right-3 w-1.5 h-1.5 rounded-full bg-[#ff1a53] opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container with glowing ring */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00f0ff]/20 via-[#0051ff]/20 to-[#ff1a53]/20 border border-white/10 group-hover:border-[#00f0ff]/60 flex items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                {getStatIcon(stat.icon)}
              </div>

              {/* Stat Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-1">
                {hasAnimated ? counts[idx] : stat.value}
                <span className="text-[#00f0ff]">{stat.suffix}</span>
              </div>

              {/* Label */}
              <span className="text-xs sm:text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
