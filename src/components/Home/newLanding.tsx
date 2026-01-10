"use client";

import React from "react";
import { motion } from "framer-motion";

// Figures Data
// Using the colors provided but we will overlay a texture code on them.
const figures = [
  { id: 1, src: "/newLanding/fig1.svg", color: "bg-[#FF6B6B]" },
  { id: 2, src: "/newLanding/fig2.svg", color: "bg-[#4ECDC4]" },
  { id: 3, src: "/newLanding/fig3.svg", color: "bg-[#FFE66D]" },
  { id: 4, src: "/newLanding/fig4.svg", color: "bg-[#1A535C]" },
  { id: 5, src: "/newLanding/fig5.svg", color: "bg-[#FF9F1C]" },
  { id: 6, src: "/newLanding/fig6.svg", color: "bg-[#2EC4B6]" },
  { id: 7, src: "/newLanding/fig7.svg", color: "bg-[#E71D36]" },
];

// Defined shapes for variety (Organic, Leaf, Pill, etc.)
const shapeClasses = [
  "rounded-[50px]", // Standard Pill
  "rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]", // Organic Blob 1
  "rounded-[60px_20px_60px_20px]", // Leaf Shape
  "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]", // Organic Blob 2
  "rounded-[50%_50%_20%_20%]", // Arch
  "rounded-[20%_20%_50%_50%]", // Cup
  "rounded-[40px]", // Rounded Rect
];

// Card Component
const Card = ({
  src,
  color,
  index
}: {
  src: string;
  color: string;
  index: number;
}) => {
  // Cycle through shapes based on index
  const shapeClass = shapeClasses[index % shapeClasses.length];

  return (
    <div className={`relative w-32 h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 flex-shrink-0 mx-4 my-4`}>
        {/* Background Shape with Code-based Texture and Inset Shadow */}
      <div
        className={`absolute inset-0 ${color} ${shapeClass} overflow-hidden`}
        style={{
             // Inset shadow for depth + subtle texture pattern
             boxShadow: "inset 10px 10px 20px rgba(0,0,0,0.15), inset -10px -10px 20px rgba(255,255,255,0.2)",
             backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 10px)"
        }}
      >
      </div>

      {/* Figure Image Container */}
      {/* Matches the shape of the background */}
      <div className={`absolute inset-0 flex items-center justify-center p-4 ${shapeClass}`}>
         <img
          src={src}
          alt="Figure"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

// Infinite Marquee Components
const VerticalMarquee = ({
  direction = "up",
  children,
}: {
  direction?: "up" | "down";
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col overflow-hidden h-full relative w-full items-center">
      <motion.div
        className="flex flex-col items-center gap-6"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </div>
  );
};

const HorizontalMarquee = ({
  direction = "left",
  children,
}: {
  direction?: "left" | "right";
  children: React.ReactNode;
}) => {
  return (
    <div className="flex overflow-hidden w-full relative">
      <motion.div
        className="flex gap-6"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function NewLanding() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FDF8F0] font-sans">

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex flex-row w-full h-full justify-between">

        {/* Left Column Marquee (Upward) */}
        <div className="w-[25%] h-full relative ml-4">
           {/* No Gradient Masks as requested */}
          <VerticalMarquee direction="up">
            {figures.map((fig, i) => (
              <Card key={`l-${i}`} {...fig} index={i} />
            ))}
          </VerticalMarquee>
        </div>

        {/* Center Content Placeholder */}
        <div className="flex-1 h-full flex flex-col items-center justify-center relative z-20">
            {/*
                PLACEHOLDER FOR TEXT AND BIRD
                Import 'incand2026' and 'bird' from ui lib here.
            */}
            <div className="border-2 border-dashed border-gray-400 p-8 rounded-lg text-center opacity-50">
                <p className="font-bold text-xl">Center Content Placeholder</p>
                <p className="text-sm">(Incandescence 2026 & Bird)</p>
            </div>
        </div>

        {/* Right Column Marquee (Upward) */}
        <div className="w-[25%] h-full relative mr-4">
          <VerticalMarquee direction="up">
            {/* Offset index for visual variety on the right side */}
            {figures.map((fig, i) => (
              <Card key={`r-${i}`} {...fig} index={i + 3} />
            ))}
          </VerticalMarquee>
        </div>
      </div>

      {/* MOBILE & TABLET LAYOUT */}
      <div className="lg:hidden flex flex-col w-full h-full justify-between py-10">

        {/* Top Marquee (Right direction) */}
        <div className="w-full h-1/3 relative flex items-center">
            <HorizontalMarquee direction="right">
                {figures.map((fig, i) => (
                    <Card key={`m-t-${i}`} {...fig} index={i} />
                ))}
            </HorizontalMarquee>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center z-20">
             <div className="border-2 border-dashed border-gray-400 p-4 rounded-lg text-center opacity-50">
                <p className="font-bold">Center Content</p>
            </div>
        </div>

        {/* Bottom Marquee (Left direction) */}
        <div className="w-full h-1/3 relative flex items-center">
            <HorizontalMarquee direction="left">
                {[...figures].reverse().map((fig, i) => (
                    <Card key={`m-b-${i}`} {...fig} index={i + 2} />
                ))}
            </HorizontalMarquee>
        </div>

      </div>

    </div>
  );
}
