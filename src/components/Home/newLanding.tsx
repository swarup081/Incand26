"use client";

import React from "react";
import { motion } from "framer-motion";

// Placeholder data for the cards
const figures = [
  { id: 1, src: "/newLanding/fig1.svg", color: "bg-purple-700", shape: "rounded" },
  { id: 2, src: "/newLanding/fig2.svg", color: "bg-red-700", shape: "scalloped" },
  { id: 3, src: "/newLanding/fig3.svg", color: "bg-yellow-500", shape: "scalloped-alt" },
  { id: 4, src: "/newLanding/fig4.svg", color: "bg-red-800", shape: "rounded" },
];

// Card Component
const Card = ({
  src,
  color,
  shape,
}: {
  src: string;
  color: string;
  shape: string;
}) => {
  // Shape logic using clip-path or border-radius
  // 'rounded' is standard rounded-3xl
  // 'scalloped' will use a specific clip-path to mimic the ticket/stamp look

  // Custom clip-paths
  // Ticket/Stamp shape approximation
  const scallopedClip =
    "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%, 20% 0)"; // Simplified placeholder, ideally use mask-image for true scallop

  // Using simple border radius mapping for now as "pixel perfect" scallop needs SVG mask
  // or a complex radial-gradient mask.
  // User said "make the structure eg- purple background is rounded so make it rounded"

  const shapeClass =
    shape === "rounded"
      ? "rounded-[2rem]"
      : shape === "scalloped"
      ? "rounded-xl" // Fallback if no clip-path
      : "rounded-[2.5rem]";

  return (
    <div className={`relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 mx-4 my-4`}>
        {/* Background Shape */}
      <div
        className={`absolute inset-0 ${color} ${shapeClass} shadow-lg`}
        style={
            shape === "scalloped"
            ? {
                clipPath: "polygon(0% 10%, 5% 10%, 5% 0%, 15% 0%, 15% 10%, 25% 10%, 25% 0%, 35% 0%, 35% 10%, 45% 10%, 45% 0%, 55% 0%, 55% 10%, 65% 10%, 65% 0%, 75% 0%, 75% 10%, 85% 10%, 85% 0%, 95% 0%, 95% 10%, 100% 10%, 100% 90%, 95% 90%, 95% 100%, 85% 100%, 85% 90%, 75% 90%, 75% 100%, 65% 100%, 65% 90%, 55% 90%, 55% 100%, 45% 100%, 45% 90%, 35% 90%, 35% 100%, 25% 100%, 25% 90%, 15% 90%, 15% 100%, 5% 100%, 5% 90%, 0% 90%)"
              }
            : shape === "scalloped-alt"
            ? { borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" } // Organic blob/wavy shape
            : {}
        }
      ></div>

      {/* Figure Image */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden rounded-[inherit]">
         <img
          src={src}
          alt="Figure"
          className="w-full h-full object-cover object-bottom"
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
        className="flex flex-col items-center"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed
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
        className="flex"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
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
      <div className="hidden md:flex flex-row w-full h-full">
        {/* Left Column Marquee (Upward) */}
        <div className="w-1/4 h-full border-r border-neutral-200/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F0] via-transparent to-[#FDF8F0] z-10 pointer-events-none" />
          <VerticalMarquee direction="up">
            {figures.map((fig, i) => (
              <Card key={`l-${i}`} {...fig} />
            ))}
             {figures.map((fig, i) => (
              <Card key={`l2-${i}`} {...fig} />
            ))}
          </VerticalMarquee>
        </div>

        {/* Center Content */}
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
        <div className="w-1/4 h-full border-l border-neutral-200/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F0] via-transparent to-[#FDF8F0] z-10 pointer-events-none" />
          <VerticalMarquee direction="up">
            {/* Maybe reverse figures or offset for variety */}
            {[...figures].reverse().map((fig, i) => (
              <Card key={`r-${i}`} {...fig} />
            ))}
             {[...figures].reverse().map((fig, i) => (
              <Card key={`r2-${i}`} {...fig} />
            ))}
          </VerticalMarquee>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col w-full h-full justify-between py-10">

        {/* Top Marquee (Left to Right) */}
        <div className="w-full h-1/3 relative flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F0] via-transparent to-[#FDF8F0] z-10 pointer-events-none" />
            <HorizontalMarquee direction="right">
                {figures.map((fig, i) => (
                    <Card key={`m-t-${i}`} {...fig} />
                ))}
                 {figures.map((fig, i) => (
                    <Card key={`m-t2-${i}`} {...fig} />
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

        {/* Bottom Marquee (Right to Left) */}
        <div className="w-full h-1/3 relative flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F0] via-transparent to-[#FDF8F0] z-10 pointer-events-none" />
            <HorizontalMarquee direction="left">
                {[...figures].reverse().map((fig, i) => (
                    <Card key={`m-b-${i}`} {...fig} />
                ))}
                 {[...figures].reverse().map((fig, i) => (
                    <Card key={`m-b2-${i}`} {...fig} />
                ))}
            </HorizontalMarquee>
        </div>

         {/* Scroll Down Indicator (Optional based on screenshot) */}
         <div className="absolute bottom-2 left-0 right-0 text-center text-sm font-bold uppercase tracking-widest text-neutral-800">
            Scroll Down
         </div>
      </div>

    </div>
  );
}
