import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Calendar, 
  MapPin, 
  Play, 
  Pause, 
  Sparkles,
  Info
} from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import Lightbox from './Lightbox';

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Ensure seamless loop by multiplying sequence if filtered count is small
  const marqueeItems = useMemo(() => {
    if (filteredItems.length === 0) return [];
    let items = [...filteredItems];
    // If fewer than 6 items, repeat until we have sufficient items to fill wide displays
    while (items.length < 6) {
      items = [...items, ...filteredItems];
    }
    // Duplicate the full set once for seamless 0% -> -50% looping
    return [...items, ...items];
  }, [filteredItems]);

  const openLightbox = (originalItem) => {
    const idx = filteredItems.findIndex(it => it.id === originalItem.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Manual scroll buttons for nudging the carousel
  const scrollManual = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="relative py-28 overflow-hidden bg-slate-950/70 border-y border-slate-900">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Memories & Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight"
          >
            My Journey <span className="text-gradient-cyan">Beyond Code</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            A continuous glimpse into hackathons, campus symposiums, project exhibitions, and engineering moments.
          </motion.p>
        </div>

        {/* Filter Controls & Manual Nav Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {galleryCategories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Controls: Pause / Play & Manual arrows */}
          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-1.5 backdrop-blur-md">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play className="w-4 h-4 text-cyan-400" /> : <Pause className="w-4 h-4" />}
            </button>

            <div className="w-px h-4 bg-slate-800" />

            <button
              onClick={() => scrollManual('left')}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollManual('right')}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Infinite Scrolling Marquee Track */}
      <div 
        ref={scrollContainerRef}
        className="relative w-full overflow-x-hidden py-4 cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className={`animate-marquee ${isPaused ? 'marquee-paused' : ''}`}>
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => openLightbox(item)}
              className="group relative w-80 sm:w-96 mx-3 shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="p-2 rounded-xl bg-cyan-500/90 text-white shadow-lg backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Date / Location on Bottom Image */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-slate-300">
                  {item.date && (
                    <span className="flex items-center gap-1 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.date}
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-sm truncate max-w-[140px]">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {item.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Caption Card Details */}
              <div className="p-4 sm:p-5 bg-slate-900/90">
                <h3 className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              {/* Glowing bottom accent line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Note / Guide for User to Add Real Photos */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-400 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium text-slate-200">
              Personalizing this Gallery:
            </p>
            <p>
              Drop your real photos into <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">public/images/gallery/</code> and edit your photo list in <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">src/data/gallery.js</code>. The gallery smoothly auto-loops, handles category filtering, and supports full-screen lightbox viewing.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
