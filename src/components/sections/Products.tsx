"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "PP/HDPE Woven Fabric Rolls",
      description: "Durable laminated and unlaminated rolls suitable for packaging and industrial applications.",
      image: "/assets/product-3.jpg",
    },
    {
      title: "HDPE Fabric & Bags",
      description: "High-strength woven sacks ideal for storing and transporting grains, fertilizers, and other goods.",
      image: "/assets/product-1.jpg",
    },
    {
      title: "BOPP Bags",
      description: "Moisture-resistant inner liner bags that provide superior protection and premium printing.",
      image: "/assets/product-2.jpg",
    },
    {
      title: "Laminated Fabrics",
      description: "Water-resistant laminated woven fabrics suitable for industrial and agricultural use.",
      image: "/assets/product-1.jpg",
    },
    {
      title: "Customized Packaging",
      description: "Tailor-made packaging materials designed to meet your brand's specific needs.",
      image: "/assets/product-2.jpg",
    },
    {
      title: "Industrial Box Bags",
      description: "Heavy-duty sacks for construction, cement, and fertilizer industries with extra durability.",
      image: "/assets/product-3.jpg",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-0.5 w-8 bg-[var(--color-brand-red)]" />
            <span className="text-[var(--color-brand-red)] font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
            <div className="h-0.5 w-8 bg-[var(--color-brand-red)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6"
          >
            Premium Industrial Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We specialize in manufacturing high-quality PP/HDPE woven fabric rolls, bags, and customized packaging materials.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-[var(--color-brand-red)] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[var(--color-brand-red)] transition-colors mt-auto"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
