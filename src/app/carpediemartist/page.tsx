"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  "/CARPEDIEM/bg1.png",
  "/CARPEDIEM/bg2.png",
  "/CARPEDIEM/bg3.png",
];

export default function CarpeDiemArtistPage() {
  const [bgIndex, setBgIndex] = useState(0);

  const nextBg = () => {
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const prevBg = () => {
    setBgIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black font-hitchcut text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // "Instant switch but smooth" -> quick fade
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={backgrounds[bgIndex] ?? "/CARPEDIEM/bg1.png"}
              alt={`Background ${bgIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay to darken bg slightly if needed for text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between py-8 md:justify-center">

        {/* Header - Mobile Only (Optional based on UI reference, but sticking to requested scope first) */}
        {/* Leaving out top icons as per instruction "no requorewd to add those" */}

        {/* DJ Card Section */}
        <div className="flex w-full max-w-4xl flex-col items-center justify-center">

          {/* DJ Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
             {/* Desktop: DJ Composite */}
             <div className="hidden md:block relative h-[500px] w-[500px]">
                {/* DJ Background Glow/Smoke */}
                <Image
                  src="/CARPEDIEM/dj_bg.png"
                  alt=""
                  fill
                  className="object-contain scale-110"
                />
                {/* DJ Foreground Person */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute inset-0"
                >
                   <Image
                    src="/CARPEDIEM/dj_fg.png"
                    alt="DJ LØUN"
                    fill
                    className="object-contain"
                  />
                </motion.div>
             </div>

             {/* Mobile: Placeholder */}
             <div className="block md:hidden h-[300px] w-[300px] bg-gray-800/50 border-2 border-white/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                <p className="text-white/50 text-center px-4">DJ IMAGE PLACEHOLDER</p>
                {/* Optional: using the mobile bg as a fallback inside? No, user said plain placeholder. */}
             </div>

             {/* Text Overlay - Positioned over the bottom of the image area or just below */}
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-[-60px] md:mt-[-100px] z-20 flex flex-col items-center"
             >
                <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white drop-shadow-lg text-outline-thick">
                  DJ LØUN
                </h1>
             </motion.div>

          </motion.div>

          {/* Banner & Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-col items-center space-y-4"
          >
            {/* Yellow Banner */}
            <div className="bg-[#D48C2E] px-8 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-widest uppercase">
                CARPE DIEM DAY 2
              </h2>
            </div>

            {/* "DJ NIGHT" Text */}
            <h3 className="text-5xl md:text-7xl font-bold text-[#3E2723] drop-shadow-md mt-4">
              DJ NIGHT
            </h3>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="fixed bottom-10 left-0 right-0 flex w-full items-center justify-between px-8 md:px-20 max-w-6xl mx-auto">
            <button
              onClick={prevBg}
              className="bg-[#D48C2E] px-6 py-2 text-xl md:text-2xl font-bold text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none transition-all hover:bg-[#b57522]"
            >
              PREVIOUS
            </button>

            {/* Play Button Center (Optional purely visual from UI, skipping functionality as requested) */}
            <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
                <div className="ml-1 border-y-[10px] border-y-transparent border-l-[20px] border-l-white/80"></div>
            </div>

            <button
              onClick={nextBg}
              className="bg-[#D48C2E] px-6 py-2 text-xl md:text-2xl font-bold text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none transition-all hover:bg-[#b57522]"
            >
              NEXT
            </button>
        </div>

      </div>
    </main>
  );
}
