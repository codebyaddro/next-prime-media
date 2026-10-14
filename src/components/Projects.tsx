import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, TrendingUp, Users, ShoppingBag, X, Sparkles } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/content';

interface ProjectsProps {
  onOpenConsultation: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenConsultation }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#ff1a53] shadow-[0_0_8px_#ff1a53]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2a5f] font-mono">
                FEATURED PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Latest Success Stories
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Real brands. Real results. Explore some of our recent work and see how we help
              businesses grow online.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-transparent border border-white/20 hover:border-[#ff1a53] hover:bg-[#ff1a53]/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,26,83,0.4)] transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#ff2a5f]" />
          </button>
        </div>

        {/* 3 Showcase Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#070b1a]/90 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a53]/70 shadow-[0_4px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(255,26,83,0.3)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Visual Preview Display */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#050814] flex items-center justify-center border-b border-white/[0.08]">
                  {/* Subtle Grid Ambient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-transparent to-transparent z-10" />

                  {index === 0 && (
                    <div className="relative w-full h-full p-4 flex items-center justify-center">
                      <div className="w-[88%] h-[82%] rounded-xl bg-gradient-to-br from-slate-900 to-blue-950/80 border border-cyan-500/30 p-3 shadow-2xl flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                            <ShoppingBag className="w-3 h-3" /> STORE ANALYTICS
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold">+240%</span>
                        </div>
                        <div className="h-16 flex items-end gap-1.5 pt-2">
                          {[30, 45, 40, 65, 55, 80, 70, 95, 100].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="flex-1 rounded-t bg-gradient-to-t from-cyan-600 to-blue-400 group-hover:from-cyan-400 group-hover:to-pink-500 transition-colors"
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                          <span>Q1-Q2</span>
                          <span className="text-white font-semibold">1.4M Sales</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="relative w-full h-full p-4 flex items-center justify-center">
                      {/* Dual Mobile Mockup */}
                      <div className="relative w-28 h-44 rounded-2xl bg-gradient-to-b from-purple-900/60 to-slate-900 border border-pink-500/40 p-2 shadow-2xl group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 flex flex-col justify-between">
                        <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
                        <div className="text-center my-auto">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 mx-auto flex items-center justify-center shadow-[0_0_12px_#ff0055]">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-bold text-white block mt-1">120K</span>
                          <span className="text-[8px] text-slate-400">Followers</span>
                        </div>
                        <div className="h-1.5 w-full bg-pink-500/30 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-pink-500 to-cyan-400" />
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="relative w-full h-full p-4 flex items-center justify-center">
                      <div className="w-[88%] h-[82%] rounded-xl bg-gradient-to-br from-[#120815] to-[#0a0714] border border-[#ff1a53]/40 p-4 shadow-2xl flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f0ff] to-[#0051ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.7)] mb-2">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-extrabold text-white tracking-wider">NEXT PRIME</span>
                        <span className="text-[8px] tracking-[0.2em] text-[#ff1a53] uppercase font-semibold">GROWTH SYSTEM</span>
                        <div className="mt-2 px-2.5 py-0.5 rounded-full bg-[#ff1a53]/20 border border-[#ff1a53]/50 text-[10px] text-white font-mono flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-[#ff2a5f]" /> 3.2K Leads
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom Meta */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category Pill Tag */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-slate-300 mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a53] animate-pulse" />
                      {project.category}
                    </div>

                    {/* Result Headline */}
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#ff2a5f] transition-colors">
                      {project.result}
                    </h3>
                  </div>

                  {/* View Project Action */}
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                    <span className="text-[#00f0ff] font-mono group-hover:underline">View Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ff1a53] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#090d24] border border-[#ff1a53]/60 p-6 sm:p-8 shadow-[0_0_60px_rgba(255,26,83,0.5)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs uppercase tracking-wider text-[#ff2a5f] font-mono font-semibold">
              CASE STUDY: {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">{selectedProject.title}</h3>
            
            <div className="p-3.5 rounded-xl bg-[#ff1a53]/15 border border-[#ff1a53]/40 text-[#ff2a5f] font-semibold text-sm mb-5 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {selectedProject.result}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.details}
            </p>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Tech & Methodologies
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#ff1a53] to-[#ff0055] shadow-[0_0_20px_rgba(255,26,83,0.5)] hover:shadow-[0_0_30px_rgba(255,26,83,0.8)] transition-all flex items-center justify-center gap-2"
              >
                <span>Achieve Similar Results For Your Brand</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
