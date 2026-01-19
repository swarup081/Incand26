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
        <div className="relative w-full min-h-screen bg-amber-50 overflow-hidden">
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
<div className="absolute inset-0 z-50 pointer-events-none">
  <img
    src="/Gallery/circulartopring.svg"
    alt="Top Ring"
    className="absolute left-[8vw] top-[0vh] w-[30vw]"
  />
</div>

{/* TOP RIBBON — RIVER FLOW, STARTS AFTER RING */}
<div className="absolute inset-0 z-40 pointer-events-none">
  <div
  className="
    absolute
    top-[-5vh]
    left-[30vw]
    w-[calc(100vw-30vw)]
    h-[20vh]
    overflow-hidden
    translate-y-[1px]   /* 👈 hides seam */
  "
>

    <div className="ribbon-flow-right">
      <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
      <img src="/Gallery/ribbonupper.svg" className="ribbon-img" />
    </div>
  </div>
</div>


{/* ================= LEFT BOARD (SEPARATE LAYER) ================= */}
<div className="absolute inset-0 z-60 pointer-events-none flex items-center px-8">
  <img
    src="/Gallery/board1.svg"
    alt="Board 1"
    className="
      relative
      -left-[12vw]
      w-[80vw]
      h-[100vh]
      board-two-phase
    "
  />
</div>



{/* ================= CENTER BANNERS (BELOW RIBBON) ================= */}
<div className="relative z-20 h-screen pointer-events-none flex items-center justify-center">
  <div
    className="
      relative
      bottom-[38vh]
      left-[20vw]
      w-[55vw]
      max-w-[900px]
      aspect-[3/2]
      banner-group
      banner-two-phase-vertical
    "
  >
    {/* STICK / HOLDER */}
    <div className="absolute inset-0 z-20">
      <Image
        src="/Gallery/board2part1.svg"
        alt="Stick"
        width={600}
        height={200}
        className="absolute top-[33%] left-[3%] w-[90%] h-auto"
        priority
      />
    </div>



    {/* BANNER PART (FLOATING ABOVE RIBBON) */}
    <div className="absolute inset-0 z-30 banner-z-jump">
      <Image
        src="/Gallery/board2part2.svg"
        alt="Banner"
        width={600}
        height={200}
        className="absolute bottom-[0%] left-[20%] w-[60%] h-auto"
        priority
      />
    </div>
  </div>
</div>



    
{/* ================= BOTTOM DECORATIONS ================= */}
<div className="absolute inset-0 z-20 pointer-events-none">
  {/* END RING — UNCHANGED */}
  <img
    src="/Gallery/circularbottomring.svg"
    alt="End Ring"
    className="relative top-[35vh] w-[23vw] h-auto z-50"
  />

  {/* ================= BOTTOM DECORATIONS ================= */}
<div className="absolute inset-0 z-20 pointer-events-none">

  {/* ================= WHITE BOARDS (BEHIND RIBBON & RING) ================= */}
  <div className="relative  top-[100vh]  left-[2vw] mt-[6vh] scale-[0.98]">
    {/* LEFT BOARD */}
    <img
      src="/Gallery/whiteboardleft.svg"
      alt="White board left"
      className="absolute left-[7vw] w-[52vw] opacity-0 white-board white-left z-10"
    />

    {/* MIDDLE BOARD */}
    <img
      src="/Gallery/whiteboardmiddle.svg"
      alt="White board middle"
      className="absolute left-[30vw] w-[55vw] opacity-0 white-board white-middle z-20"
    />

    {/* RIGHT BOARD */}
    <img
      src="/Gallery/whiteboardright.svg"
      alt="White board right"
      className="absolute left-[50vw] w-[50vw] opacity-0 white-board white-right z-10 -bottom-[78vh]"
    />
  </div>

  {/* ================= END RING (TOPMOST) ================= */}
  <img
    src="/Gallery/circularbottomring.svg"
    alt="End Ring"
    className="relative top-[35vh] w-[23vw] h-auto z-50"
  />

  {/* ================= BOTTOM RIBBON (COVERS WHITE BOARDS) ================= */}
  <div className="relative -bottom-[8vh] left-[8vw] w-full h-[20vh] overflow-hidden z-40">
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

</div>
</div>

        </div>
      )}

      {/* ================= IPAD VIEW ================= */}
      {isIpad && (
        <div className="relative w-full min-h-screen bg-amber-50 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/background-gallery.svg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Top Ribbon */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <Image
              src="/Gallery/ribbonabove.svg"
              alt="Ribbon above"
              width={1920}
              height={80}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-20 min-h-screen flex flex-col items-center justify-center gap-12 py-32 px-6">
            <div className="w-full max-w-xs">
              <Image
                src="/Gallery/board1.svg"
                alt="Board 1"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="w-full max-w-md flex flex-col gap-6">
              <Image
                src="/Gallery/board2part1.svg"
                alt="PHOTO Banner"
                width={600}
                height={200}
                className="w-full h-auto"
                priority
              />
              <Image
                src="/Gallery/board2part2.svg"
                alt="GALLERY Banner"
                width={600}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Bottom Ribbon */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <Image
              src="/Gallery/ribbonbelow.svg"
              alt="Ribbon below"
              width={1920}
              height={80}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      {/* ================= MOBILE VIEW ================= */}
      {isPhone && (
        <div className="relative w-full min-h-screen bg-amber-50 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/background-gallery.svg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Top Ribbon */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <Image
              src="/Gallery/ribbonabove.svg"
              alt="Ribbon above"
              width={1920}
              height={50}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-20 min-h-screen flex flex-col items-center justify-center gap-8 py-24 px-4">
            <div className="w-full max-w-xs">
              <Image
                src="/Gallery/board1.svg"
                alt="Board 1"
                width={300}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="w-full max-w-xs flex flex-col gap-4">
              <Image
                src="/Gallery/board2part1.svg"
                alt="PHOTO Banner"
                width={600}
                height={200}
                className="w-full h-auto"
                priority
              />
              <Image
                src="/Gallery/board2part2.svg"
                alt="GALLERY Banner"
                width={600}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Bottom Ribbon */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <Image
              src="/Gallery/ribbonbelow.svg"
              alt="Ribbon below"
              width={1920}
              height={50}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
