"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "products", "contact"];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) {
        current = "";
      }

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Mobile Top Bar (Static) */}
      <div className="md:hidden bg-[var(--color-brand-red)] text-white py-2 px-4 flex flex-col items-center justify-center gap-1.5 text-xs font-medium text-center">
        <span>SP Packaging - Premium Packaging Solutions</span>
        <div className="flex items-center gap-4">
          <a href="tel:+918734891263" className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 87348 91263</a>
          <a href="mailto:info@sppackaging.in" className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@sppackaging.in</a>
        </div>
      </div>

      {/* Desktop Top Info Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/assets/logo.png" alt="SP Packaging" width={50} height={50} className="h-12 w-auto" />
          </Link>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-gray-900 leading-none">SP Packaging</span>
            <span className="text-sm text-gray-500 font-medium mt-1">Premium Packaging Solutions</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="tel:+918734891263" className="flex items-center gap-2 group">
            <div className="bg-brand-red/10 p-2 rounded-full group-hover:bg-brand-red/20 transition-colors">
              <Phone className="w-4 h-4 text-[var(--color-brand-red)]" />
            </div>
            <span className="font-semibold text-gray-700 hover:text-[var(--color-brand-red)] transition-colors">+91 87348 91263</span>
          </a>
          <a href="mailto:info@sppackaging.in" className="flex items-center gap-2 group">
            <div className="bg-brand-red/10 p-2 rounded-full group-hover:bg-brand-red/20 transition-colors">
              <Mail className="w-4 h-4 text-[var(--color-brand-red)]" />
            </div>
            <span className="font-semibold text-gray-700 hover:text-[var(--color-brand-red)] transition-colors">info@sppackaging.in</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? "bg-[#1a1921] shadow-lg py-3" : "bg-[#22202a] py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <Link href="/" className="md:hidden flex items-center gap-3">
              <Image src="/assets/logo.png" alt="SP Packaging" width={40} height={40} className="h-10 w-auto bg-white rounded-md p-1" />
              <span className="font-heading font-bold text-white text-lg">SP Packaging</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 w-full justify-between">
              <div className="flex gap-1">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative px-4 py-2 font-medium text-sm tracking-wide transition-colors group ${
                        isActive ? "text-[var(--color-brand-red)]" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-brand-red)] transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="#contact"
                className="bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-dark)] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-[#22202a] border-t border-gray-800"
            >
              <div className="flex flex-col px-4 py-4 gap-2">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive ? "bg-white/10 text-[var(--color-brand-red)]" : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 bg-[var(--color-brand-red)] text-white text-center px-6 py-3 rounded-xl font-semibold w-full"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
