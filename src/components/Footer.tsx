import React from 'react';
import { NAV_LINKS } from '../data/content';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#03050c] border-t border-white/[0.08] pt-14 pb-8 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff1a53]/60 to-transparent shadow-[0_0_15px_#ff1a53]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
          {/* Brand Logo */}
          <a href="#home" className='flex items-center gap-3 group'>
            <img src={logo} alt="Brand Logo" className='w-30 rounded-xl' />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#ff1a53] hover:text-white border border-white/10 hover:border-[#ff1a53] flex items-center justify-center text-slate-400 text-xs font-bold transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#ff1a53] hover:text-white border border-white/10 hover:border-[#ff1a53] flex items-center justify-center text-slate-400 text-xs font-bold transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              aria-label="Instagram"
            >
              in
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#00f0ff] hover:text-black border border-white/10 hover:border-[#00f0ff] flex items-center justify-center text-slate-400 text-xs font-bold transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#ff1a53] hover:text-white border border-white/10 hover:border-[#ff1a53] flex items-center justify-center text-slate-400 text-xs font-bold transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              aria-label="X"
            >
              𝕏
            </a>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>© 2025 Next Prime Media. All rights reserved. | Designed for a bigger tomorrow.</p>
          <p className="tracking-widest uppercase text-slate-400">
            Strategy / Creativity / Technology
          </p>
        </div>
      </div>
    </footer>
  );
};
