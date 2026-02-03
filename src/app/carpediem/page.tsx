"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function CarpeDiemPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) return;

      const progress = scrollLeft / maxScroll;

      if (progress < 0.33) setActiveDot(0);
      else if (progress < 0.66) setActiveDot(1);
      else setActiveDot(2);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#e6e0d4] text-black">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/CARPEDIEM/bg.webp"
          alt="Background"
          fill
          className="object-cover opacity-90"
          quality={100}
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col font-hitchcut">

         {/* Mobile 'Home' Label */}
         <div className="absolute top-8 left-8 z-50 md:hidden pointer-events-none">
            <span className="text-black text-xl font-bold tracking-widest">Home</span>
         </div>

         {/* HERO SECTION */}
         <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4">

            {/* Main Text */}
            <div className="flex flex-col items-center text-center z-10 space-y-4">
                <h1 className="text-7xl md:text-8xl lg:text-[10rem] uppercase tracking-wider leading-[0.85] flex flex-col items-center">
                    <span className="text-black">That&apos;s</span>
                    <span className="text-black">the</span>
                    <span className="text-[#8B2323]">Night.</span>
                </h1>

                <p className="mt-8 text-sm md:text-lg lg:text-xl max-w-lg text-black font-sans font-semibold tracking-wide leading-relaxed">
                    The stage is set. The crowd is ready. The night is yours.
                </p>
            </div>

            {/* Hover Image */}
            <motion.div
                className="mt-12 relative w-64 h-64 md:w-96 md:h-96"
                initial={{ x: 0, scale: 1 }}
                whileHover={{ x: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image
                    src="/CARPEDIEM/fig.webp"
                    alt="Hero Figure"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Scroll Button */}
            <div
                onClick={scrollToEvents}
                className="mt-auto mb-8 group cursor-pointer transition-transform hover:scale-110"
            >
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                     </svg>
                </div>
            </div>

         </section>

         {/* SECTION 2: Heart & Drum */}
         <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center py-20 gap-10 md:gap-20 px-4">
             {/* Heart Image */}
             <motion.div
                className="relative w-64 h-64 md:w-[28rem] md:h-[28rem]"
                initial={{ x: 0, scale: 1 }}
                whileHover={{ x: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image
                    src="/CARPEDIEM/heart.webp"
                    alt="Heart"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Drum Image */}
            <motion.div
                className="relative w-64 h-64 md:w-[28rem] md:h-[28rem]"
                initial={{ x: 0, scale: 1 }}
                whileHover={{ x: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image
                    src="/CARPEDIEM/drum.webp"
                    alt="Drum"
                    fill
                    className="object-contain"
                />
            </motion.div>
         </section>

         {/* EVENTS SECTION */}
         <section id="events-section" className="min-h-screen w-full flex flex-col py-20">

            {/* Desktop / Large Tablet View (Horizontal) */}
            <div className="hidden lg:flex flex-col w-full h-full items-center">
                <h2 className="text-[#8B2323] text-8xl xl:text-9xl mb-12 text-center uppercase tracking-widest">EVENTS</h2>

                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing hide-scrollbar"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {/* Container for the long horizontal image */}
                  <div className="h-[60vh] min-h-[500px] w-max">
                     {/* Using img tag to allow natural aspect ratio scaling based on height */}
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img
                        src="/CARPEDIEM/123image.webp"
                        alt="Events Timeline"
                        className="h-full w-auto max-w-none object-contain"
                        draggable={false}
                     />
                  </div>
                </div>

                {/* 3 Dots Indicator */}
                <div className="flex justify-center space-x-6 mt-12">
                  {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full border-2 border-black transition-all duration-300 ${activeDot === i ? 'bg-black scale-125' : 'bg-transparent'}`}
                      />
                  ))}
                </div>
            </div>

            {/* Mobile / Small Tablet View (Vertical) */}
            <div className="lg:hidden flex flex-col w-full items-center px-4">
                <h2 className="text-[#8B2323] text-6xl mb-10 text-center uppercase tracking-widest">EVENTS</h2>

                <div className="w-full max-w-md relative">
                   <Image
                      src="/CARPEDIEM/123imagemobile.webp"
                      alt="Events Timeline Vertical"
                      width={800}
                      height={2000}
                      className="w-full h-auto"
                   />
                </div>
            </div>

         </section>

         {/* SECTION 4: Last (Tabla) */}
         <section className="w-full min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 pb-32">
            <motion.div
                className="relative w-72 h-72 md:w-[32rem] md:h-[32rem]"
                initial={{ x: 0, scale: 1 }}
                whileHover={{ x: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image
                    src="/CARPEDIEM/2tabla.webp"
                    alt="Tabla"
                    fill
                    className="object-contain"
                />
            </motion.div>
         </section>

      </div>
    </main>
  );
}
