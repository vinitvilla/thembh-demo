"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

export function Topbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.header
      style={{ backgroundColor: `rgba(10, 10, 10, ${bgOpacity.get()})`, backdropFilter: blur }}
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="text-white hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-white/80">
            <a href="#" className="hover:text-white transition-colors">Shop</a>
            <a href="#" className="hover:text-white transition-colors">Our Story</a>
            <a href="#" className="hover:text-white transition-colors">Catering</a>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <span className="font-serif text-2xl text-white font-bold tracking-widest">
            TMBH.
          </span>
        </div>

        <div className="flex items-center gap-6 text-white">
          <button className="hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-primary transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#d97706] text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
