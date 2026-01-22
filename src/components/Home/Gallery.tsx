"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const GALLERY_ITEMS = [
  {
    id: 0,
    mobileSrc: "/Gallery/whitebannermobiletop.svg",
    content: "/tiles/tile1.webp",
  },
  {
    id: 1,
    mobileSrc: "/Gallery/whitebannermobilemiddle.svg",
    content: "/tiles/tile2.webp",
  },
  {
    id: 2,
    mobileSrc: "/Gallery/whitebannermobilebottom.svg",
    content: "/tiles/tile3.webp",
  },
  {
    id: 3,
    mobileSrc: "/Gallery/whitebannermobiletop.svg",
    content: "/tiles/tile4.webp",
  },
  {
    id: 4,
    mobileSrc: "/Gallery/whitebannermobilemiddle.svg",
    content: "/tiles/tile5.webp",
  },
];

export function Gallery() {
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    const centerX = screenWidth / 2;

    if (clickX > centerX) {
      // Next (Right Click)
      setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    } else {
      // Prev (Left Click)
      setCurrentIndex(
        (prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
      );
    }
  };

  const laptopVariants: Variants = {
    center: {
      left: "37vw",
      top: "-5vh",
      width: "35vw",
      zIndex: 20,
      opacity: 1,
    },
    right: {
      left: "68vw",
      top: "-1vw",
      width: "29vw",
      zIndex: 10,
      opacity: 1,
    },
    left: {
      left: "9vw",
      top: "-1vw",
      width: "29vw",
      zIndex: 10,
      opacity: 1,
    },
    hiddenLeft: {
      left: "-50vw",
      top: "10vh",
      width: "20vw",
      zIndex: 0,
      opacity: 0,
    },
    hiddenRight: {
      left: "120vw",
      top: "10vh",
      width: "20vw",
      zIndex: 0,
      opacity: 0,
    },
  };

  const ipadVariants: Variants = {
    middle: {
      top: "15vh",
      left: "30vw",
      width: "55vw",
      zIndex: 20,
      opacity: 1,
    },
    bottom: {
      top: "37vh",
      left: "37vw",
      width: "48vw",
      zIndex: 10,
      opacity: 1,
    },
    top: {
      top: "0vh",
      left: "35vw",
      width: "50vw",
      zIndex: 10,
      opacity: 1,
    },
    hiddenTop: {
      top: "-50vh",
      left: "35vw",
      width: "50vw",
      zIndex: 0,
      opacity: 0,
    },
    hiddenBottom: {
      top: "100vh",
      left: "37vw",
      width: "48vw",
      zIndex: 0,
      opacity: 0,
    },
  };

  const mobileVariants: Variants = {
    middle: {
      top: "15vh",
      left: "12vw",
      width: "80vw",
      zIndex: 20,
      opacity: 1,
    },
    bottom: {
      top: "38vh",
      left: "24vw",
      width: "68vw",
      zIndex: 10,
      opacity: 1,
    },
    top: {
      top: "0vh",
      left: "21vw",
      width: "71vw",
      zIndex: 10,
      opacity: 1,
    },
    hiddenTop: {
      top: "-50vh",
      left: "21vw",
      width: "71vw",
      zIndex: 0,
      opacity: 0,
    },
    hiddenBottom: {
      top: "100vh",
      left: "24vw",
      width: "68vw",
      zIndex: 0,
      opacity: 0,
    },
  };

  const getPosition = (index: number, currentIndex: number) => {
    const len = GALLERY_ITEMS.length;
    // Calculate distance from current index in the circular buffer
    // 0 = Center/Middle, 1 = Right/Bottom, -1 = Left/Top
    let diff = (index - currentIndex + len) % len;

    // Normalize diff to be closest distance (e.g., if len=5, diff=4 should be -1)
    if (diff > len / 2) diff -= len;

    if (diff === 0) return "center"; // middle
    if (diff === 1) return "right"; // bottom
    if (diff === -1) return "left"; // top
    if (diff > 1) return "hiddenRight"; // hiddenBottom
    return "hiddenLeft"; // hiddenTop
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Click Listener Overlay (High Z-Index) */}
      <div
        className="absolute inset-0 z-[100] cursor-pointer"
        onClick={handleScreenClick}
      />

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

          {/* ================= LEFT DECORATIONS (TOPMOST) ================= */}
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
              <div className="ribbon-flow-right">
                <img
                  src="/Gallery/ribbonupper.svg"
                  className="ribbon-img"
                  alt=""
                />
                <img
                  src="/Gallery/ribbonupper.svg"
                  className="ribbon-img"
                  alt=""
                />
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


            {/* ================= BOTTOM DECORATIONS ================= */}
            <div className="pointer-events-none absolute inset-0 z-10">
              {/* ================= WHITE BOARDS (BEHIND RIBBON & RING) ================= */}
              <div className="relative top-[100vh] left-[2vw] mt-[6vh] scale-[0.98]">
                {GALLERY_ITEMS.map((item, index) => {
                  const pos = getPosition(index, currentIndex);
                  return (
                    <motion.div
                      key={item.id}
                      variants={laptopVariants}
                      animate={pos}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="white-board absolute flex items-center justify-center"
                    >
                      <img
                        src="/Gallery/whiteboard.svg"
                        alt="White board"
                        className="relative z-0 h-auto w-full"
                      />
                      {/* Content inside board */}
                      <div className="absolute inset-0 z-10 flex items-center justify-center p-[4vw]">
                        <img
                          src={item.content}
                          alt={`Gallery Item ${index}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
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
        <img
          src="/Gallery/ribbonupper.svg"
          className="ribbon-img"
          alt=""
        />
        <img
          src="/Gallery/ribbonupper.svg"
          className="ribbon-img"
          alt=""
        />
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
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {GALLERY_ITEMS.map((item, index) => {
        let pos = getPosition(index, currentIndex);
        // Map laptop positions to mobile variant keys
        if (pos === "center") pos = "middle";
        else if (pos === "right") pos = "bottom";
        else if (pos === "left") pos = "top";
        else if (pos === "hiddenRight") pos = "hiddenBottom";
        else pos = "hiddenTop"; // hiddenLeft

        return (
          <motion.div
            key={item.id}
            variants={ipadVariants}
            animate={pos}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="white-banner absolute"
          >
            <img src={item.mobileSrc} className="h-auto w-full" alt="" />
          </motion.div>
        );
      })}
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
          className="absolute -right-[40vw] -top-[28vh] z-0 h-auto w-[72vw] max-w-[75vw]"
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
    <div className="absolute bottom-[92vh] left-0 z-10 w-[120vw] h-[10vh] overflow-hidden pointer-events-none">
      <div className="ribbon-flow-right h-full flex">
        <img
          src="/Gallery/ribbonupper.svg"
          className="ribbon-img"
          alt=""
        />
        <img
          src="/Gallery/ribbonupper.svg"
          className="ribbon-img"
          alt=""
        />
      </div>
    </div>

    {/* TOP RING */}
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

    {/* ================= WHITE BANNERS (PHONE) ================= */}
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {GALLERY_ITEMS.map((item, index) => {
        let pos = getPosition(index, currentIndex);
        // Map laptop positions to mobile variant keys
        if (pos === "center") pos = "middle";
        else if (pos === "right") pos = "bottom";
        else if (pos === "left") pos = "top";
        else if (pos === "hiddenRight") pos = "hiddenBottom";
        else pos = "hiddenTop"; // hiddenLeft

        return (
          <motion.div
            key={item.id}
            variants={mobileVariants}
            animate={pos}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="white-banner absolute"
          >
            <img src={item.mobileSrc} className="h-auto w-full" alt="" />
          </motion.div>
        );
      })}
    </div>

    {/* ================= CENTER PHOTO / GALLERY (BELOW RIBBON) ================= */}
    {/* ================= CENTER PHOTO / GALLERY (BELOW RIBBON) ================= */}
    {/* ================= CENTER PHOTO / GALLERY (PHONE) ================= */}
    <div className="phone-banner-layer pointer-events-none relative z-[5] flex h-screen items-center justify-center">
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
            className="absolute right-[30%] top-[10%] h-auto w-[120%]"
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
            className="gallery-settle absolute right-[30%] top-[120%] h-auto w-[100%]"
            priority
          />
        </div>
      </div>
    </div>


    {/* BOTTOM RIBBON */}
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

    {/* BOTTOM RING */}
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

    </div>
  );
}
