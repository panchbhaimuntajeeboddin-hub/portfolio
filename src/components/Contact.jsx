import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone,
  FileDown,
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  MessageSquare, 
  ExternalLink, 
  Copy, 
  Check 
} from 'lucide-react';
import { GithubIcon, LeetCodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = "panchbhaimuntajeeboddin@gmail.com";
  const contactPhone = "+91 9970333708";

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject line.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    return newErrors;
  };

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpearpr";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebratory confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrors({
          form: data.error || 'Failed to deliver message. Please try again or reach out via direct email.'
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrors({
        form: 'Network error. Please check your connection or contact directly via email.'
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-slate-950">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight"
          >
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Open for software engineering internships, technical collaborations, and project discussions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-5 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out directly via email or connect on GitHub and LeetCode. I respond promptly to inquiries.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block font-mono">Email Address</span>
                      <a href={`mailto:${contactEmail}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition break-all">
                        {contactEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block font-mono">Phone Number</span>
                      <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition">
                        {contactPhone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyPhoneToClipboard}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-mono">Location</span>
                    <span className="text-sm font-semibold text-slate-200">Pune, Maharashtra, India</span>
                  </div>
                </div>

                {/* Direct Resume Download Card */}
                <a
                  href="/resume.pdf"
                  download="Arfat_Panchbhai_Resume.pdf"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 hover:border-cyan-400/60 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Download Official Resume</span>
                      <span className="text-[11px] text-slate-400 block font-mono">PDF format • Direct download</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    PDF
                  </span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3 font-mono">
                  Social Profiles
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/panchbhaimuntajeeboddin-hub"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://leetcode.com/u/code_knowledge/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition text-xs font-semibold group"
                  >
                    <LeetCodeIcon className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-9 rounded-3xl bg-slate-900/80 border border-slate-800 relative shadow-2xl">
              
              {/* Success / Error Notification Alert */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold block">Message Sent Successfully!</span>
                      <p className="text-xs text-emerald-300/90 leading-relaxed">
                        Thank you for reaching out. Your message has been sent directly to my inbox via Formspree. I will get back to you shortly!
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold block">Submission Error</span>
                      <p className="text-xs text-rose-300/90 leading-relaxed">
                        {errors.form || "Failed to deliver message. Please try again or reach out directly via email."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.name ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                      } text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none transition`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                      } text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none transition`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / Technical collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.subject ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                    } text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none transition`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Arfat, I came across your portfolio and would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.message ? 'border-rose-500/80' : 'border-slate-800 focus:border-cyan-500'
                    } text-slate-200 placeholder:text-slate-600 text-sm focus:outline-none transition resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-101 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating & Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
