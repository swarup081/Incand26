"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_ITEMS = [
  { id: 0, content: "Item 1" },
  { id: 1, content: "Item 2" },
  { id: 2, content: "Item 3" },
  { id: 3, content: "Item 4" },
  { id: 4, content: "Item 5" },
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

  // Helper to get classes based on state and device
  const getItemClasses = (diff: number) => {
    // Determine logical position
    let pos = "hidden";
    if (diff === 0) pos = "center";
    else if (diff === 1) pos = "right"; // Next
    else if (diff === -1) pos = "left"; // Prev
    else if (diff > 1) pos = "hiddenRight";
    else if (diff < -1) pos = "hiddenLeft";

    const commonClasses = "absolute transition-all duration-700 ease-in-out";

    // LAPTOP
    if (isLap) {
      const baseClass = "white-board " + commonClasses;
      // Classes from user provided code:
      // Left: left-[9vw] -top-[1vw] z-10 w-[29vw]
      // Middle: left-[37vw] -top-[5vh] z-20 w-[35vw]
      // Right: -bottom-[72vh] left-[68vw] z-10 w-[29vw]

      switch (pos) {
        case "center":
          return `${baseClass} left-[37vw] -top-[5vh] z-20 w-[35vw] opacity-100`;
        case "right":
          return `${baseClass} -bottom-[72vh] left-[68vw] z-10 w-[29vw] opacity-100`;
        case "left":
          return `${baseClass} left-[9vw] -top-[1vw] z-10 w-[29vw] opacity-100`;
        case "hiddenRight":
          // Extrapolated entry point
          return `${baseClass} -bottom-[72vh] left-[100vw] z-0 w-[29vw] opacity-0`;
        case "hiddenLeft":
          // Extrapolated exit point
          return `${baseClass} -top-[1vw] left-[-20vw] z-0 w-[29vw] opacity-0`;
        default:
          return `${baseClass} opacity-0 pointer-events-none`;
      }
    }

    const baseClassMobile = "white-banner " + commonClasses;

    // IPAD
    if (isIpad) {
       // Top: left-[35vw] top-[0vh] w-[50vw]
       // Middle: left-[30vw] top-[15vh] w-[55vw]
       // Bottom: left-[37vw] top-[37vh] w-[48vw]
       switch (pos) {
        case "center": // Middle
          return `${baseClassMobile} left-[30vw] top-[15vh] w-[55vw] z-20 opacity-100`;
        case "right": // Bottom (Next)
          return `${baseClassMobile} left-[37vw] top-[37vh] w-[48vw] z-10 opacity-100`;
        case "left": // Top (Prev)
          return `${baseClassMobile} left-[35vw] top-[0vh] w-[50vw] z-10 opacity-100`;
        case "hiddenRight": // Hidden Bottom
          return `${baseClassMobile} left-[37vw] top-[100vh] w-[48vw] z-0 opacity-0`;
        case "hiddenLeft": // Hidden Top
          return `${baseClassMobile} left-[35vw] top-[-50vh] w-[50vw] z-0 opacity-0`;
        default:
          return `${baseClassMobile} opacity-0 pointer-events-none`;
      }
    }

    // PHONE
    if (isPhone) {
      // Top: left-[21vw] top-[0vh] w-[71vw]
      // Middle: left-[12vw] top-[15vh] w-[80vw]
      // Bottom: left-[24vw] top-[38vh] w-[68vw]
      switch (pos) {
        case "center": // Middle
          return `${baseClassMobile} left-[12vw] top-[15vh] w-[80vw] z-20 opacity-100`;
        case "right": // Bottom (Next)
          return `${baseClassMobile} left-[24vw] top-[38vh] w-[68vw] z-10 opacity-100`;
        case "left": // Top (Prev)
          return `${baseClassMobile} left-[21vw] top-[0vh] w-[71vw] z-10 opacity-100`;
        case "hiddenRight": // Hidden Bottom
          return `${baseClassMobile} left-[24vw] top-[100vh] w-[68vw] z-0 opacity-0`;
        case "hiddenLeft": // Hidden Top
          return `${baseClassMobile} left-[21vw] top-[-50vh] w-[71vw] z-0 opacity-0`;
        default:
          return `${baseClassMobile} opacity-0 pointer-events-none`;
      }
    }

    return "hidden";
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

          {/* ================= BOTTOM DECORATIONS ================= */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="pointer-events-none absolute inset-0 z-10">

              {/* ================= WHITE BOARDS (ANIMATED) ================= */}
              <div className="relative top-[100vh] left-[2vw] mt-[6vh] scale-[0.98]">
                <AnimatePresence>
                {GALLERY_ITEMS.map((item, index) => {
                  const diff = getPosition(index);
                  const className = getItemClasses(diff);

                  // Interactivity
                  const isInteractive = diff === 1 || diff === -1;

                  return (
                    <motion.div
                      layout
                      key={item.id}
                      className={`${className} ${
                        isInteractive ? "pointer-events-auto cursor-pointer" : ""
                      }`}
                      onClick={() => {
                        if (diff === 1) handleNext(); // Right -> Center
                        if (diff === -1) handlePrev(); // Left -> Center
                      }}
                    >
                      <img
                        // Placeholder comment: // /Gallery/whiteboard.svg
                        src="/Gallery/whiteboard.svg"
                        alt="White board"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  );
                })}
                </AnimatePresence>
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

      {/* ================= IPAD VIEW ================= */}
      {isIpad && (
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

          <div className="absolute -top-[2vh] left-0 z-10 w-[110vw] h-[12vh] overflow-hidden pointer-events-none">
            <div className="ribbon-flow-right h-full flex">
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
            </div>
          </div>

          <div className="absolute top-[0vh] left-[50vw] z-20 w-full max-w-[68vw]">
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
                const className = getItemClasses(diff);
                const isInteractive = diff === 1 || diff === -1;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    className={`${className} ${
                      isInteractive ? "pointer-events-auto cursor-pointer" : ""
                    }`}
                    onClick={() => {
                        if (diff === 1) handleNext();
                        if (diff === -1) handlePrev();
                    }}
                  >
                    <img
                        // Placeholder comment: // /Gallery/whiteboard.svg
                        src="/Gallery/whiteboard.svg"
                        className="w-full h-auto"
                        alt=""
                    />
                  </motion.div>
                );
             })}
          </div>

          <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none ipad-banner-layer">
            <div className="relative -top-[5vh] flex flex-col items-center gap-[4vh] mt-[6vh] ipad-banner-anim">
              <Image
                src="/Gallery/photobannermobile.svg"
                alt="Photo Banner"
                width={0}
                height={0}
                className="absolute -top-[60vh] w-[75vw] max-w-[75vw] h-auto z-10"
                priority
              />
              <Image
                src="/Gallery/gallerybannermobile.svg"
                alt="Gallery Banner"
                width={0}
                height={0}
                className="absolute -top-[28vh] -right-[40vw] w-[72vw] max-w-[75vw] h-auto z-0"
                priority
              />
            </div>
          </div>

          <div className="absolute top-[89vh] left-[2vw] w-[100vw] h-[12vh] overflow-hidden z-10 pointer-events-none">
            <div
              className="absolute inset-0 bg-repeat-x bg-bottom ribbon-flow-bottom"
              style={{
                backgroundImage: "url('/Gallery/ribbonbottom.svg')",
                backgroundSize: "auto 100%",
              }}
            />
            <div
              className="absolute inset-0 bg-repeat-x bg-bottom ribbon-flow-bottom"
              style={{
                backgroundImage: "url('/Gallery/ribbonbottom.svg')",
                backgroundSize: "auto 100%",
              }}
            />
          </div>

          <div className="absolute top-[62vh]  z-20 w-[40vw] max-w-[40vw]">
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

      {/* ================= PHONE VIEW ================= */}
      {isPhone && (
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

          <div className="absolute bottom-[92vh] left-0 z-10 w-[120vw] h-[10vh] overflow-hidden pointer-events-none">
            <div className="ribbon-flow-right h-full flex">
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
            </div>
          </div>

          <div className="absolute top-[0vh] left-[52vw] z-20 w-[70vw]">
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
                const className = getItemClasses(diff);
                const isInteractive = diff === 1 || diff === -1;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    className={`${className} ${
                      isInteractive ? "pointer-events-auto cursor-pointer" : ""
                    }`}
                    onClick={() => {
                        if (diff === 1) handleNext();
                        if (diff === -1) handlePrev();
                    }}
                  >
                     <img
                        // Placeholder comment: // /Gallery/whiteboard.svg
                        src="/Gallery/whiteboard.svg"
                        className="w-full h-auto"
                        alt=""
                    />
                  </motion.div>
                );
             })}
          </div>

          <div className="pointer-events-none relative z-[5] flex h-screen items-center justify-center phone-banner-layer">
            <div className="photo-gallery-group relative bottom-[40vh] left-[28vw] aspect-[3/2] w-[95vw] max-w-[1200px] phone-banner-anim">
              <div className="absolute inset-0 z-30">
                <Image
                  src="/Gallery/photobannermobile.svg"
                  alt="Photo Banner"
                  width={0}
                  height={0}
                  className="absolute top-[10%] right-[30%] w-[120%] h-auto"
                  priority
                />
              </div>
              <div className="absolute inset-0 z-20">
                <Image
                  src="/Gallery/gallerybannermobile.svg"
                  alt="Gallery Banner"
                  width={0}
                  height={0}
                  className="absolute top-[120%] right-[30%] w-[100%] h-auto gallery-settle"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="absolute top-[91vh] left-0 w-[110vw] h-[10vh] overflow-hidden z-10 pointer-events-none">
            <div
              className="absolute inset-0 bg-repeat-x bg-bottom ribbon-flow-bottom"
              style={{
                backgroundImage: "url('/Gallery/ribbonbottom.svg')",
                backgroundSize: "auto 100%",
              }}
            />
            <div
              className="absolute inset-0 bg-repeat-x bg-bottom ribbon-flow-bottom"
              style={{
                backgroundImage: "url('/Gallery/ribbonbottom.svg')",
                backgroundSize: "auto 100%",
              }}
            />
          </div>

          <div className="absolute top-[72vh] z-20 w-[45vw]">
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
