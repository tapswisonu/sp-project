"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, Box, IndianRupee } from "lucide-react";

export default function AboutFeatures() {
  const features = [
    {
      title: "Premium Quality",
      description: "World-class manufacturing standards with rigorous quality checks.",
      icon: ShieldCheck,
    },
    {
      title: "Timely Delivery",
      description: "Streamlined logistics ensuring on-time delivery across India.",
      icon: Clock,
    },
    {
      title: "Custom Packaging",
      description: "Tailor-made solutions to fit your exact specifications and brand.",
      icon: Box,
    },
    {
      title: "Competitive Pricing",
      description: "Factory-direct rates without compromising on quality.",
      icon: IndianRupee,
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-50 relative overflow-hidden mt-16 md:mt-24">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-brand-red)]/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="/assets/about.png" 
                alt="SP Packaging Manufacturing Facility" 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-heading font-extrabold text-[var(--color-brand-red)]">10+</div>
                <div className="text-sm font-semibold text-gray-600 leading-tight">Years of<br/>Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-[var(--color-brand-red)]" />
              <span className="text-[var(--color-brand-red)] font-semibold uppercase tracking-wider text-sm">About SP Packaging</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
              Pioneering Quality in <br />
              <span className="text-[var(--color-brand-red)]">Industrial Packaging</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SP Packaging is a trusted name in the manufacturing of PP/HDPE woven fabric rolls, bags, and packaging materials. With years of expertise, we provide durable, eco-friendly, and customized packaging solutions that meet global standards.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['State-of-the-art infrastructure', 'Skilled workforce & engineers', 'Commitment to sustainability'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-red)] shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#products" className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors">
              View Our Products
            </a>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-red-50 text-[var(--color-brand-red)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-red)] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
