import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  CheckCircle, 
  Layers
} from 'lucide-react';
import { skillsCategories } from '../data/skills';

const ICON_MAP = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-slate-950">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight"
          >
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Practical foundation built through academic computer engineering coursework, personal projects, and competitive hackathons.
          </motion.p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => {
            const IconComponent = ICON_MAP[cat.icon] || Code2;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {cat.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List Badges */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between group-hover:border-slate-700/80 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {skill.focus}
                          </span>
                        </div>

                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-900 text-cyan-400 border border-cyan-500/20 shrink-0">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle indicator bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Verified Competency</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
