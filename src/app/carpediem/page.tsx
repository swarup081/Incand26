"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import EventTimeline from "~/components/Carpediem/EventTimeline";

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
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) return;

      const progress = scrollLeft / maxScroll;

      if (progress < 0.33) setActiveDot(0);
      else if (progress < 0.66) setActiveDot(1);
      else setActiveDot(2);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#e6e0d4] font-sans text-black">
      {/* Fixed Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src="/CARPEDIEM/bg.webp"
          alt="Background"
          fill
          className="object-cover opacity-90"
          quality={100}
          priority
        />
      </div>

      {/* Nav (Back / Home) - Absolute Top Left */}
      <div className="absolute top-8 left-8 z-50 flex gap-8 text-lg font-medium text-black">
        <Link href="/">Back</Link>
        <Link href="/">Home</Link>
      </div>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-10">
        {/* CARPE DIEM Title - Layer 0 (Behind Figure) */}
        {/* Using a very large text size to match the 'Massive' look.
            The visual shows 'CARP' and 'DIEM' behind the figure. */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-[60%] items-center justify-center text-center select-none">
          <span className="font-hitchcut text-[12vw] leading-none font-black tracking-widest text-[#1a1a1a] opacity-90">
            CARPE DIEM
          </span>
        </div>

        {/* Central Figure - Layer 2 (In Front) */}
        <motion.div
          className="relative z-20 h-[80vw] max-h-[80vh] w-[80vw] md:h-[50vw] md:w-[35vw]"
          initial={{ x: 0, scale: 1 }}
          whileHover={{ x: 15, scale: 1.05 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        >
          <Image
            src="/CARPEDIEM/fig.webp"
            alt="Hero Figure"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Left Content (Desktop) */}
        <div className="absolute top-1/2 left-[8%] z-30 hidden max-w-xs -translate-y-1/2 flex-col space-y-8 lg:flex">
          <p className="font-sans text-xl leading-relaxed font-medium">
            Sway with the lights and let
            <br />
            rhythm lead the way.
          </p>
          {/* Scroll Button */}
          <button
            onClick={scrollToEvents}
            className="w-fit rounded-xl border border-black px-8 py-3 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Scroll down
          </button>
        </div>

        {/* Right Content (Desktop) */}
        <div className="absolute top-1/2 right-[8%] z-30 hidden max-w-xs -translate-y-1/2 flex-col text-right lg:flex">
          <h3 className="font-serif text-2xl leading-tight font-bold">
            CARPE DIEM is the
            <br />
            most dazzling chapter
            <br />
            of incandescence.
          </h3>
        </div>

        {/* Mobile Content (Below Image) */}
        <div className="z-30 mt-8 flex flex-col items-center space-y-8 text-center lg:hidden">
          <p className="font-sans text-lg font-medium">
            Sway with the lights and let
            <br />
            rhythm lead the way.
          </p>
          <button
            onClick={scrollToEvents}
            className="rounded-xl border border-black px-8 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            Scroll down
          </button>
          <h3 className="max-w-[80%] font-serif text-xl leading-tight font-bold">
            CARPE DIEM is the most dazzling chapter of incandescence.
          </h3>
        </div>
      </section>

      {/* ---------------- WELCOME SECTION ---------------- */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 md:px-12">
        {/* WELCOME Title */}
        <div className="mb-12 w-full text-center md:mb-20">
          <h2 className="font-sans text-4xl font-light tracking-[0.4em] uppercase md:text-6xl lg:text-7xl">
            WELCOME
          </h2>
        </div>

        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Text */}
          <div className="flex flex-col space-y-6 lg:pl-10">
            <div className="flex flex-col">
              <span className="font-hitchcut text-xl font-bold tracking-wide md:text-2xl">
                One Unforgettable
              </span>
              <span className="font-hitchcut mt-2 text-[4rem] leading-[0.85] font-black text-[#8B2323] uppercase md:text-[6rem] lg:text-[8rem]">
                NIGHT
              </span>
            </div>

            <p className="mt-4 max-w-md font-sans text-lg leading-relaxed font-medium md:text-xl">
              A night of rhythm, motion, and
              <br />
              unstoppable energy.
            </p>

            <p className="text-lg font-semibold tracking-wide text-[#8B2323] md:text-xl">
              Enjoy it or loose it
            </p>
          </div>

          {/* Right Column: Images (Heart & Drum) */}
          <div className="relative flex h-[400px] w-full items-center justify-center md:h-[500px] lg:h-[600px]">
            {/* Heart - Left/Back */}
            <motion.div
              className="absolute bottom-[10%] left-[5%] z-10 h-48 w-48 rotate-[-12deg] md:left-[10%] md:h-72 md:w-72 lg:h-80 lg:w-80"
              initial={{ x: 0, scale: 1 }}
              whileHover={{ x: 15, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/CARPEDIEM/heart.webp"
                alt="Heart"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Drum - Right/Front */}
            <motion.div
              className="absolute top-[10%] right-[5%] z-0 h-56 w-56 rotate-[12deg] md:right-[10%] md:h-80 md:w-80 lg:h-96 lg:w-96"
              initial={{ x: 0, scale: 1 }}
              whileHover={{ x: 15, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/CARPEDIEM/drum.webp"
                alt="Drum"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- EVENTS SECTION ---------------- */}
      <section
        id="events-section"
        className="flex min-h-screen w-full flex-col bg-transparent py-20"
      >
        {/* Desktop / Large Tablet View (Horizontal) */}
        <div className="hidden h-full w-full flex-col items-center lg:flex">
          <h2 className="font-hitchcut mb-12 text-center text-7xl tracking-widest text-[#8B2323] uppercase xl:text-9xl">
            EVENTS
          </h2>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="hide-scrollbar w-full cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <EventTimeline />
          </div>

          {/* 3 Dots Indicator */}
          <div className="mt-12 flex justify-center space-x-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-4 w-4 rounded-full border-2 border-black transition-all duration-300 ${
                  activeDot === i ? "scale-125 bg-[#8B2323]" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile / Small Tablet View (Vertical) */}
        <div className="flex w-full flex-col items-center px-4 lg:hidden">
          <h2 className="font-hitchcut mb-10 text-center text-5xl tracking-widest text-[#8B2323] uppercase md:text-6xl">
            EVENTS
          </h2>
          <div className="relative w-full max-w-md">
            <Image
              src="/CARPEDIEM/123imagemobile.webp"
              alt="Events Timeline Vertical"
              width={800}
              height={2000}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ---------------- LAST SECTION (TABLA) ---------------- */}
      <section className="flex min-h-[50vh] w-full flex-col items-center justify-center px-4 py-20 pb-32">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-hitchcut text-3xl font-bold tracking-wide md:text-5xl">
            That&apos;s the
          </span>
          <span className="font-hitchcut mt-2 text-[5rem] leading-[0.85] font-black text-[#8B2323] uppercase md:text-[8rem]">
            NIGHT
          </span>
        </div>

        <motion.div
          className="relative h-72 w-72 md:h-[32rem] md:w-[32rem]"
          initial={{ x: 0, scale: 1 }}
          whileHover={{ x: 15, scale: 1.05 }}
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
    </main>
  );
}
