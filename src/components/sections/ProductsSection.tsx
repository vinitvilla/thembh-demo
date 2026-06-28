"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

const products = [
  {
    name: "Idli & Dosa Batter",
    desc: "Classic, perfectly fermented.",
    image: getImagePath("/images/idli_dosa_batter.png"),
  },
  {
    name: "Millet Batter",
    desc: "Nutrient-dense and earthy.",
    image: getImagePath("/images/millet_batter.png"),
  },
  {
    name: "Appam Batter",
    desc: "Sweet, soft centers with crispy edges.",
    image: getImagePath("/images/appam_batter.png"),
  },
  {
    name: "Fresh Chutneys",
    desc: "Ground daily with fresh coconut.",
    image: getImagePath("/images/fresh_chutneys.png"),
  },
];

export function ProductsSection() {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Our Craft</h2>
          <p className="text-xl text-foreground/70">Freshness delivered to your door.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[60vh]">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ flex: 2 }}
              className="group relative flex-1 bg-background rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-500 ease-out border border-border shadow-sm hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* Dark overlay that lightens on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Text content */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{product.name}</h3>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
