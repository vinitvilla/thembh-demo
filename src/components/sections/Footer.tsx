"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-serif mb-4">The Madras Batter House</h3>
          <p className="text-background/60 max-w-sm font-sans font-light">
            Authentic South Indian mornings, made effortless. Premium, preservative-free batters crafted daily in Scarborough.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Visit Us</h4>
          <address className="not-italic text-background/60 font-sans font-light space-y-2">
            1260 Kennedy Road<br />
            Unit 1<br />
            Scarborough, ON M1P 2L4<br />
            Canada
          </address>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Contact</h4>
          <div className="text-background/60 font-sans font-light space-y-2 flex flex-col">
            <a href="tel:4377769132" className="hover:text-background transition-colors">(437) 776-9132</a>
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">Google Reviews</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-background/10 text-background/40 text-sm flex flex-col md:flex-row justify-between">
        <p>&copy; {new Date().getFullYear()} The Madras Batter House. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-background">Privacy Policy</a>
          <a href="#" className="hover:text-background">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
