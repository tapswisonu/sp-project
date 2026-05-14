"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:+918734891263"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="w-14 h-14 bg-white text-gray-900 border border-gray-100 rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 hover:scale-110 hover:text-[var(--color-brand-red)] transition-all group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg shadow-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Now
        </span>
        <PhoneCall className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918734891263"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg shadow-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
