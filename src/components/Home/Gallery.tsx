"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";

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

  // Carousel State (Logic from Sponsors.tsx)
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
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
                  const position = (index - current + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;

                  // Base transition class
                  let className = "white-board absolute transition-all duration-1000 ease-in-out ";
                  let clickHandler = undefined;
                  let style = {};

                  if (position === 0) {
                    // Center Board
                    // left-[37vw] -top-[5vh] z-20 w-[35vw] opacity-0 (Wait, base code says opacity-0 but logic suggests it should be visible?)
                    // The base code provided 'opacity-0' in the snippet for ALL boards. This assumes they are animated in by GSAP or something originally.
                    // But for our React implementation, we need them visible.
                    // Center: opacity-100
                    className += "left-[37vw] -top-[5vh] z-20 w-[35vw] opacity-100";
                  } else if (position === 1) {
                    // Right Board (Next)
                    // -bottom-[72vh] left-[68vw] z-10 w-[29vw]
                    className += "-bottom-[72vh] left-[68vw] z-10 w-[29vw] opacity-100 cursor-pointer pointer-events-auto";
                    clickHandler = handleNext;
                  } else if (position === GALLERY_ITEMS.length - 1) {
                    // Left Board (Prev)
                    // left-[9vw] -top-[1vw] z-10 w-[29vw]
                    className += "left-[9vw] -top-[1vw] z-10 w-[29vw] opacity-100 cursor-pointer pointer-events-auto";
                    clickHandler = handlePrev;
                  } else {
                    // Hidden
                    // Move offscreen downwards or similar to Sponsors
                    className += "left-[37vw] top-[100vh] z-0 w-[35vw] opacity-0 pointer-events-none";
                  }

                  return (
                    <div
                      key={item.id}
                      className={className}
                      onClick={clickHandler}
                    >
                      <img
                        // /Gallery/whiteboard.svg
                        src="/Gallery/whiteboard.svg"
                        alt="White board"
                        className="w-full h-auto"
                      />
                    </div>
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
        <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
        <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
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
    <div className="absolute inset-0 z-[1]">
      {GALLERY_ITEMS.map((item, index) => {
        const position = (index - current + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;

        // Base transition class
        let className = "absolute transition-all duration-1000 ease-in-out ";
        let clickHandler = undefined;
        // User's base code used specific img classes like 'white-banner', 'white-banner-middle'.
        // I will append those if needed, or just use the layout classes.

        if (position === 0) {
          // Middle (Center)
          // left-[30vw] top-[15vh] w-[55vw]
          className += "left-[30vw] top-[15vh] w-[55vw] opacity-100 z-20 white-banner-middle";
        } else if (position === 1) {
          // Bottom (Right/Next)
          // left-[37vw] top-[37vh] w-[48vw]
          className += "left-[37vw] top-[37vh] w-[48vw] opacity-100 z-10 white-banner white-bottom cursor-pointer pointer-events-auto";
          clickHandler = handleNext;
        } else if (position === GALLERY_ITEMS.length - 1) {
          // Top (Left/Prev)
          // left-[35vw] w-[50vw] (top 0 implied or top-[0vh] from snippet?)
          // Snippet: left-[35vw] w-[50vw] ... white-top ... (top isn't explicitly set in snippet, probably 0 or handled by class? Wait, snippet says: "top-[0vh]" in mobile view, but for iPad snippet says: "left-[35vw] w-[50vw] ... white-top" - actually snippet has no top class for top banner?
          // Re-reading iPad snippet:
          // Top White: className="absolute left-[35vw] w-[50vw] opacity-0 white-banner white-top"
          // It seems top is missing. I will assume top-0 or top-[0vh].
          // Mobile view has top-[0vh]. I'll use top-[0vh] for consistency.
          className += "left-[35vw] top-[0vh] w-[50vw] opacity-100 z-10 white-banner white-top cursor-pointer pointer-events-auto";
          clickHandler = handlePrev;
        } else {
          // Hidden
          className += "left-[30vw] top-[100vh] w-[55vw] opacity-0 z-0 pointer-events-none";
        }

        return (
          <div
            key={item.id}
            className={className}
            onClick={clickHandler}
          >
            <img
              // /Gallery/whiteboard.svg
              src="/Gallery/whiteboard.svg"
              className="w-full h-auto"
              alt=""
            />
          </div>
        );
      })}
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
    <div className="absolute bottom-[92vh] left-0 z-10 w-[120vw] h-[10vh] overflow-hidden pointer-events-none">
      <div className="ribbon-flow-right h-full flex">
        <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
        <img src="/Gallery/ribbonupper.svg" className="ribbon-img" alt="" />
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
    <div className="absolute inset-0 z-[1]">
      {GALLERY_ITEMS.map((item, index) => {
        const position = (index - current + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;

        let className = "absolute transition-all duration-1000 ease-in-out ";
        let clickHandler = undefined;

        if (position === 0) {
          // Middle
          // left-[12vw] top-[15vh] w-[80vw]
          className += "left-[12vw] top-[15vh] w-[80vw] z-20 opacity-100 phone-white-middle";
        } else if (position === 1) {
          // Bottom (Next)
          // left-[24vw] top-[38vh] w-[68vw]
          className += "left-[24vw] top-[38vh] w-[68vw] z-10 opacity-100 phone-white phone-white-bottom cursor-pointer pointer-events-auto";
          clickHandler = handleNext;
        } else if (position === GALLERY_ITEMS.length - 1) {
          // Top (Prev)
          // left-[21vw] top-[0vh] w-[71vw]
          className += "left-[21vw] top-[0vh] w-[71vw] z-10 opacity-100 phone-white phone-white-top cursor-pointer pointer-events-auto";
          clickHandler = handlePrev;
        } else {
          // Hidden
          className += "left-[12vw] top-[100vh] w-[80vw] z-0 opacity-0 pointer-events-none";
        }

        return (
          <div
            key={item.id}
            className={className}
            onClick={clickHandler}
          >
            <img
              // /Gallery/whiteboard.svg
              src="/Gallery/whiteboard.svg"
              className="w-full h-auto"
              alt=""
            />
          </div>
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

    </>
  );
}
