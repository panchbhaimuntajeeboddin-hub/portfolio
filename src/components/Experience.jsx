import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase,
  Trophy, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Milestone, 
  Info,
  Clock,
  ExternalLink,
  FileDown
} from 'lucide-react';
import { timelineData, timelineFilters } from '../data/experience';

const ICON_MAP = {
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Users
};

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTimeline = activeFilter === "All"
    ? timelineData
    : timelineData.filter(item => item.type === activeFilter);

  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-slate-950/70 border-t border-slate-900">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic & Technical Track</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight"
          >
            Experience & <span className="text-gradient-cyan">Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            A chronological timeline of industry internship experience, engineering education, and verified technical credentials.
          </motion.p>

          {/* Quick Resume Download Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-5 inline-flex items-center gap-2"
          >
            <a
              href="/resume.pdf"
              download="Arfat_Panchbhai_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-all hover:scale-102 cursor-pointer shadow-lg shadow-cyan-500/10"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </motion.div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {timelineFilters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredTimeline.map((item, idx) => {
              const IconComp = ICON_MAP[item.icon] || GraduationCap;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="relative pl-6 sm:pl-10"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Left Period on larger screens */}
                  <div className="hidden sm:block absolute -left-36 md:-left-44 top-2 text-right w-28 md:w-36">
                    <span className="text-xs font-mono font-bold text-cyan-400 block">
                      {item.period}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {item.type}
                    </span>
                  </div>

                  {/* Timeline Card */}
                  <div className="p-5 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all shadow-xl group">
                    {/* Period badge for mobile */}
                    <div className="sm:hidden flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                      <span>•</span>
                      <span className="text-slate-400">{item.type}</span>
                    </div>

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4">
                      <span className="font-semibold text-slate-300">
                        {item.institution}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Credential Link if present */}
                    {item.credentialUrl && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Official Certificate Record:</span>
                        <a
                          href={item.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all hover:scale-102 cursor-pointer"
                        >
                          <span>View Credential</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
