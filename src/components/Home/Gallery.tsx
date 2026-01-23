"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_ITEMS = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
];

export function Gallery() {
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    );
  };

  const getPosition = (index: number) => {
    const len = GALLERY_ITEMS.length;
    let diff = (index - currentIndex + len) % len;
    if (diff > len / 2) diff -= len;
    return diff;
  };

  useLayoutEffect(() => {
    setMounted(true);

    const setDevice = () => {
      const w = window.innerWidth;
      setIsPhone(w >= 320 && w <= 758);
      setIsIpad(w >= 759 && w <= 1024);
      setIsLap(w >= 1025);
    };

    setDevice();
    window.addEventListener("resize", setDevice);
    return () => window.removeEventListener("resize", setDevice);
  }, []);

  if (!mounted) return null;

  // Variants for Arc Animation
  const getVariants = (isLap: boolean, isIpad: boolean, isPhone: boolean) => {
    if (isLap) {
      // Laptop: Horizontal Rainbow Arc
      // Center: Highest (-5vh)
      // Left/Right: Lower (10vh) to create the arch
      return {
        center: { left: "37vw", top: "-5vh", width: "35vw", opacity: 1, zIndex: 20, scale: 1 },
        right: { left: "68vw", top: "10vh", width: "29vw", opacity: 1, zIndex: 10, scale: 0.9 },
        left: { left: "9vw", top: "10vh", width: "29vw", opacity: 1, zIndex: 10, scale: 0.9 },
        hiddenRight: { left: "100vw", top: "50vh", width: "29vw", opacity: 0, zIndex: 0, scale: 0.8 },
        hiddenLeft: { left: "-20vw", top: "50vh", width: "29vw", opacity: 0, zIndex: 0, scale: 0.8 },
      };
    }

    // iPad/Phone: Vertical Arc (Bowed out to the right or left? Or just standard vertical stack?)
    // User asked for "circular arc". A vertical arc usually bows out.
    // Let's create a subtle curve: Top/Bottom are further Left/Right than Center.
    // Let's assume standard vertical stack for now but with smooth motion,
    // adapting the original coordinates but smoothing them.

    if (isIpad) {
       // Middle: left 30vw
       // Top/Bottom: left 37vw (This is already slightly arced/staggered!)
       return {
         center: { left: "30vw", top: "15vh", width: "55vw", opacity: 1, zIndex: 20 },
         right: { left: "37vw", top: "37vh", width: "48vw", opacity: 1, zIndex: 10 }, // Bottom
         left: { left: "35vw", top: "0vh", width: "50vw", opacity: 1, zIndex: 10 }, // Top
         hiddenRight: { left: "37vw", top: "100vh", width: "48vw", opacity: 0, zIndex: 0 },
         hiddenLeft: { left: "35vw", top: "-50vh", width: "50vw", opacity: 0, zIndex: 0 },
       };
    }

    // Phone
    return {
         center: { left: "12vw", top: "15vh", width: "80vw", opacity: 1, zIndex: 20 },
         right: { left: "24vw", top: "38vh", width: "68vw", opacity: 1, zIndex: 10 }, // Bottom
         left: { left: "21vw", top: "0vh", width: "71vw", opacity: 1, zIndex: 10 }, // Top
         hiddenRight: { left: "24vw", top: "100vh", width: "68vw", opacity: 0, zIndex: 0 },
         hiddenLeft: { left: "21vw", top: "-50vh", width: "71vw", opacity: 0, zIndex: 0 },
    };
  };

  const variants = getVariants(isLap, isIpad, isPhone);

  return (
    <>
      {/* ================= LAPTOP VIEW ================= */}
      {isLap && (
        <div className="relative min-h-screen w-full overflow-hidden bg-amber-50">
          {/* Background */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/Gallery/backgroundgallery.svg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ================= TOP DECORATIONS ================= */}
          <div className="pointer-events-none absolute inset-0 z-50">
            <img
              src="/Gallery/circulartopring.svg"
              alt="Top Ring"
              className="absolute top-[0vh] left-[8vw] w-[30vw]"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 z-40">
            <div className="absolute top-[0vh] left-[30vw] h-[20vh] w-[calc(100vw-30vw)] translate-y-[1px] overflow-hidden">
              <div className="ribbon-flow-right">
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
              </div>
            </div>
          </div>

          {/* ================= LEFT BOARD (SEPARATE LAYER) ================= */}
          <div className="pointer-events-none absolute inset-0 z-60 flex items-center px-8">
            <img
              src="/Gallery/board1.svg"
              alt="Board 1"
              className="board-two-phase relative -left-[12vw] h-[100vh] w-[80vw]"
            />
          </div>

          {/* ================= CENTER BANNERS (BELOW RIBBON) ================= */}
          <div className="pointer-events-none relative z-30 flex h-screen items-center justify-center">
            <div className="banner-group banner-two-phase-vertical relative bottom-[38vh] left-[20vw] aspect-[3/2] w-[55vw] max-w-[900px]">
              <div className="absolute inset-0 z-20">
                <Image
                  src="/Gallery/board2part1.svg"
                  alt="Stick"
                  width={600}
                  height={200}
                  className="absolute top-[33%] left-[3%] h-auto w-[90%]"
                  priority
                />
              </div>

              <div className="banner-z-jump absolute inset-0 z-30">
                <Image
                  src="/Gallery/board2part2.svg"
                  alt="Banner"
                  width={600}
                  height={200}
                  className="absolute bottom-[0%] left-[20%] h-auto w-[60%]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM DECORATIONS ================= */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="pointer-events-none absolute inset-0 z-10">

              {/* ================= WHITE BOARDS (ANIMATED) ================= */}
              <div className="relative top-[100vh] left-[2vw] mt-[6vh] scale-[0.98]">
                {GALLERY_ITEMS.map((item, index) => {
                  const diff = getPosition(index);
                  let state = "hiddenRight";
                  if (diff === 0) state = "center";
                  else if (diff === 1) state = "right";
                  else if (diff === -1) state = "left";
                  else if (diff > 1) state = "hiddenRight";
                  else if (diff < -1) state = "hiddenLeft";

                  // Interactivity
                  const isInteractive = diff === 1 || diff === -1;
                  const clickHandler = diff === 1 ? handleNext : (diff === -1 ? handlePrev : undefined);

                  return (
                    <motion.div
                      key={item.id}
                      initial={false}
                      animate={state}
                      variants={variants}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      className={`white-board absolute flex items-center justify-center transition-opacity ${
                        isInteractive ? "cursor-pointer pointer-events-auto" : ""
                      }`}
                      onClick={clickHandler}
                    >
                      <img
                        // /Gallery/whiteboard.svg
                        src="/Gallery/whiteboard.svg"
                        alt="White board"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* ================= END RING (TOPMOST) ================= */}
              <img
                src="/Gallery/circularbottomring.svg"
                alt="End Ring"
                className="relative top-[35vh] z-50 h-auto w-[23vw]"
              />

              {/* ================= BOTTOM RIBBON (COVERS WHITE BOARDS) ================= */}
              <div className="relative -bottom-[8vh] left-[8vw] z-40 h-[20vh] w-full overflow-hidden">
                <div
                  className="ribbon-flow-bottom absolute inset-0 bg-bottom bg-repeat-x"
                  style={{
                    backgroundImage: "url('/Gallery/ribbonbottom.svg')",
                    backgroundSize: "auto 100%",
                  }}
                />
                <div
                  className="ribbon-flow-bottom absolute inset-0 bg-bottom bg-repeat-x"
                  style={{
                    backgroundImage: "url('/Gallery/ribbonbottom.svg')",
                    backgroundSize: "auto 100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= IPAD / PHONE VIEW ================= */}
      {(isIpad || isPhone) && (
        <div className="relative h-screen w-full overflow-hidden bg-amber-50">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Gallery/backgroundmobile.svg"
              alt="Gallery Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -top-[2vh] left-0 z-10 w-[110vw] h-[12vh] overflow-hidden pointer-events-none">
             {/* Ribbon Logic (Shared) */}
             <div className="ribbon-flow-right h-full flex">
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
             </div>
          </div>

          {/* Top Ring */}
          <div className={`absolute top-[0vh] z-20 w-full ${isIpad ? "left-[50vw] max-w-[68vw]" : "left-[52vw] w-[70vw]"}`}>
            <Image
              src="/Gallery/topringmobile.svg"
              alt="Top Ring"
              width={0}
              height={0}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* ================= WHITE BANNERS (ANIMATED) ================= */}
          <div className="absolute inset-0 z-[1]">
             {GALLERY_ITEMS.map((item, index) => {
                const diff = getPosition(index);
                let state = "hiddenRight"; // Map vertical logic
                if (diff === 0) state = "center";
                else if (diff === 1) state = "right"; // Bottom
                else if (diff === -1) state = "left"; // Top
                else if (diff > 1) state = "hiddenRight"; // Hidden Bottom
                else if (diff < -1) state = "hiddenLeft"; // Hidden Top

                const isInteractive = diff === 1 || diff === -1;
                const clickHandler = diff === 1 ? handleNext : (diff === -1 ? handlePrev : undefined);

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={state}
                    variants={variants}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className={`white-banner absolute ${
                      isInteractive ? "pointer-events-auto cursor-pointer" : ""
                    }`}
                    onClick={clickHandler}
                  >
                     <img
                        src="/Gallery/whiteboard.svg"
                        className="w-full h-auto"
                        alt=""
                    />
                  </motion.div>
                );
             })}
          </div>

          {/* Center Photo/Gallery Group */}
           <div className={`pointer-events-none absolute inset-0 z-[5] flex items-center justify-center ${isIpad ? "ipad-banner-layer" : "phone-banner-layer"}`}>
              {isIpad ? (
                  <div className="relative -top-[5vh] flex flex-col items-center gap-[4vh] mt-[6vh] ipad-banner-anim">
                    <Image src="/Gallery/photobannermobile.svg" alt="Photo" width={0} height={0} className="absolute -top-[60vh] w-[75vw] max-w-[75vw] h-auto z-10" />
                    <Image src="/Gallery/gallerybannermobile.svg" alt="Gallery" width={0} height={0} className="absolute -top-[28vh] -right-[40vw] w-[72vw] max-w-[75vw] h-auto z-0" />
                  </div>
              ) : (
                  <div className="photo-gallery-group relative bottom-[40vh] left-[28vw] aspect-[3/2] w-[95vw] max-w-[1200px] phone-banner-anim">
                     <div className="absolute inset-0 z-30">
                        <Image src="/Gallery/photobannermobile.svg" alt="Photo" width={0} height={0} className="absolute top-[10%] right-[30%] w-[120%] h-auto" />
                     </div>
                     <div className="absolute inset-0 z-20">
                        <Image src="/Gallery/gallerybannermobile.svg" alt="Gallery" width={0} height={0} className="absolute top-[120%] right-[30%] w-[100%] h-auto gallery-settle" />
                     </div>
                  </div>
              )}
           </div>

          {/* Bottom Ribbon */}
          <div className={`absolute left-0 w-[110vw] h-[12vh] overflow-hidden z-10 pointer-events-none ${isIpad ? "top-[89vh] left-[2vw]" : "top-[91vh]"}`}>
            <div className="absolute inset-0 bg-repeat-x bg-bottom ribbon-flow-bottom" style={{ backgroundImage: "url('/Gallery/ribbonbottom.svg')", backgroundSize: "auto 100%" }} />
            <div className="absolute inset-0 bg-repeat-x bg-bottom ribbon-flow-bottom" style={{ backgroundImage: "url('/Gallery/ribbonbottom.svg')", backgroundSize: "auto 100%" }} />
          </div>

          {/* Bottom Ring */}
          <div className={`absolute z-20 ${isIpad ? "top-[62vh] w-[40vw] max-w-[40vw]" : "top-[72vh] w-[45vw]"}`}>
            <Image
              src="/Gallery/circularbottomring.svg"
              alt="Bottom Ring"
              width={0}
              height={0}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
