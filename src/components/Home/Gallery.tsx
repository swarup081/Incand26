"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_ITEMS = [1, 2, 3, 4, 5];

export function Gallery() {
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const getPosition = (index: number) => {
    const total = GALLERY_ITEMS.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    if (diff === 2) return "hiddenRight";
    return "hidden";
  };

  // --- Variants Definition ---

  // Laptop: Horizontal Arc
  // Right (Low) -> Center (High) -> Left (High/Low)
  const laptopVariants = {
    center: {
      left: "37vw",
      top: "-5vh",
      width: "35vw",
      opacity: 1,
      zIndex: 20,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    left: {
      left: "9vw",
      top: "-1vw",
      width: "29vw",
      opacity: 1,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    right: {
      left: "68vw",
      top: "140vh", // Approx for bottom: -72vh
      width: "29vw",
      opacity: 1,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    hiddenRight: {
      left: "100vw",
      top: "140vh",
      width: "29vw",
      opacity: 0,
      zIndex: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    hidden: {
      left: "-20vw",
      top: "-1vw",
      width: "29vw",
      opacity: 0,
      zIndex: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    }
  };

  // iPad: Vertical Stack
  // Top (Left) -> Middle (Center) -> Bottom (Right)
  const ipadVariants = {
    center: { // Middle
      left: "30vw",
      top: "15vh",
      width: "55vw",
      opacity: 1,
      zIndex: 20,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    left: { // Top
      left: "35vw",
      top: "0vh",
      width: "50vw",
      opacity: 1,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    right: { // Bottom
      left: "37vw",
      top: "37vh",
      width: "48vw",
      opacity: 1,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    hiddenRight: { // Below Bottom
      left: "37vw",
      top: "100vh",
      width: "48vw",
      opacity: 0,
      zIndex: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    hidden: { // Above Top
      left: "35vw",
      top: "-50vh",
      width: "50vw",
      opacity: 0,
      zIndex: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    }
  };

  // Phone: Vertical Stack
  const phoneVariants = {
    center: { // Middle
      left: "12vw",
      top: "15vh",
      width: "80vw",
      opacity: 1,
      zIndex: 20,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    left: { // Top
      left: "21vw",
      top: "0vh",
      width: "71vw",
      opacity: 1,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    right: { // Bottom
      left: "24vw",
      top: "38vh",
      width: "68vw",
      opacity: 1,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    hiddenRight: {
      left: "24vw",
      top: "100vh",
      width: "68vw",
      opacity: 0,
      zIndex: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    hidden: {
      left: "21vw",
      top: "-50vh",
      width: "71vw",
      opacity: 0,
      zIndex: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" as const }
    }
  };

  const getVariants = () => {
    if (isLap) return laptopVariants;
    if (isIpad) return ipadVariants;
    return phoneVariants;
  };

  const currentVariants = getVariants();

  if (!mounted) return null;

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
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
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

          {/* ================= BOTTOM DECORATIONS (GALLERY) ================= */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="relative top-[100vh] left-[2vw] mt-[6vh] scale-[0.98]">

                {/* ANIMATED CAROUSEL BOARDS */}
                <AnimatePresence initial={false}>
                  {GALLERY_ITEMS.map((item, index) => {
                    const pos = getPosition(index);
                    const isRight = pos === "right";

                    return (
                      <motion.div
                        key={item}
                        variants={currentVariants}
                        initial="hiddenRight"
                        animate={pos}
                        className={`white-board absolute ${isRight ? "cursor-pointer pointer-events-auto" : ""}`}
                        onClick={isRight ? handleNext : undefined}
                      >
                         <img
                          src="/Gallery/whiteboard.svg"
                          alt="White board"
                          className="w-full h-auto"
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

              </div>


              {/* ================= END RING ================= */}
              <img
                src="/Gallery/circularbottomring.svg"
                alt="End Ring"
                className="relative top-[35vh] z-50 h-auto w-[23vw]"
              />

              {/* ================= BOTTOM RIBBON ================= */}
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
          <div className="absolute inset-0 z-0">
            <Image
              src="/Gallery/backgroundmobile.svg"
              alt="Gallery Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Ribbon */}
          <div className={`absolute left-0 z-10 w-[110vw] overflow-hidden pointer-events-none ${isPhone ? "bottom-[92vh] h-[10vh]" : "-top-[2vh] h-[12vh]"}`}>
             <div className="ribbon-flow-right h-full flex">
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
                <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
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
             <AnimatePresence initial={false}>
               {GALLERY_ITEMS.map((item, index) => {
                 const pos = getPosition(index);
                 // In vertical stack: Top(Left), Middle(Center), Bottom(Right)
                 // Right is Bottom. Center is Middle. Left is Top.
                 // Clickable: "Right" (Bottom)
                 const isClickable = pos === "right";

                 return (
                   <motion.div
                      key={item}
                      variants={currentVariants}
                      initial="hiddenRight"
                      animate={pos}
                      className={`white-banner absolute ${isClickable ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}`}
                      onClick={isClickable ? handleNext : undefined}
                   >
                     <img
                       src="/Gallery/whiteboard.svg"
                       className="w-full h-auto"
                       alt=""
                     />
                   </motion.div>
                 );
               })}
             </AnimatePresence>
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
