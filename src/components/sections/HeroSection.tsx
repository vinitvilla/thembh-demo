"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "ORIGINAL",
    subtitle: "DOSA BATTER",
    price: "$10.50",
    tagline: "CLASSIC RICE & LENTIL",
    image: "/images/tubs_original_1782620341860.png",
  },
  {
    id: 2,
    title: "MILLET",
    subtitle: "DOSA BATTER",
    price: "$12.50",
    tagline: "MULTI-GRAIN BLEND",
    image: "/images/tubs_millet_1782620350328.png",
  },
  {
    id: 3,
    title: "RAGI",
    subtitle: "DOSA BATTER",
    price: "$11.50",
    tagline: "RICH IN IRON",
    image: "/images/tubs_ragi_1782620359502.png",
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const uiX1 = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const uiY1 = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  
  const uiX2 = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const uiY2 = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  useEffect(() => {
    let animationFrameId: number;
    let isMouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      isMouseActive = true;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleTouchMove = (e: TouchEvent) => {
      isMouseActive = true;
      if (!containerRef.current || e.touches.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.touches[0].clientX - rect.left) / rect.width - 0.5;
      const y = (e.touches[0].clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      // Only set active if significant tilt is detected to avoid locking on devices sitting flat
      if (Math.abs(e.gamma) > 2 || Math.abs(e.beta - 45) > 2) {
        isMouseActive = true;
      }
      
      const x = Math.max(-45, Math.min(45, e.gamma)) / 90;
      const y = Math.max(-45, Math.min(45, e.beta - 45)) / 90;
      mouseX.set(x);
      mouseY.set(y);
    };

    const animateDrift = (time: number) => {
      if (!isMouseActive) {
        // Slow sine wave drift to simulate mouse movement on idle/mobile devices
        const x = Math.sin(time / 2000) * 0.15;
        const y = Math.cos(time / 3000) * 0.15;
        mouseX.set(x);
        mouseY.set(y);
      }
      animationFrameId = requestAnimationFrame(animateDrift);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    
    animationFrameId = requestAnimationFrame(animateDrift);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);

  const activeItem = CAROUSEL_ITEMS[currentSlide];

  // Variants for animations
  const imageVariants = {
    initial: { opacity: 0, x: -150, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
    exit: { opacity: 0, x: -150, scale: 0.9, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const uiVariants = {
    initial: { opacity: 0, x: 150 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
    exit: { opacity: 0, x: 150, transition: { duration: 0.5, ease: "easeOut" as const } }
  };
  
  const textVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -50, scale: 1.05, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]"
    >
      {/* Background radial gradient for dramatic lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a2517_0%,_#0a0a0a_70%)] opacity-80" />

      {/* Oversized Background Outline Typography */}
      <motion.div 
        style={{ y: bgTextY, opacity }}
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0"
      >
        <AnimatePresence mode="wait">
          <motion.h1 
            key={activeItem.id}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-[14vw] font-serif font-black leading-[0.85] whitespace-nowrap text-transparent text-center"
            style={{
              WebkitTextStroke: "2px rgba(184, 115, 51, 0.25)", // Copper outline
              textShadow: "0 0 50px rgba(184, 115, 51, 0.15)",
            }}
          >
            {activeItem.title}<br />{activeItem.subtitle}
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      {/* Central Foreground Image */}
      <motion.div 
        style={{ y: imageY, opacity }}
        className="relative z-10 w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image 
              src={activeItem.image} 
              alt={`${activeItem.title} ${activeItem.subtitle}`} 
              fill
              className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Floating UI Overlays */}
        <motion.div 
          style={{ x: uiX1, y: uiY1 }}
          className="absolute top-[20%] left-[5%] md:left-[10%] z-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              variants={uiVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col hover:bg-white/20 transition-colors cursor-pointer group"
            >
              <span className="text-xs text-[#f59e0b] uppercase tracking-widest font-bold mb-2">{activeItem.tagline}</span>
              <span className="text-4xl font-serif text-white font-bold">{activeItem.title}</span>
              <span className="text-xl font-light text-white/70 mt-1">{activeItem.price}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          style={{ x: uiX2, y: uiY2 }}
          className="absolute bottom-[20%] right-[10%] md:right-[15%] z-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              variants={uiVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative group"
            >
              {/* Warm Glow behind button */}
              <div className="absolute inset-0 bg-[#d97706] rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-[#d97706] to-[#b45309] text-white hover:from-[#f59e0b] hover:to-[#d97706] rounded-full px-8 py-6 text-sm font-bold tracking-widest shadow-2xl flex items-center gap-3 transition-all transform hover:scale-105 border border-white/10"
              >
                <Plus className="w-5 h-5" />
                ADD TO CART
              </Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 inset-x-0 z-30 flex items-center justify-center gap-6">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {CAROUSEL_ITEMS.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#d97706] w-6' : 'bg-white/30'}`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
}
