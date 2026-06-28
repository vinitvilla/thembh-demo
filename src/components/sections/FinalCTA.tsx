"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-10" />
        {/* We use the spread image for the ending */}
        <div 
          className="absolute inset-0 bg-[url('/images/spread.png')] bg-cover bg-center bg-no-repeat scale-105"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-serif text-white mb-8 drop-shadow-2xl"
        >
          Bring Home the Taste of Madras.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button className="bg-white text-foreground px-12 py-6 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-2xl">
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
