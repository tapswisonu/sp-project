"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-0.5 w-8 bg-[var(--color-brand-red)]" />
            <span className="text-[var(--color-brand-red)] font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <div className="h-0.5 w-8 bg-[var(--color-brand-red)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6"
          >
            Let&apos;s Discuss Your Packaging Needs
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-red)] group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Head Office</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Survey No. 170/1 (182), Panchal Udyog Nagar, Bhimpore, Nani Daman, Daman - 396 210
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-red)] group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">
                      +91 87348 91263 <br />
                      +91 9374632009
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-[var(--color-brand-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-red)] group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@sppackaging.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 h-[300px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3738.3949130420688!2d72.87366107524095!3d20.448966981059254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI2JzU2LjMiTiA3MsKwNTInMzQuNSJF!5e0!3m2!1sen!2sin!4v1761913051826!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <h3 className="text-3xl font-bold font-heading text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-600 mb-8">We will get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-900">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-[var(--color-brand-red)] outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-900">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-[var(--color-brand-red)] outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-[var(--color-brand-red)] outline-none transition-all"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-900">Subject *</label>
                  <select
                    id="subject"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-[var(--color-brand-red)] outline-none transition-all text-gray-700"
                    required
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="quote">Request a Quote</option>
                    <option value="sample">Ask for Sample</option>
                    <option value="support">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-900">Your Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-[var(--color-brand-red)] outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-dark)] text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all shadow-xl shadow-red-500/20"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
