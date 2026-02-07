"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
interface Artist {
  id: number;
  name: string;
  image: string;
  bgImage: string;
}

// --- Data ---
const ARTISTS: Artist[] = [
  {
    id: 1,
    name: "DJ TASHA",
    image: "/CARPEDIEM/djcovertasha.png",
    bgImage: "/CARPEDIEM/1.png",
  },
  {
    id: 2,
    name: "ARTIST 2",
    image: "/CARPEDIEM/djcovertasha.png", // Placeholder as requested
    bgImage: "/CARPEDIEM/2.png",
  },
  {
    id: 3,
    name: "ARTIST 3",
    image: "/CARPEDIEM/djcovertasha.png", // Placeholder as requested
    bgImage: "/CARPEDIEM/3.png",
  },
];

// --- Components ---

// 1. Background Slider
const BackgroundSlider = ({ currentBg }: { currentBg: string }) => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={currentBg}
            alt="Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// 2. Audio Visualizer (Simulated)
const AudioVisualizer = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="absolute bottom-4 left-1/2 flex h-12 -translate-x-1/2 items-end gap-1">
      <AnimatePresence>
        {isActive &&
          Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 4, opacity: 0 }}
              animate={{
                height: [4, Math.random() * 40 + 10, 4],
                opacity: 1,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.05,
              }}
              className="w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

// 3. Main Page Component
export default function CarpeDiemArtistPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisualizerActive, setIsVisualizerActive] = useState(false);

  // Trigger visualizer on index change
  useEffect(() => {
    setIsVisualizerActive(true);
    const timer = setTimeout(() => {
      setIsVisualizerActive(false);
    }, 3000); // Visualizer runs for 3 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ARTISTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ARTISTS.length) % ARTISTS.length);
  };

  const currentArtist = ARTISTS[currentIndex];

  if (!currentArtist) return null;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-hitchcut text-white">
      {/* Background */}
      <BackgroundSlider currentBg={currentArtist.bgImage} />

      {/* Content Container */}
      <div className="z-10 flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-10 md:gap-10">

        {/* Top Header */}
        <header className="flex flex-col items-center gap-4">
            {/* Icons / Decoration (Placeholder for 'masks' in design) */}
            <div className="flex gap-4 opacity-80">
                <div className="h-8 w-8 rounded-full bg-amber-600/50 border border-amber-400"></div>
                <div className="h-8 w-8 rounded-full bg-amber-600/50 border border-amber-400"></div>
                <div className="h-8 w-8 rounded-full bg-amber-600/50 border border-amber-400"></div>
                <div className="h-8 w-8 rounded-full bg-amber-600/50 border border-amber-400"></div>
                <div className="h-8 w-8 rounded-full bg-amber-600/50 border border-amber-400"></div>
            </div>

            <h1 className="text-4xl font-bold tracking-widest text-[#3d2b1f] md:text-6xl">
            INCAND <span className="text-orange-500">26</span>
            </h1>
        </header>

        {/* DJ Image Card */}
        <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-xl border-4 border-amber-700/60 shadow-2xl md:max-w-2xl">
           <AnimatePresence mode="wait">
            <motion.div
              key={currentArtist.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-full"
            >
              <Image
                src={currentArtist.image}
                alt={currentArtist.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Visualizer Overlay */}
              <div className="absolute bottom-16 left-0 right-0 flex justify-center">
                  <AudioVisualizer isActive={isVisualizerActive} />
              </div>

               {/* Artist Name Overlay */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-0 right-0 text-center text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wider text-outline-thick"
              >
                {currentArtist.name}
              </motion.h2>

            </motion.div>
           </AnimatePresence>
        </div>

        {/* Event Details */}
        <div className="flex flex-col items-center gap-2 text-center">
             <div className="bg-amber-600/90 px-6 py-2 text-lg font-bold text-black shadow-lg rounded-sm transform -skew-x-12 border-2 border-amber-800">
                CARPE DIEM DAY 2
             </div>
             <h3 className="mt-4 text-5xl md:text-7xl font-extrabold tracking-widest text-[#3d2b1f] drop-shadow-sm">
                DJ NIGHT
             </h3>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex w-full max-w-lg items-center justify-between gap-4 px-4">
             {/* Previous Button */}
             <button
                onClick={handlePrev}
                className="group relative flex items-center justify-center bg-orange-700/80 px-4 py-2 text-sm font-bold font-hitchcut text-white transition-all hover:bg-orange-600 active:scale-95 border-2 border-orange-900 shadow-lg rounded-sm md:px-6 md:py-3 md:text-lg"
              >
                <ChevronLeft className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5 transition-transform group-hover:-translate-x-1" />
                PREV
                <span className="hidden md:inline">IOUS</span>
             </button>

             {/* Play Button Visual (Static as requested) */}
             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] md:h-16 md:w-16">
                <div className="ml-1 h-0 w-0 border-b-[8px] border-l-[14px] border-t-[8px] border-b-transparent border-l-white/80 border-t-transparent opacity-80 md:border-b-[10px] md:border-l-[18px] md:border-t-[10px]" />
             </div>

             {/* Next Button */}
             <button
                onClick={handleNext}
                className="group relative flex items-center justify-center bg-orange-700/80 px-4 py-2 text-sm font-bold font-hitchcut text-white transition-all hover:bg-orange-600 active:scale-95 border-2 border-orange-900 shadow-lg rounded-sm md:px-6 md:py-3 md:text-lg"
              >
                NEXT
                <ChevronRight className="ml-1 h-4 w-4 md:ml-2 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </button>
        </div>

      </div>
    </main>
  );
}
