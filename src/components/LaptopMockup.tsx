import React, { useState } from 'react';
import {
  TrendingUp,
  LayoutDashboard,
  BarChart2,
  FileText,
  Settings,
  Sparkles,
} from 'lucide-react';

export const LaptopMockup: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<'30D' | '7D' | '90D'>('30D');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Dynamic Chart points for different ranges
  const chartData = {
    '7D': [
      { x: 30, y: 110, val: '24K' },
      { x: 90, y: 95, val: '31K' },
      { x: 150, y: 105, val: '28K' },
      { x: 210, y: 70, val: '52K' },
      { x: 270, y: 55, val: '74K' },
      { x: 330, y: 40, val: '98K' },
      { x: 390, y: 25, val: '125.4K' },
    ],
    '30D': [
      { x: 30, y: 125, val: '18K' },
      { x: 90, y: 100, val: '35K' },
      { x: 150, y: 115, val: '29K' },
      { x: 210, y: 65, val: '64K' },
      { x: 270, y: 80, val: '58K' },
      { x: 330, y: 45, val: '102K' },
      { x: 390, y: 20, val: '125.4K' },
    ],
    '90D': [
      { x: 30, y: 135, val: '12K' },
      { x: 90, y: 120, val: '22K' },
      { x: 150, y: 90, val: '48K' },
      { x: 210, y: 80, val: '62K' },
      { x: 270, y: 50, val: '92K' },
      { x: 330, y: 35, val: '115K' },
      { x: 390, y: 15, val: '142K' },
    ],
  };

  const points = chartData[selectedRange];
  const pathD = `M ${points[0].x} ${points[0].y} ` +
    points.slice(1).map((p, i) => {
      const prev = points[i];
      const cp1x = prev.x + (p.x - prev.x) / 2;
      const cp1y = prev.y;
      const cp2x = prev.x + (p.x - prev.x) / 2;
      const cp2y = p.y;
      return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p.x} ${p.y}`;
    }).join(' ');

  const areaD = `${pathD} L 390 140 L 30 140 Z`;

  return (
    <div className="relative w-full max-w-[640px] mx-auto select-none group">
      {/* Dynamic Floating Cursive Script Badges on the right */}
      <div className="absolute -top-4 -right-2 sm:-right-6 md:-right-8 z-30 flex flex-col items-end pointer-events-none">
        <span className="font-['Caveat'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff3366] neon-text-red tracking-wide rotate-[-6deg] drop-shadow-[0_0_15px_rgba(255,26,83,0.8)]">
          More Traffic
        </span>
        <span className="font-['Caveat'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff1a53] neon-text-red tracking-wide rotate-[-3deg] mt-1 drop-shadow-[0_0_15px_rgba(255,26,83,0.8)]">
          More Sales
        </span>
      </div>

      {/* Orbiting Laser Ring FX around Laptop */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#00f0ff]/20 via-transparent to-[#ff1a53]/20 blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* 3D Perspective Container */}
      <div
        className="relative transition-transform duration-500 ease-out group-hover:scale-[1.01]"
        style={{ perspective: '1200px' }}
      >
        {/* Laptop Body Shell */}
        <div
          className="relative rounded-2xl bg-[#080d1e] p-2.5 sm:p-3.5 shadow-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.25)]"
          style={{
            transform: 'rotateX(8deg) rotateY(-8deg) rotateZ(1deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Screen Bezel & WebCam */}
          <div className="relative rounded-xl overflow-hidden bg-[#04060d] border border-white/[0.08]">
            <div className="h-4 bg-[#070b18] flex items-center justify-between px-3 border-b border-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto" />
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[9px] text-slate-400 font-mono">LIVE</span>
              </div>
            </div>

            {/* Dashboard App Interface */}
            <div className="grid grid-cols-12 min-h-[300px] sm:min-h-[340px] bg-[#050814]/95 text-slate-200">
              {/* Mini App Sidebar */}
              <div className="col-span-2 border-r border-white/[0.06] bg-[#030611]/80 p-2 sm:p-2.5 flex flex-col justify-between">
                <div className="flex flex-col gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#00f0ff] to-[#0066ff] flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <nav className="flex flex-col gap-1.5 pt-2">
                    <button className="flex items-center gap-1.5 p-1.5 rounded-md bg-[#00f0ff]/15 text-[#00f0ff] text-[10px] font-medium border border-[#00f0ff]/30">
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Dashboard</span>
                    </button>
                    <button className="flex items-center gap-1.5 p-1.5 rounded-md text-slate-400 hover:text-slate-200 text-[10px] font-medium transition-colors">
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Analytics</span>
                    </button>
                    <button className="flex items-center gap-1.5 p-1.5 rounded-md text-slate-400 hover:text-slate-200 text-[10px] font-medium transition-colors">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Reports</span>
                    </button>
                  </nav>
                </div>
                <div>
                  <button className="flex items-center gap-1.5 p-1.5 rounded-md text-slate-500 hover:text-slate-300 text-[10px]">
                    <Settings className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Settings</span>
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-span-10 p-3 sm:p-4 flex flex-col justify-between">
                {/* Header Row: Title & Range Selector */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      Performance Overview
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                      Website Traffic
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#ff1a53] to-[#ff0055] shadow-[0_0_12px_rgba(255,26,83,0.5)]">
                        <TrendingUp className="w-3 h-3" />
                        +236%
                      </span>
                    </h4>
                  </div>

                  <div className="flex items-center gap-1 bg-white/[0.05] p-0.5 rounded-lg border border-white/[0.08]">
                    {(['7D', '30D', '90D'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setSelectedRange(r)}
                        className={`px-2 py-0.5 text-[10px] font-semibold rounded transition-colors ${
                          selectedRange === r
                            ? 'bg-[#00f0ff] text-black shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive SVG Glow Chart */}
                <div className="relative my-2 sm:my-3 h-[130px] sm:h-[145px] w-full">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 420 150"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#0051ff" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#ff1a53" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="65%" stopColor="#0080ff" />
                        <stop offset="100%" stopColor="#ff1a53" />
                      </linearGradient>
                      <filter id="neonLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Chart Grid Lines */}
                    <line x1="30" y1="30" x2="390" y2="30" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />
                    <line x1="30" y1="70" x2="390" y2="70" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />
                    <line x1="30" y1="110" x2="390" y2="110" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />

                    {/* Filled Area */}
                    <path d={areaD} fill="url(#chartAreaGrad)" />

                    {/* Glowing Stroke Curve */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="url(#chartLineGrad)"
                      strokeWidth="3"
                      filter="url(#neonLineGlow)"
                      className="transition-all duration-500 ease-in-out"
                    />

                    {/* Interactive Data Nodes */}
                    {points.map((p, idx) => {
                      const isHovered = hoveredPoint === idx;
                      return (
                        <g key={idx}>
                          {/* Pulse halo on peak point */}
                          {idx === points.length - 1 && (
                            <circle
                              cx={p.x}
                              cy={p.y}
                              r="8"
                              className="fill-[#ff1a53]/40 animate-ping"
                            />
                          )}
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r={isHovered ? 6 : 4}
                            className={`cursor-pointer transition-all ${
                              idx === points.length - 1
                                ? 'fill-[#ff1a53] stroke-white stroke-2 shadow-[0_0_10px_#ff1a53]'
                                : 'fill-[#00f0ff] stroke-[#050814] stroke-2'
                            }`}
                            onMouseEnter={() => setHoveredPoint(idx)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />
                          {isHovered && (
                            <g>
                              <rect
                                x={p.x - 24}
                                y={p.y - 25}
                                width="48"
                                height="18"
                                rx="4"
                                className="fill-[#0f172a] stroke-white/20"
                              />
                              <text
                                x={p.x}
                                y={p.y - 13}
                                textAnchor="middle"
                                className="fill-white text-[9px] font-mono font-bold"
                              >
                                {p.val}
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* 3 Metric Cards Matching Design */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08]">
                  {/* Total Visitors */}
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex flex-col">
                    <span className="text-[9px] text-slate-400 font-medium truncate">Total Visitors</span>
                    <div className="flex items-baseline justify-between mt-0.5">
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">125.4K</span>
                      <span className="text-[10px] font-semibold text-[#00f0ff]">+236%</span>
                    </div>
                  </div>

                  {/* Leads Generated */}
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex flex-col">
                    <span className="text-[9px] text-slate-400 font-medium truncate">Leads Generated</span>
                    <div className="flex items-baseline justify-between mt-0.5">
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">4.8K</span>
                      <span className="text-[10px] font-semibold text-[#00f0ff]">+182%</span>
                    </div>
                  </div>

                  {/* Conversion Rate */}
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex flex-col">
                    <span className="text-[9px] text-slate-400 font-medium truncate">Conversion Rate</span>
                    <div className="flex items-baseline justify-between mt-0.5">
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">3.9%</span>
                      <span className="text-[10px] font-semibold text-[#00f0ff]">+128%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base & Hinge */}
        <div
          className="relative mx-auto h-3 w-[92%] bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#1e293b] rounded-b-xl border-t border-white/20 shadow-2xl"
          style={{
            transform: 'rotateX(8deg) rotateY(-8deg) rotateZ(1deg) translateY(-2px)',
          }}
        >
          {/* Trackpad Notch */}
          <div className="w-16 h-1 mx-auto bg-slate-700/60 rounded-full mt-0.5" />
        </div>
      </div>
    </div>
  );
};
