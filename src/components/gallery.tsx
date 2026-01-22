"use client";

import { useLayoutEffect, useState } from "react";

import Image from "next/image";

export function Gallery() {
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [mounted, setMounted] = useState(false);
  

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

              {/* LEFT BOARD */}
              <div className="white-board white-left absolute left-[9vw] z-10 w-[29vw] opacity-0 -top-[1vw]">
                <img
                  src="/Gallery/whiteboard.svg"
                  alt="White board"
                  className="w-full h-auto"
                />
              </div>

              {/* MIDDLE BOARD */}
              <div className="white-board white-middle absolute left-[37vw] -top-[5vh] z-20 w-[35vw] opacity-0">
                <img
                  src="/Gallery/whiteboard.svg"
                  alt="White board"
                  className="w-full h-auto"
                />
              </div>

              {/* RIGHT BOARD */}
              <div className="white-board white-right absolute -bottom-[72vh] left-[68vw] z-10 w-[29vw] opacity-0">
                <img
                  src="/Gallery/whiteboard.svg"
                  alt="White board"
                  className="w-full h-auto"
                />
              </div>

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
    <div className="absolute bottom-[92vh] left-0 z-10 w-[120vw] h-[10vh] overflow-hidden pointer-events-none">
      <div className="ribbon-flow-right h-full flex">
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
        className="w-full h-auto"
        priority
      />
    </div>

    {/* ================= WHITE BANNERS (PHONE) ================= */}
    <div className="absolute inset-0 z-[1] pointer-events-none">

      <img
        src="/Gallery/whitebannermobiletop.svg"
        className="absolute left-[21vw] top-[0vh] w-[71vw] opacity-0 phone-white phone-white-top"
        alt=""
      />

      <img
        src="/Gallery/whitebannermobilemiddle.svg"
        className="absolute left-[12vw] top-[15vh] w-[80vw] opacity-0 phone-white-middle"
        alt=""
      />

      <img
        src="/Gallery/whitebannermobilebottom.svg"
        className="absolute left-[24vw] top-[38vh] w-[68vw] opacity-0 phone-white phone-white-bottom"
        alt=""
      />

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
