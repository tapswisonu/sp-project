"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Factory, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Clients Served", value: "500+", icon: ShieldCheck },
    { label: "Orders Delivered", value: "1000+", icon: Box },
    { label: "Manufacturing Capacity", value: "High", icon: Factory },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Industrial Packaging Facility"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Premium B2B Packaging Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-6 text-balance">
              Industrial Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-rose-400">
                Woven Fabrics
              </span> & Bags
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Leading manufacturer of high-quality PP/HDPE woven fabric rolls, bags, and packaging materials trusted by industries across India.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#products" 
                className="group relative inline-flex items-center justify-center gap-2 bg-[var(--color-brand-red)] text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Explore Products</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#contact" 
                className="group inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all hover:bg-white/5"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>

          {/* Decorative/Stats Side */}
          <div className="hidden lg:block relative h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md aspect-square rounded-full border border-white/10 p-8"
            >
              <div className="w-full h-full rounded-full border border-[var(--color-brand-red)]/30 border-dashed animate-[spin_60s_linear_infinite]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4 md:px-8 z-20"
      >
        <div className="container mx-auto">
          <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 divide-x divide-gray-200/50">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`flex flex-col items-center text-center ${index !== 0 ? 'pl-6 md:pl-12' : ''}`}>
                    <div className="mb-3 p-3 bg-red-50 text-[var(--color-brand-red)] rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-heading font-extrabold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
