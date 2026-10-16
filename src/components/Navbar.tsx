import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import logo from '../assets/logo.png';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#060914]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className='flex items-center gap-3 group'>
          <img src={logo} alt="Brand Logo" className='w-30 rounded-xl' />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0a0f24]/60 border border-white/[0.08] backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {/* Active Capsule Highlight Matching Design */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff1a53]/20 via-[#ff1a53]/40 to-[#ff1a53]/20 border border-[#ff1a53]/60 shadow-[0_0_12px_rgba(255,26,83,0.5)] -z-10" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold text-white tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* Gradient Glow Outline */}
            <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#ff1a53] via-[#ff3366] to-[#0080ff]">
              <span className="block w-full h-full rounded-full bg-[#070b19]/90 group-hover:bg-[#070b19]/60 transition-colors" />
            </span>

            {/* Glowing Accent */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#ff1a53]/40 to-[#0080ff]/40 blur-[8px] opacity-70 group-hover:opacity-100 transition-opacity" />

            <span className="relative z-10 flex items-center gap-2">
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#ff2a5f] group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090d20]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === link.name
                    ? 'text-white bg-[#ff1a53]/20 border border-[#ff1a53]/40 shadow-[0_0_12px_rgba(255,26,83,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#ff1a53] to-[#ff0055] shadow-[0_0_20px_rgba(255,26,83,0.5)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
