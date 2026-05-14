import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f2029] text-gray-300 pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <span className="bg-[var(--color-brand-red)] w-8 h-1 rounded-full inline-block"></span>
              SP Packaging
            </h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading manufacturer and supplier of PP/HDPE woven fabric rolls, bags, and premium packaging solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-red)] hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-red)] hover:text-white transition-all">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <span className="bg-[var(--color-brand-red)] w-8 h-1 rounded-full inline-block"></span>
              Information
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Why Us?', 'Infrastructure', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 text-[var(--color-brand-red)] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <span className="bg-[var(--color-brand-red)] w-8 h-1 rounded-full inline-block"></span>
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'PP/HDPE Woven Fabric Rolls',
                'PP/HDPE Woven Bags',
                'Multicolor Woven Bags',
                'Multicolor Printed Rolls',
                'Tarpaulin',
                'PP/PE Filler'
              ].map((item) => (
                <li key={item}>
                  <Link href="#products" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 text-[var(--color-brand-red)] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <span className="bg-[var(--color-brand-red)] w-8 h-1 rounded-full inline-block"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 mt-1" />
                <span>Survey No. 170/1 (182), Panchal Udyog Nagar, Bhimpore, Nani Daman, Daman - 396 210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[var(--color-brand-red)] shrink-0" />
                <span>+91 87348 91263 <br/> +91 9374632009</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[var(--color-brand-red)] shrink-0" />
                <a href="mailto:info@sppackaging.in" className="hover:text-white transition-colors">info@sppackaging.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-[#16171d]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} SP Packaging. All Rights Reserved.</p>
            <p>Designed by SnineFutur</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
