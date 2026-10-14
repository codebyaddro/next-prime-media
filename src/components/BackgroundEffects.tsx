import React, { useEffect, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px] transition-transform duration-75 ease-out pointer-events-none"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(255,26,83,0.3) 0%, rgba(0,240,255,0.15) 50%, transparent 80%)',
        }}
      />

      {/* Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Hero Ambient Glows */}
      {/* Top Center-Right Blue Glow (behind laptop) */}
      <div className="absolute top-[5%] right-[10%] w-[550px] h-[550px] rounded-full bg-[#0080ff]/15 blur-[140px] pointer-events-none" />
      {/* Top Left Crimson Glow (behind hero title) */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#ff1a53]/15 blur-[130px] pointer-events-none" />
      {/* Center Impact Ambient Glow */}
      <div className="absolute top-[48%] left-[10%] w-[600px] h-[400px] rounded-full bg-[#ff1a53]/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-[52%] right-[5%] w-[600px] h-[400px] rounded-full bg-[#00f0ff]/10 blur-[150px] pointer-events-none" />
      {/* Bottom Contact Glow */}
      <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[400px] rounded-full bg-[#ff1a53]/15 blur-[150px] pointer-events-none" />

      {/* Ambient Curved Laser Ribbons (Hero to Services) */}
      <svg
        className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none opacity-60"
        viewBox="0 0 1440 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="laserRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1a53" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ff0055" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff1a53" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="laserBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0080ff" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit Arc Under Laptop */}
        <path
          d="M 680 340 C 900 240, 1300 280, 1420 450"
          stroke="url(#laserBlue)"
          strokeWidth="3.5"
          filter="url(#glowFilter)"
        />
        <path
          d="M 650 380 C 850 290, 1280 320, 1380 480"
          stroke="url(#laserBlue)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          opacity="0.7"
        />

        {/* Sweeping Arc Over Laptop */}
        <path
          d="M 1440 220 C 1200 120, 850 160, 720 280"
          stroke="url(#laserRed)"
          strokeWidth="3"
          filter="url(#glowFilter)"
        />

        {/* Diagonal Light Path */}
        <path
          d="M -100 600 C 300 680, 800 520, 1450 780"
          stroke="url(#laserRed)"
          strokeWidth="2.5"
          filter="url(#glowFilter)"
          opacity="0.4"
        />
      </svg>

      {/* Mid-page S-Curve Laser (Impact Section) */}
      <svg
        className="absolute top-[2400px] left-0 w-full h-[600px] pointer-events-none opacity-50"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -50 320 C 350 200, 750 480, 1480 260"
          stroke="url(#laserRed)"
          strokeWidth="3"
          filter="url(#glowFilter)"
        />
        <path
          d="M -50 340 C 400 460, 850 180, 1480 360"
          stroke="url(#laserBlue)"
          strokeWidth="2"
          filter="url(#glowFilter)"
        />
      </svg>
    </div>
  );
};
