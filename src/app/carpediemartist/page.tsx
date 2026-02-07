"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BACKGROUNDS = [
  "/CARPEDIEM/1.png",
  "/CARPEDIEM/2.png",
  "/CARPEDIEM/3.png",
];

const ARTISTS = [
  {
    name: "DJ TASHA",
    image: "/CARPEDIEM/djcovertasha.png",
  },
   // Placeholder for logic if more artists are added later
  {
      name: "DJ LOUN",
      image: "/CARPEDIEM/djcovertasha.png",
  },
    {
      name: "DJ ALEX",
      image: "/CARPEDIEM/djcovertasha.png",
  }
];


export default function CarpediemArtistPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVisualizer, setShowVisualizer] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    triggerVisualizer();
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + BACKGROUNDS.length) % BACKGROUNDS.length);
     triggerVisualizer();
  };

  const triggerVisualizer = () => {
      // Wait for image animation to settle (approx 600ms) before showing visualizer
      setTimeout(() => {
        setShowVisualizer(true);
        // Hide after a few seconds
        setTimeout(() => setShowVisualizer(false), 4000);
      }, 600);
  };

  // Initial load visualizer
  useEffect(() => {
      triggerVisualizer();
  }, []);

  const currentArtist = ARTISTS[currentIndex % ARTISTS.length];

  if (!currentArtist || !BACKGROUNDS[currentIndex]) return null;

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black font-hitchcut">
      {/* Background Loop */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
             <Image
              src={BACKGROUNDS[currentIndex]!}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

       {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4 md:p-8">

            {/* Desktop Layout: Main Container */}
             <div className="hidden lg:flex w-full max-w-7xl h-[80vh] items-center justify-between relative px-4">
                {/* Left Side: INCAND 26 Text (Vertical) */}
                <div className="flex flex-col justify-center h-full absolute left-0 top-0 bottom-0 pointer-events-none z-10 pl-2">
                     <h1 className="text-6xl tracking-[0.2em] text-[#E69D16] font-bold drop-shadow-lg" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                        INCAND 26
                     </h1>
                </div>

                {/* Center: DJ Card */}
                <div className="relative w-[65%] h-[75%] mx-auto bg-black/40 border-4 border-[#E69D16] rounded-xl overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-sm">

                    {/* Visualizer (Song Bar) */}
                    <AnimatePresence>
                        {showVisualizer && (
                             <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-[20%] left-0 right-0 flex justify-center items-end gap-1 h-32 z-0 pointer-events-none"
                             >
                                {[...Array(25)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 bg-white/60 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        animate={{
                                            height: ["10%", "70%", "20%", "90%", "30%"],
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: i * 0.03,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                             </motion.div>
                        )}
                    </AnimatePresence>

                    {/* DJ Image */}
                    <AnimatePresence mode="wait">
                         <motion.div
                            key={currentArtist.name}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative w-full h-full z-10"
                         >
                            <Image
                                src={currentArtist.image}
                                alt={currentArtist.name}
                                fill
                                className="object-contain object-bottom drop-shadow-2xl"
                                priority
                            />

                            {/* Text Overlay - Slide Up Animation */}
                             <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
                                className="absolute bottom-12 left-0 right-0 text-center pointer-events-none"
                             >
                                <h2 className="text-6xl text-white font-bold tracking-wider drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                                    {currentArtist.name}
                                </h2>
                             </motion.div>
                         </motion.div>
                    </AnimatePresence>
                </div>

                  {/* Right Side: DJ NIGHT Text (Vertical) */}
                <div className="flex flex-col justify-center h-full absolute right-0 top-0 bottom-0 pointer-events-none z-10 pr-2">
                     <h1 className="text-6xl tracking-[0.2em] text-[#3e2d26] font-bold drop-shadow-lg" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                        DJ NIGHT
                     </h1>
                </div>

                {/* Navigation Buttons */}
                 <button
                    onClick={handlePrevious}
                    className="absolute bottom-6 left-[20%] bg-[#E69D16] text-black px-10 py-3 rounded-sm font-bold hover:bg-[#ffb732] transition-colors shadow-lg active:scale-95"
                    style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
                 >
                    PREVIOUS
                </button>
                 <button
                    onClick={handleNext}
                    className="absolute bottom-6 right-[20%] bg-[#E69D16] text-black px-14 py-3 rounded-sm font-bold hover:bg-[#ffb732] transition-colors shadow-lg active:scale-95"
                     style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
                 >
                    NEXT
                </button>

                 {/* Center Bottom Label */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#E69D16] px-12 py-3 rounded-sm text-black font-bold border-2 border-black shadow-lg">
                     CARPE DIEM DAY {currentIndex + 1}
                 </div>

             </div>


            {/* Mobile/Tablet Layout (Anything smaller than lg) */}
            <div className="flex lg:hidden flex-col w-full h-full justify-between py-6 px-4 pb-12">

                 {/* INCAND 26 (Top Title) */}
                  <h1 className="text-5xl text-center text-[#3e2d26] font-extrabold mb-2 mt-4 tracking-wide drop-shadow-sm">INCAND 26</h1>


                {/* DJ Card Mobile */}
                 <div className="relative w-full flex-grow max-h-[55vh] bg-black/30 border-2 border-[#E69D16] rounded-lg overflow-hidden mb-4 shadow-lg">
                      {/* Visualizer (Mobile) */}
                       <AnimatePresence>
                        {showVisualizer && (
                             <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-[20%] left-0 right-0 flex justify-center items-end gap-1 h-20 z-0 pointer-events-none"
                             >
                                {[...Array(18)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1.5 bg-white/70 rounded-t-sm shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                                        animate={{
                                            height: ["10%", "60%", "20%", "80%", "10%"],
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: i * 0.04,
                                             ease: "easeInOut"
                                        }}
                                    />
                                ))}
                             </motion.div>
                        )}
                    </AnimatePresence>

                     <AnimatePresence mode="wait">
                         <motion.div
                            key={currentArtist.name}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full z-10"
                         >
                            <Image
                                src={currentArtist.image}
                                alt={currentArtist.name}
                                fill
                                className="object-cover object-top drop-shadow-xl"
                                priority
                            />

                             <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                                className="absolute bottom-6 left-0 right-0 text-center pointer-events-none"
                             >
                                <h2 className="text-4xl text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                                    {currentArtist.name}
                                </h2>
                             </motion.div>
                         </motion.div>
                    </AnimatePresence>
                 </div>

                  {/* Center Label Mobile */}
                  <div className="bg-[#E69D16] w-full max-w-[280px] py-3 mx-auto rounded-sm text-black font-bold border-2 border-black mb-2 text-center shadow-md text-lg">
                     CARPE DIEM DAY {currentIndex + 1}
                 </div>

                  <h1 className="text-5xl text-center text-[#3e2d26] font-extrabold mb-6 tracking-wide drop-shadow-sm">DJ NIGHT</h1>


                 {/* Navigation Mobile */}
                 <div className="flex justify-between items-center w-full">
                     <button
                        onClick={handlePrevious}
                        className="bg-[#E69D16] text-black px-6 py-2 rounded-sm font-bold text-sm"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
                     >
                        PREVIOUS
                    </button>

                     {/* Play Button Placeholder */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#3e2d26] flex items-center justify-center">
                         <div className="w-0 h-0 border-l-[10px] border-l-[#3e2d26] border-y-[6px] border-y-transparent ml-1"></div>
                    </div>

                     <button
                        onClick={handleNext}
                        className="bg-[#E69D16] text-black px-6 py-2 rounded-sm font-bold text-sm"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
                     >
                        NEXT
                    </button>
                 </div>
            </div>
      </div>
    </div>
  );
}
