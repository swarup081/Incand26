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

  const [showWhite, setShowWhite] = useState(false);
  const isShortHeight =
  typeof window !== "undefined" && window.innerHeight <= 700;

  


useLayoutEffect(() => {
  if (!isPhone && !isLap && !isIpad) return;

  const timingMap = {
    phone: 2800, 
    ipad: 2500,  
    lap: 3500,   
  };

  const delay = isPhone
    ? timingMap.phone
    : isIpad
    ? timingMap.ipad
    : timingMap.lap;

  const t = setTimeout(() => {
    setShowWhite(true);
  }, delay);

  return () => clearTimeout(t);
}, [isPhone, isIpad, isLap]);


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
  return {
    center: {
      left: "37vw",
      top: "-83vh",
      width: "35vw",
      opacity: 1,
      zIndex: 20,
      
    },

    right: {
      left: "70vw",
      top: "-75vh",
      width: "30vw",
      opacity: 1,
      zIndex: 10,

    },

    left: {
      left: "4vw",
      top: "-71vh",
      width: "30vw",
      opacity: 1,
      zIndex: 10,
     

    },

    hiddenRight: {
      left: "350vw",
      top: "200vh",
      width:"30vw",
      opacity: 0,
    
      
    },

    hiddenLeft: {
      left: "-350vw",
      top: "200vh",
      width:"30vw",
      opacity: 0,
      
      
    },
  };
}
    
    // iPad - Vertical Stack (Added slight rotation for style)
    if (isIpad) {
       return {
         center: { left: "30vw", top: "15vh", width: "55vw", opacity: 1, zIndex: 20, rotate: 0 },
         right: { left: "37vw", top: "37vh", width: "48vw", opacity: 1, zIndex: 10, rotate: 5 }, 
         left: { left: "35vw", top: "0vh", width: "50vw", opacity: 1, zIndex: 10, rotate: -5 }, 
         hiddenRight: { left: "37vw", top: "100vh", width: "48vw", opacity: 0, zIndex: 0, rotate: 10 },
         hiddenLeft: { left: "35vw", top: "-50vh", width: "50vw", opacity: 0, zIndex: 0, rotate: -10 },
       };
    }

// Phone - Vertical Stack (Added slight rotation for style)
    return {
      center: { left: isShortHeight ?"18vw":"6vw", top: isShortHeight ?"11vh":"14vh", width: isShortHeight ?"73vw":"84vw", opacity: 1, zIndex: 20, rotate: 0 },
      right: { left: isShortHeight ?"37vw":"30vw", top:isShortHeight ? "47vh" : "48vh", width: isShortHeight ?"58vw":"68vw", opacity: 1, zIndex: 10, rotate: -20 }, 
      left: { left: isShortHeight ?"37vw":"32vw", top: isShortHeight ?"-11vh":"-8vh", width: isShortHeight ?"58vw":"68vw", opacity: 1, zIndex: 10, rotate: 20 },
      hiddenRight: { left: "240vw", top: "30vh", width: "68vw", opacity: 0, zIndex: 0, rotate: 10 },
      hiddenLeft: { left: "210vw", top: "-80vh", width: "71vw", opacity: 0, zIndex: 0, rotate: -10 },
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
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="pointer-events-none absolute inset-0 z-10">
              
              {/* ================= WHITE BOARDS (ANIMATED) ================= */}
              <div className=" whiteboard-stage relative top-[100vh] left-[2vw] mt-[6vh] scale-[0.98]" 
              style={{
                perspective: "1200px",
                perspectiveOrigin: "50% 50%",
              }}>
                {GALLERY_ITEMS.map((item, index) => {
                  const diff = getPosition(index);

                  let state = "hiddenRight";
                  if (diff === 0) state = "center";
                  else if (diff === 1) state = "right";
                  else if (diff === -1) state = "left";

                  const isInteractive = diff === 1 || diff === -1;
                  const clickHandler =
                    diff === 1 ? handleNext : diff === -1 ? handlePrev : undefined;

                  // rotation stays PERFECT (do not touch)
                  let rotation = 0;
                  if (state === "left") rotation = -12;
                  if (state === "right") rotation = 16;

                  return (
                    <motion.div
                      key={item.id}
                      initial="hidden"
                      animate={
                        showWhite
                          ? {
                              ...variants[state],
                              opacity: 1,
                              y: 0,
                            }
                          : {}
                      }
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                      }}
                      className={`white-board absolute ${
                        isInteractive ? "cursor-pointer pointer-events-auto" : ""
                      }`}
                      style={{
                        rotate: rotation,
                        transformOrigin: "50% 85%",
                      }}
                      onClick={clickHandler}
                    >
                      <img
                        src="/Gallery/whiteboard.svg"
                        alt="White board"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  );
                })}

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
        </div>
      )}

      {/* ================= IPAD VIEW ================= */}
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
    {/* ================= TOP RIBBON (FLOWING) ================= */}
    <div className="absolute -top-[2vh] left-0 z-10 w-[110vw] h-[12vh] overflow-hidden pointer-events-none">
      <div className="ribbon-flow-right h-full flex">
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
        className="w-full h-auto"
        priority
      />
    </div>

    {/* ================= WHITE BANNERS ================= */}
<div className="absolute inset-0 z-[1] pointer-events-none">

  {/* TOP WHITE */}
  <img
    src="/Gallery/whitebannermobiletop.svg"
    className="
      absolute
      left-[35vw] 
      w-[50vw]
      opacity-0
      white-banner
      white-top
    "
    alt=""
  />

  {/* MIDDLE WHITE */}
  <img
    src="/Gallery/whitebannermobilemiddle.svg"
    className="
      absolute
      left-[30vw] top-[15vh]
      w-[55vw]
      opacity-0
      white-banner-middle
    "
    alt=""
  />

  {/* BOTTOM WHITE */}
  <img
    src="/Gallery/whitebannermobilebottom.svg"
    className="
      absolute
      left-[37vw] top-[37vh]
      w-[48vw]
      opacity-0
      white-banner
      white-bottom
    "
    alt=""
  />

</div>


    {/* ================= MIDDLE PHOTO / GALLERY BANNERS ================= */}
<div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none ipad-banner-layer">

 <div className="relative -top-[5vh] flex flex-col items-center gap-[4vh] mt-[6vh] ipad-banner-anim">
    

    {/* PHOTO BANNER */}
    <Image
      src="/Gallery/photobannermobile.svg"
      alt="Photo Banner"
      width={0}
      height={0}
      className="absolute -top-[60vh] w-[75vw] max-w-[75vw] h-auto z-10"
      priority
    />

    {/* GALLERY BANNER */}
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

    {/* ================= BOTTOM RIBBON ================= */}
    {/* ================= BOTTOM RIBBON (FLOWING) ================= */}
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


    {/* ================= BOTTOM RING ================= */}
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



     {/* ================= MOBILE VIEW ================= */}
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
              <div className="absolute bottom-[92vh] left-0 z-10 h-[10vh] w-[120vw] overflow-hidden pointer-events-none">
  <div
    className="ribbon-flow-right h-full"
    style={{
      backgroundImage: "url('/Gallery/ribbonupper.svg')",
      backgroundSize: "auto 100%",
    }}
  />
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

    {/* ================= WHITE BANNERS (PHONE) ================= */}
    {/* REMOVED pointer-events-none, ensured items are clickable */}
    <div className="absolute left-[10vw] z-[1]">
  {GALLERY_ITEMS.map((item, index) => {
    const diff = getPosition(index);

    let state = "hiddenRight";
    if (diff === 0) state = "center";
    else if (diff === 1) state = "right";
    else if (diff === -1) state = "left";

    const clickable = diff === 1 || diff === -1;
    const clickHandler =
      diff === 1 ? handleNext : diff === -1 ? handlePrev : undefined;

    return (
      <motion.div
        key={item.id}
        initial="hiddenRight"          // 🔥 start off-screen
        animate={showWhite ? state : "hiddenRight"}
        variants={variants}
        
        className={`absolute ${
          clickable ? "cursor-pointer pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={clickHandler}
      >
        <img
          src="/Gallery/whitebannermobilemiddle.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>
    );
  })}
</div>

    {/* ================= CENTER PHOTO / GALLERY (BELOW RIBBON) ================= */}
{/* ================= CENTER PHOTO / GALLERY (PHONE) ================= */}
<div className="pointer-events-none relative z-[5] flex h-screen items-center justify-center phone-banner-layer">

  {/* MOVING ELEMENT */}
  <div
    className="
      photo-gallery-group
      relative
      bottom-[40vh]
      left-[28vw]
      aspect-[3/2]
      w-[95vw]
      max-w-[1200px]
      phone-banner-anim
    "
  >
    {/* PHOTO */}
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

    {/* GALLERY */}
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
                  className="rotate-cw absolute -top-[18vh] right-[50vw] h-auto w-[65vw]"
                  priority
                />
              </div>

  </div>
)}

    </>
  );
}