"use client";

import React from "react";
import { motion } from "framer-motion";

// Figures Data (7 cards as requested)
const figures = [
  { id: 1, src: "/newLanding/fig1.svg", color: "bg-[#FF6B6B]" }, // Red
  { id: 2, src: "/newLanding/fig2.svg", color: "bg-[#4ECDC4]" }, // Teal
  { id: 3, src: "/newLanding/fig3.svg", color: "bg-[#FFE66D]" }, // Yellow
  { id: 4, src: "/newLanding/fig4.svg", color: "bg-[#1A535C]" }, // Dark Teal
  { id: 5, src: "/newLanding/fig5.svg", color: "bg-[#FF9F1C]" }, // Orange
  { id: 6, src: "/newLanding/fig6.svg", color: "bg-[#2EC4B6]" }, // Cyan
  { id: 7, src: "/newLanding/fig7.svg", color: "bg-[#E71D36]" }, // Red-Pink
];

// Card Component
const Card = ({
  src,
  color,
}: {
  src: string;
  color: string;
}) => {
  // Requirement: Oval/Pill shape, Shadow Left and Left-Top
  // shadow-[-8px_-8px_0px_rgba(0,0,0,0.2)] creates a hard shadow to the top-left
  return (
    <div className={`relative w-32 h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 flex-shrink-0 mx-4 my-4`}>
        {/* Background Shape */}
      <div
        className={`absolute inset-0 ${color} rounded-full shadow-[-8px_-8px_0px_rgba(0,0,0,0.25)] border-2 border-black/10`}
      ></div>

      {/* Figure Image */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full p-2">
         <img
          src={src}
          alt="Figure"
          className="w-full h-full object-contain"
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
        className="flex flex-col items-center gap-4" // added gap
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
        className="flex gap-4" // added gap
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

      {/* DESKTOP LAYOUT (Only visible on Large screens, Tablet uses Mobile view) */}
      <div className="hidden lg:flex flex-row w-full h-full justify-between">

        {/* Left Column Marquee (Upward) */}
        <div className="w-[20%] h-full relative ml-8">
           {/* Gradient Masks */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDF8F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDF8F0] to-transparent z-10 pointer-events-none" />

          <VerticalMarquee direction="up">
            {figures.map((fig, i) => (
              <Card key={`l-${i}`} {...fig} />
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
        <div className="w-[20%] h-full relative mr-8">
            {/* Gradient Masks */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDF8F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDF8F0] to-transparent z-10 pointer-events-none" />

          <VerticalMarquee direction="up">
            {/* Using same figures for symmetry as requested, or could reverse */}
            {figures.map((fig, i) => (
              <Card key={`r-${i}`} {...fig} />
            ))}
          </VerticalMarquee>
        </div>
      </div>

      {/* MOBILE & TABLET LAYOUT (Visible on md and smaller, up to lg) */}
      <div className="lg:hidden flex flex-col w-full h-full justify-between py-20">

        {/* Top Marquee (Right direction for variety?) User said upward for infinite, but horizontal usually goes left/right */}
        <div className="w-full h-1/3 relative flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FDF8F0] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FDF8F0] to-transparent z-10 pointer-events-none" />

            <HorizontalMarquee direction="right">
                {figures.map((fig, i) => (
                    <Card key={`m-t-${i}`} {...fig} />
                ))}
            </HorizontalMarquee>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center z-20">
            {/*
                PLACEHOLDER FOR TEXT AND BIRD
                Import 'incand2026' and 'bird' from ui lib here.
            */}
             <div className="border-2 border-dashed border-gray-400 p-4 rounded-lg text-center opacity-50">
                <p className="font-bold">Center Content</p>
            </div>
        </div>

        {/* Bottom Marquee (Left direction) */}
        <div className="w-full h-1/3 relative flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FDF8F0] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FDF8F0] to-transparent z-10 pointer-events-none" />

            <HorizontalMarquee direction="left">
                {[...figures].reverse().map((fig, i) => (
                    <Card key={`m-b-${i}`} {...fig} />
                ))}
            </HorizontalMarquee>
        </div>

      </div>

    </div>
  );
}
