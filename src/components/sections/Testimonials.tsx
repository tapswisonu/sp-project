"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Patel",
      location: "Vapi, Gujarat",
      text: "SP Packaging provides excellent quality and timely delivery. We've been working with them for over 3 years and are always satisfied with their service and product durability.",
      image: "/assets/client2.jpg",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      location: "Jaipur, Rajasthan",
      text: "They truly care about customer needs. The quality of PP woven bags is top-notch and the custom printing options helped elevate our brand visibility in the market.",
      image: "/assets/client2.jpg",
      rating: 5,
    },
    {
      name: "Amit Verma",
      location: "Mumbai, Maharashtra",
      text: "A highly reliable packaging partner for our business. Their ability to handle bulk orders without compromising on quality is why I highly recommend SP Packaging!",
      image: "/assets/client3.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#1f2029] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-0.5 w-8 bg-[var(--color-brand-red)]" />
            <span className="text-[var(--color-brand-red)] font-semibold uppercase tracking-wider text-sm">Client Success</span>
            <div className="h-0.5 w-8 bg-[var(--color-brand-red)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2a2b36] border border-white/5 rounded-2xl p-8 relative group hover:bg-[#323442] transition-colors shadow-xl"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-[var(--color-brand-red)]/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-brand-red)] text-[var(--color-brand-red)]" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 text-lg">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-[var(--color-brand-red)] text-sm font-medium">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
