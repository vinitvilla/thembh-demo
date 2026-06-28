"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export function LiveDosaSection() {
  return (
    <section className="relative py-32 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image src={getImagePath("/images/dosa.png")} alt="Dosa making" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-foreground" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-sm text-background/60 mb-6 block"
        >
          Experiential Catering
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif mb-8"
        >
          Live Dosa Stations
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto mb-16 font-sans font-light"
        >
          Bring the authentic aroma of sizzling dosas to your events. Weddings, corporate gatherings, or private parties.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-16">
          {["Birthday Parties", "Corporate Events", "Family Gatherings", "Wedding Functions"].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 border border-background/20 rounded-2xl backdrop-blur-sm bg-background/5 hover:bg-background/10 transition-colors"
            >
              <h3 className="text-lg font-serif">{event}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 px-10 py-8 text-lg font-medium shadow-[0_0_40px_rgba(251,248,243,0.3)] hover:shadow-[0_0_60px_rgba(251,248,243,0.5)] transition-shadow">
            Book an Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
