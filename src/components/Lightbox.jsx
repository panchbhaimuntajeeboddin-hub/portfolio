import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Tag, Info } from 'lucide-react';

export default function Lightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onPrev,
  onNext
}) {
  const currentItem = items && items[currentIndex];

  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onPrev();
    } else if (e.key === 'ArrowRight') {
      onNext();
    }
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview Lightbox"
      >
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {currentItem.category}
              </span>
              <span>•</span>
              <span>{currentIndex + 1} of {items.length}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close lightbox (Esc)"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex-1 flex flex-col md:flex-row overflow-y-auto">
            {/* Image Preview Container */}
            <div className="relative flex-1 flex items-center justify-center bg-slate-950/80 p-4 min-h-[300px] md:min-h-[460px]">
              <img
                src={currentItem.src}
                alt={currentItem.alt || currentItem.title}
                className="max-h-[60vh] max-w-full w-auto object-contain rounded-lg shadow-lg"
              />

              {/* Prev Navigation Button */}
              {items.length > 1 && (
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-600/90 hover:scale-105 border border-slate-700/60 transition shadow-lg cursor-pointer"
                  aria-label="Previous photo (Left Arrow)"
                  title="Previous photo (←)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Navigation Button */}
              {items.length > 1 && (
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-600/90 hover:scale-105 border border-slate-700/60 transition shadow-lg cursor-pointer"
                  aria-label="Next photo (Right Arrow)"
                  title="Next photo (→)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="w-full md:w-80 p-5 flex flex-col justify-between bg-slate-900/90 border-t md:border-t-0 md:border-l border-slate-800">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 font-heading">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentItem.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
                  {currentItem.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{currentItem.date}</span>
                    </div>
                  )}

                  {currentItem.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{currentItem.location}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Category: {currentItem.category}</span>
                  </div>
                </div>

                {/* Helpful note for replacing photo */}
                <div className="mt-4 p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-300/90 flex gap-2">
                  <Info className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Customize Photo:</span>
                    <span>Place your real photo in <code className="text-cyan-200 bg-cyan-900/40 px-1 py-0.5 rounded">public/images/gallery/</code> and update <code className="text-cyan-200 bg-cyan-900/40 px-1 py-0.5 rounded">src/data/gallery.js</code>.</span>
                  </div>
                </div>
              </div>

              {/* Navigation hint */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 text-center">
                Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">←</kbd> and <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">→</kbd> to navigate, <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Esc</kbd> to close.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
