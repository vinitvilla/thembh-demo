"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const ingredientsY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={ref} className="relative min-h-[150vh] bg-background py-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="space-y-6">
          <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-tight">
            We don't sell batter. <br />
            <span className="italic text-foreground/60">We preserve breakfast traditions.</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-sans max-w-2xl mx-auto">
            No preservatives. No shortcuts. Just time-honored fermentation.
          </p>
        </motion.div>
      </div>

      <motion.div style={{ y: ingredientsY }} className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <Image src="/images/ingredients.png" alt="Raw Ingredients" fill className="object-cover" />
      </motion.div>
    </section>
  );
}
