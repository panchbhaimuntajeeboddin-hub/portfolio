import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Target,
  Compass,
  Code2,
  Cpu,
  Sparkles,
  Layers,
  BookOpen,
  CheckCircle,
  FolderGit2,
  CheckCheck
} from 'lucide-react';

const STATS = [
  { label: "Diploma in IT Aggregate", value: "90.94%", helper: "Vishweshwarya Abhiyantriki" },
  { label: "Featured Projects", value: "4+", helper: "ML, Vision & Full Stack" },
  { label: "Industry Internship", value: "1", helper: "Techno Soft Digital Space" },
  { label: "Core Technologies", value: "12+", helper: "Java, Python, React & Node" }
];

const INTERESTS = [
  { name: "Full-Stack Web Architectures", icon: Layers, desc: "Building responsive, modern UIs backed by decoupled REST microservices." },
  { name: "Machine Learning & AI", icon: Cpu, desc: "Applying predictive modeling, anomaly detection with Scikit-Learn, and applied AI." },
  { name: "Data Structures & Java OOP", icon: Code2, desc: "Writing clean, optimized, object-oriented code with robust algorithmic patterns in Java, C++, and Python." },
  { name: "Databases & Cloud Engineering", icon: Compass, desc: "Engineering relational schemas, queries, and transactions across PostgreSQL, MySQL, and Oracle." }
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight"
          >
            About <span className="text-gradient-cyan">My Background</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            A dedicated Computer Science Engineering undergraduate with hands-on internship experience, strong academic distinction, and passion for full-stack and machine learning development.
          </motion.p>
        </div>

        {/* Animated Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-black text-white font-heading group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                {stat.helper}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Education & Background Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden"
          >
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Academic Education</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    B.Tech in Computer Science Engineering
                  </h3>
                </div>
              </div>

              {/* Institution 1 */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">JSPM's Rajarshi Shahu College of Engineering, Pune</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">2025 — Present</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed"> 
                  Undergraduate degree in Computer Science Engineering, mastering Data Structures, Database Systems, Computer Networks, and Machine Learning.
                </p>
              </div>

              {/* Institution 2 - Diploma */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Vishweshwarya Abhiyantriki Padvika Mahavidyalaya</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono font-bold">90.94%</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Diploma in Information Technology (2023 — 2025), completed with academic distinction. Built a strong core in C, C++, Java, and relational database systems.
                </p>
              </div>

              {/* Personal Narrative */}
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As an aspiring software engineer with practical industry internship experience at <strong className="text-white">Techno Soft Digital Space Technology</strong>, I thrive on turning real-world requirements into clean, scalable software.
                </p>
                <p>
                  My work spans developing modern full-stack web architectures, AI recommendation systems, and high-precision Machine Learning anomaly detection pipelines.
                </p>
              </div>
            </div>

            {/* Development Goals Pill Box */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Primary Development Goals</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Secure a challenging software engineering internship or full-time developer role.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Deepen expertise in distributed backend systems and production ML deployments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Contribute meaningfully to impactful open-source initiatives and developer communities.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Technical Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-between space-y-4"
          >
            {INTERESTS.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {interest.name}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
