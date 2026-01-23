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

  // --- VARIANTS (Fully Integrated CSS Transforms & Widths) ---

  const getVariants = (isLap: boolean, isIpad: boolean, isPhone: boolean) => {
    if (isLap) {
      // Laptop: Match HTML coordinates + CSS transforms exactly.
      // Use 'layout' prop on motion.div to handle top vs bottom interpolation.

      const transitionArc = {
          duration: 0.8,
          ease: "easeInOut" as const,
          left: { duration: 0.8, ease: "linear" as const },
          top: { duration: 0.8, ease: "circOut" as const } // Arc Effect
      };

      const transitionDrop = {
          duration: 0.8,
          left: { duration: 0.8, ease: "linear" as const },
          top: { duration: 0.8, ease: "circIn" as const }
      };

      return {
        center: { // Middle
          left: "37vw", top: "-5vh", bottom: "auto",
          width: "35vw",
          y: "-78vh",
          zIndex: 20, opacity: 1, scale: 1, rotate: 0,
          transition: transitionArc,
        },
        left: { // Left
          left: "9vw", top: "-1vw", bottom: "auto",
          width: "29vw",
          y: "-78vh",
          zIndex: 10, opacity: 1, scale: 1, rotate: -12,
          transition: transitionDrop,
        },
        right: { // Right
          // Using exact CSS 'bottom' position.
          left: "68vw", top: "auto", bottom: "-72vh",
          width: "29vw",
          y: "-78vh",
          zIndex: 10, opacity: 1, scale: 1, rotate: 20,
          transition: { duration: 0.8, ease: "easeInOut" as const },
        },
        hiddenRight: { // Entering from right
          left: "100vw", top: "auto", bottom: "-72vh",
          width: "29vw",
          y: "-78vh",
          zIndex: 0, opacity: 0, scale: 1, rotate: 45,
          transition: { duration: 0.8, ease: "easeInOut" as const },
        },
        hiddenLeft: { // Exiting to left
          left: "-20vw", top: "-1vw", bottom: "auto",
          width: "29vw",
          y: "-78vh",
          zIndex: 0, opacity: 0, scale: 1, rotate: -45,
          transition: { duration: 0.8, ease: "easeInOut" as const },
        }
      };
    }

    if (isIpad) {
      return {
        left: { // Top
           left: "46vw", top: "-6vh", x: "15vw", y: "0px",
           width: "42vw", rotate: 18,
           zIndex: 10, opacity: 1, scale: 1,
           transition: { duration: 0.8, ease: "easeInOut" as const },
        },
        center: { // Middle
           left: "30vw", top: "14vh", x: "15vw", y: "-4px",
           width: "56vw", rotate: 0,
           zIndex: 20, opacity: 1, scale: 1,
           transition: { duration: 0.8, ease: "easeInOut" as const },
        },
        right: { // Bottom (Upcoming)
           left: "49vw", top: "52vh", x: "15vw", y: "0px",
           width: "42vw", rotate: -18,
           zIndex: 10, opacity: 1, scale: 1,
           transition: { duration: 0.8, ease: "easeInOut" as const },
        },
        hiddenRight: { // Below Bottom
           left: "49vw", top: "100vh", x: "15vw", y: "0px",
           width: "42vw", rotate: -18,
           zIndex: 0, opacity: 0, scale: 0.8,
        },
        hiddenLeft: { // Above Top
           left: "46vw", top: "-50vh", x: "15vw", y: "0px",
           width: "42vw", rotate: 18,
           zIndex: 0, opacity: 0, scale: 0.8,
        }
      };
    }

    // Phone
    return {
       left: { // Top
          left: "24vw", top: "clamp(-10vh,-9vh,-2vh)", x: "15vw", y: "0px",
          width: "68vw", rotate: 18,
          zIndex: 10, opacity: 1, scale: 1,
          transition: { duration: 0.8, ease: "easeInOut" as const },
       },
       center: { // Middle
          left: "5vw", top: "clamp(10vh,13vh,26vh)", x: "15vw", y: "-4px",
          width: "80vw", rotate: 0,
          zIndex: 20, opacity: 1, scale: 1,
          transition: { duration: 0.8, ease: "easeInOut" as const },
       },
       right: { // Bottom
          left: "28vw", top: "clamp(40vh,45vh,56vh)", x: "15vw", y: "0px",
          width: "68vw", rotate: -18,
          zIndex: 10, opacity: 1, scale: 1,
          transition: { duration: 0.8, ease: "easeInOut" as const },
       },
       hiddenRight: {
          left: "28vw", top: "100vh", x: "15vw", y: "0px",
          width: "68vw", rotate: -18,
          zIndex: 0, opacity: 0, scale: 0.8,
       },
       hiddenLeft: {
          left: "24vw", top: "-50vh", x: "15vw", y: "0px",
          width: "68vw", rotate: 18,
          zIndex: 0, opacity: 0, scale: 0.8,
       }
    };
  };

  const variants = getVariants(isLap, isIpad, isPhone);

  if (!mounted) return null;

  // Helper to choose the correct image based on position
  const getMobileImage = (state: string) => {
    if (state === "left" || state === "hiddenLeft") return "/Gallery/whitebannermobiletop.svg";
    if (state === "right" || state === "hiddenRight") return "/Gallery/whitebannermobilebottom.svg";
    return "/Gallery/whitebannermobilemiddle.svg";
  };

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

          {/* TOP RING — ALWAYS ABOVE */}
          <div className="pointer-events-none absolute inset-0 z-50">
            <img
              src="/Gallery/circulartopring.svg"
              alt="Top Ring"
              className="absolute top-[0vh] left-[8vw] w-[30vw]"
            />
          </div>

          {/* TOP RIBBON — RIVER FLOW, STARTS AFTER RING */}
          <div className="pointer-events-none absolute inset-0 z-40">
            <div className="absolute top-[0vh] left-[30vw] h-[20vh] w-[calc(100vw-30vw)] translate-y-[1px] overflow-hidden">
              <div
                className="ribbon-flow-right absolute inset-0 bg-top bg-repeat-x"
                style={{
                  backgroundImage: "url('/Gallery/ribbonupper.svg')",
                  backgroundSize: "auto 100%",
                }}
              />

              <div
                className="ribbon-flow-right ribbon-flow-right-2 absolute inset-0 bg-top bg-repeat-x"
                style={{
                  backgroundImage: "url('/Gallery/ribbonupper.svg')",
                  backgroundSize: "auto 100%",
                }}
              />
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
              {/* STICK / HOLDER */}
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

              {/* BANNER PART (FLOATING ABOVE RIBBON) */}
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
            <div className="pointer-events-none absolute inset-0 z-10">
              {/* ================= WHITE BOARDS (BEHIND RIBBON & RING) ================= */}
              <div className="relative top-[100vh] left-[2vw] mt-[6vh] scale-[0.98]">
                <AnimatePresence initial={false}>
                  {GALLERY_ITEMS.map((item, index) => {
                    const diff = getPosition(index);
                    let state = "hiddenRight";
                    if (diff === 0) state = "center";
                    else if (diff === 1) state = "right";
                    else if (diff === -1) state = "left";
                    else if (diff > 1) state = "hiddenRight";
                    else if (diff < -1) state = "hiddenLeft";

                    const isInteractive = diff === 1 || diff === -1;
                    const clickHandler = diff === 1 ? handleNext : (diff === -1 ? handlePrev : undefined);

                    return (
                      <motion.div
                        key={item.id}
                        layout // Enables smooth transition between different layouts (top vs bottom)
                        variants={variants}
                        initial="hiddenRight"
                        animate={state}
                        className={`white-board absolute ${isInteractive ? "cursor-pointer pointer-events-auto" : ""}`}
                        onClick={clickHandler}
                      >
                         <img
                          src="/Gallery/whiteboard.svg"
                          alt="White board"
                          className="h-auto w-full"
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* ================= END RING (TOPMOST) ================= */}
              <div className="relative top-[38vh] z-50 h-auto w-[50vw]">
                <img
                  src="/Gallery/bottomring1.svg"
                  alt="Bottom Ring 1"
                  className="rotate-ccw absolute right-[37vw] h-auto w-[23vw]"
                />

                <img
                  src="/Gallery/bottomring2.svg"
                  alt="Bottom Ring 2"
                  className="rotate-cw absolute top-[24vh] right-[30vw] h-auto w-[25vw]"
                />
              </div>

              {/* ================= BOTTOM RIBBON (COVERS WHITE BOARDS) ================= */}
              <div className="relative -bottom-[76vh] left-[8vw] z-40 h-[20vh] w-full overflow-hidden">
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
      )}

      {/* ================= IPAD VIEW ================= */}
      {isIpad && (
        <div className="relative h-screen w-full overflow-hidden bg-amber-50">
          {/* ================= BACKGROUND ================= */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Gallery/backgroundmobile.svg"
              alt="Gallery Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ================= TOP RIBBON ================= */}

          <div className="pointer-events-none absolute -top-[2vh] left-0 z-10 h-[12vh] w-[110vw] overflow-hidden">
            <div className="ribbon-flow-right flex h-full">
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
            </div>
          </div>

          {/* ================= TOP RING ================= */}
          <div className="absolute top-[0vh] left-[50vw] z-20 w-full max-w-[68vw]">
            <Image
              src="/Gallery/topringmobile.svg"
              alt="Top Ring"
              width={0}
              height={0}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* ================= WHITE BANNERS ================= */}
          <div className="absolute inset-0 z-[1]">
             <AnimatePresence initial={false}>
               {GALLERY_ITEMS.map((item, index) => {
                 const diff = getPosition(index);
                 let state = "hiddenRight";
                 if (diff === 0) state = "center";
                 else if (diff === 1) state = "right";
                 else if (diff === -1) state = "left";
                 else if (diff > 1) state = "hiddenRight";
                 else if (diff < -1) state = "hiddenLeft";

                 const isInteractive = diff === 1 || diff === -1;
                 const clickHandler = diff === 1 ? handleNext : (diff === -1 ? handlePrev : undefined);

                 return (
                  <motion.div
                    key={item.id}
                    layout
                    variants={variants}
                    initial="hiddenRight"
                    animate={state}
                    className={`absolute ${isInteractive ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}`}
                    onClick={clickHandler}
                  >
                     <img
                        src={getMobileImage(state)}
                        className="w-full h-auto"
                        alt=""
                     />
                  </motion.div>
                 );
               })}
             </AnimatePresence>
        </div>


          {/* ================= MIDDLE PHOTO / GALLERY BANNERS ================= */}
          <div className="ipad-banner-layer pointer-events-none absolute inset-0 z-[5] flex items-center justify-center">
            <div className="ipad-banner-anim relative -top-[5vh] mt-[6vh] flex flex-col items-center gap-[4vh]">
              {/* PHOTO BANNER */}
              <Image
                src="/Gallery/photobannermobile.svg"
                alt="Photo Banner"
                width={0}
                height={0}
                className="absolute -top-[60vh] z-10 h-auto w-[75vw] max-w-[75vw]"
                priority
              />

              {/* GALLERY BANNER */}
              <Image
                src="/Gallery/gallerybannermobile.svg"
                alt="Gallery Banner"
                width={0}
                height={0}
                className="gallery-settle-ipad absolute -top-[22vh] -right-[40vw] z-0 h-auto w-[72vw] max-w-[75vw]"
                priority
              />
            </div>
          </div>

          {/* ================= BOTTOM RIBBON ================= */}

          <div className="pointer-events-none absolute top-[89vh] left-[2vw] z-10 h-[12vh] w-[100vw] overflow-hidden">
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

          {/* ================= BOTTOM RING ================= */}
          <div className="absolute relative top-[64vh] z-20 max-w-[100vw]">
            {/* Bottom Ring – clockwise */}
            <Image
              src="/Gallery/bottomring1.svg"
              alt="Bottom Ring"
              width={0}
              height={0}
              className="rotate-ccw absolute -top-[2vh] right-[70vw] h-auto w-[50vw]"
              priority
            />

            {/* Bottom Ring 1 – anti-clockwise */}
            <Image
              src="/Gallery/bottomring2.svg"
              alt="Bottom Ring 1"
              width={0}
              height={0}
              className="rotate-cw absolute top-[15vh] right-[59vw] h-auto w-[53vw]"
              priority
            />
          </div>
        </div>
      )}


      {/* ================= PHONE VIEW ================= */}
      {isPhone && (
        <div className="relative h-screen w-full overflow-hidden bg-amber-50">
          {/* BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Gallery/backgroundmobile.svg"
              alt="Gallery Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TOP RIBBON */}
          <div className="pointer-events-none absolute bottom-[92vh] left-0 z-10 h-[10vh] w-[120vw] overflow-hidden">
            <div className="ribbon-flow-right flex h-full">
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
              <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
            </div>
          </div>

          {/* TOP RING */}
          <div className="absolute top-[0vh] left-[52vw] z-20 w-[70vw]">
            <Image
              src="/Gallery/topringmobile.svg"
              alt="Top Ring"
              width={0}
              height={0}
              className="h-auto w-full"
              priority
            />
          </div>
          {/* ================= WHITE BANNERS — MOBILE ================= */}
          <div className="absolute inset-0 z-[1]">
             <AnimatePresence initial={false}>
               {GALLERY_ITEMS.map((item, index) => {
                 const diff = getPosition(index);
                 let state = "hiddenRight";
                 if (diff === 0) state = "center";
                 else if (diff === 1) state = "right";
                 else if (diff === -1) state = "left";
                 else if (diff > 1) state = "hiddenRight";
                 else if (diff < -1) state = "hiddenLeft";

                 const isInteractive = diff === 1 || diff === -1;
                 const clickHandler = diff === 1 ? handleNext : (diff === -1 ? handlePrev : undefined);

                 return (
                  <motion.div
                    key={item.id}
                    layout
                    variants={variants}
                    initial="hiddenRight"
                    animate={state}
                    className={`absolute ${isInteractive ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}`}
                    onClick={clickHandler}
                  >
                     <img
                        src={getMobileImage(state)}
                        className="w-full h-auto"
                        alt=""
                     />
                  </motion.div>
                 );
               })}
             </AnimatePresence>
          </div>


          {/* ================= CENTER PHOTO / GALLERY (BELOW RIBBON) ================= */}
          {/* ================= CENTER PHOTO / GALLERY (PHONE) ================= */}
          <div className="phone-banner-layer pointer-events-none relative z-[5] flex h-screen items-center justify-center">
            {/* MOVING ELEMENT */}
            <div className="photo-gallery-group phone-banner-anim relative bottom-[40vh] left-[28vw] aspect-[3/2] w-[95vw] max-w-[1200px]">
              {/* PHOTO */}
              <div className="absolute inset-0 z-30">
                <Image
                  src="/Gallery/photobannermobile.svg"
                  alt="Photo Banner"
                  width={0}
                  height={0}
                  className="absolute top-[10%] right-[30%] h-auto w-[120%]"
                  priority
                />
              </div>

              {/* GALLERY */}
              <div className="absolute inset-0 z-20">
                <Image
                  src="/Gallery/gallerybannermobile.svg"
                  alt="Gallery Banner"
                  width={0}
                  height={0}
                  className="gallery-settle absolute top-[120%] right-[30%] h-auto w-[100%]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* BOTTOM RIBBON */}
          <div className="pointer-events-none absolute top-[91vh] left-0 z-10 h-[10vh] w-[110vw] overflow-hidden">
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

          {/* BOTTOM RING */}
          {/* BOTTOM RING (MOBILE) */}
          <div className="pointer-events-none absolute relative right-0 left-0 z-30 flex items-center justify-center">
            {/* Ring 1 – anti-clockwise */}
            <Image
              src="/Gallery/bottomring1.svg"
              alt="Bottom Ring 1"
              width={0}
              height={0}
              className="rotate-ccw absolute -top-[33vh] right-[70vw] h-auto w-[60vw]"
              priority
            />

            {/* Ring 2 – clockwise */}
            <Image
              src="/Gallery/bottomring2.svg"
              alt="Bottom Ring 2"
              width={0}
              height={0}
              className="rotate-ccw absolute -top-[18vh] right-[50vw] h-auto w-[65vw]"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
