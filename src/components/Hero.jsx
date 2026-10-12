import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  Terminal, 
  Code2, 
  BrainCircuit, 
  Cpu, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { GithubIcon, LeetCodeIcon } from './SocialIcons';


const TYPING_ROLES = [
  "Full Stack Developer",
  "Java Developer",
  "AI/ML Enthusiast",
  "Problem Solver"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const canvasRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const currentFullText = TYPING_ROLES[roleIndex];
    let typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Subtle interactive background particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(56, 189, 248, 0.25)' : 'rgba(139, 92, 246, 0.2)'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Canvas for dynamic particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs text-slate-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-medium text-cyan-300">Available for Opportunities & Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className="text-slate-400 text-base sm:text-lg font-mono mb-2">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight">
                Arfat <span className="text-gradient-cyan">Panchbhai</span>
              </h1>
            </div>

            {/* Role & Animated Typing Text */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                B.Tech Computer Engineering Student
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-bold font-mono text-cyan-400 min-h-[36px]">
                <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>{displayText}</span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Headline and Narrative */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200">
              Building Digital Experiences with Code and AI.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about engineering robust full-stack software applications, scalable backend microservices, and practical machine learning solutions. Driven by curiosity, algorithmic thinking, and modern clean architecture.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-200 hover:scale-102 cursor-pointer group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/resume.pdf"
                download="Arfat_Panchbhai_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all duration-200 hover:scale-102 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all duration-200 hover:scale-102 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-500 font-mono">Connect:</span>
              
              <a
                href="https://github.com/panchbhaimuntajeeboddin-hub"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-110"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://leetcode.com/u/code_knowledge/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 hover:border-amber-500/40 transition-all hover:scale-110"
                aria-label="LeetCode Profile"
                title="LeetCode"
              >
                <LeetCodeIcon className="w-5 h-5 text-amber-500" />
              </a>

              <a
                href="mailto:panchbhaimuntajeeboddin@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-110"
                aria-label="Email Arfat"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Frame & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Circular Frame with Glowing Border & Dotted Ring */}
            <div className="relative group">
              {/* Outer Pulsing Glow */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Glowing circular frame */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-slate-950 border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/20 overflow-hidden flex items-center justify-center">
                {/* Dotted Circular Ring Accent */}
                <div className="absolute inset-1.5 rounded-full border border-dashed border-cyan-400/40 pointer-events-none z-10" />

                {/* Profile Image with Face-Centered Crop and Fallback */}
                <img
                  src={imageError ? "/images/profile.svg" : "/images/profile.jpg"}
                  alt="Arfat Panchbhai - Profile Photo"
                  onError={() => setImageError(true)}
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: '50% 18%' }}
                />
              </div>

              {/* Floating Badge 1: Full Stack (Upper-Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:right-0 scale-90 sm:scale-100 bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-xl flex items-center gap-2 z-20"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Stack</div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">Full Stack & Java</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: AI / ML (Lower-Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:left-0 scale-90 sm:scale-100 bg-slate-900/90 border border-purple-500/40 backdrop-blur-md rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-xl flex items-center gap-2 z-20"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Focus</div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">Machine Learning</div>
                </div>
              </motion.div>
            </div>

            {/* Name and Degree Information Below Photograph */}
            <div className="mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                Arfat Panchbhai
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-1 font-medium">
                B.Tech Computer Engineering
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
