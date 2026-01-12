"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

// type LetterProps = {
//   src: string        // letter SVG (mask)
//   fillSrc: string   // ONE hover image
//   alt: string
//   className?: string
// }

// const Letter = ({ src, fillSrc, alt, className }: LetterProps) => {
//   return (
//     <div className="group relative h-[16vh] w-[8vw] flex items-end justify-center cursor-pointer">

//       {/* NORMAL LETTER — CENTERED ABSOLUTELY */}
//       <div className="absolute inset-0 flex items-end justify-center">
//         <Image
//           src={src}
//           alt={alt}
//           width={0}
//           height={0}
//           className={`
//             h-full w-auto
//             transition-opacity duration-200
//             group-hover:opacity-0
//             ${className ?? ""}
//           `}
//         />
//       </div>

//       {/* HOVER FILL — SAME CENTERING MODEL */}
//       <div
//         className="
//           absolute inset-0
//           opacity-0
//           transition-opacity duration-200
//           ease-[cubic-bezier(0.22,1,0.36,1)]

//           filter
//           group-hover:opacity-100
//           group-hover:delay-0
//           group-hover:contrast-[1.15]
//           group-hover:saturate-[1.1]
//           group-hover:brightness-[0.9]
//           /* 🔥 thin black border illusion */
//     group-hover:drop-shadow-[0_0_0.6px_black]
//           pointer-events-none
//         "
//         style={{
//           backgroundImage: `url(${fillSrc})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",

//           WebkitMaskImage: `url(${src})`,
//           maskImage: `url(${src})`,
//           WebkitMaskRepeat: "no-repeat",
//           maskRepeat: "no-repeat",
//           WebkitMaskPosition: "center",
//           maskPosition: "center",
//           WebkitMaskSize: "100% 100%",
//           maskSize: "100% 100%",
//         }}
//       />
//     </div>
//   )
// }


type LetterProps = {
  src: string        // normal image
  hoverSrc: string  // hover image (same size)
  alt: string
  className?: string
}

const Letter = ({ src, hoverSrc, alt, className }: LetterProps) => {
  return (
    <div className="group relative h-[16vh] w-[8vw] flex items-end justify-center cursor-pointer">
      
      {/* NORMAL IMAGE */}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className={`
          absolute
          h-full w-auto
          transition-opacity duration-150
          group-hover:opacity-0
          ${className ?? ""}
        `}
      />

      {/* HOVER IMAGE */}
      <Image
        src={hoverSrc}
        alt={`${alt} hover`}
        width={0}
        height={0}
        className="
          absolute
          h-full w-auto
          opacity-0
          transition-opacity duration-150
          group-hover:opacity-100
        "
      />
    </div>
  )
}


export default function HornbillMiddle() {
  

const eyeRef = useRef<HTMLDivElement>(null)
const eyeSocketRef = useRef<HTMLDivElement>(null)



const headRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  let rafId: number

  const handleMouseMove = (e: MouseEvent) => {
    if (!eyeRef.current || !eyeSocketRef.current) return

    const socketRect = eyeSocketRef.current.getBoundingClientRect()

    // TRUE, FIXED CENTER (never moves)
    const cx = socketRect.left + socketRect.width / 2
    const cy = socketRect.top + socketRect.height / 2

    const dx = e.clientX - cx
    const dy = e.clientY - cy

    const distance = Math.sqrt(dx * dx + dy * dy)

    // TRUE CIRCLE
    const radius = socketRect.width / 2

    let moveX = 0
    let moveY = 0

    // Cursor OUTSIDE circle → move pupil
    if (distance > radius) {
      const nx = dx / distance
      const ny = dy / distance

      const maxOffset = radius * 0.6 // stays INSIDE circle
      moveX = nx * maxOffset
      moveY = ny * maxOffset
    }

    cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => {
      eyeRef.current!.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  }

  window.addEventListener("mousemove", handleMouseMove)
  return () => window.removeEventListener("mousemove", handleMouseMove)
}, [])


  return (
  <section className="relative flex min-h-screen w-full justify-center bg-[#f6eddc] py-14 overflow-x-hidden">
    
    {/* ===== ONE GLOBAL WRAPPER ===== */}
    <div className="relative flex flex-col items-center scale-[0.9] top-[4vh] right-[2vw]">

      {/* ================= Hornbill (TOP) ================= */}
      <div className="relative mb-[3vh]">
        <div className="relative w-[20vw] h-[20vh] left-[1.7vw] -top-[9vh]">
          <div
            ref={headRef}
            className="relative w-[60vw] h-[40vh] scale-[1.7] top-[1vh] right-[22vw]"
          >
            {/* Head cap */}
            <Image
              src="/Hornbill/part5.svg"
              alt="Hornbill cap"
              width={0}
              height={0}
              className="absolute left-[20vw] top-[10.3vh] w-[50vw] h-[15vh] z-20"
            />

            {/* Eye socket */}
            <div
              ref={eyeSocketRef}
              className="absolute left-[42.95vw] top-[18.6vh] z-50 w-[0.7vw] h-[0.7vw]"
            >
              <div ref={eyeRef} className="absolute inset-0">
                <Image
                  src="/Hornbill/part3.svg"
                  alt="Hornbill eye"
                  width={0}
                  height={0}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Head */}
          <Image
            src="/Hornbill/part1.svg"
            alt="Hornbill head"
            width={0}
            height={0}
            className="absolute left-[34.5vw] top-[18vh] w-[9vw] h-[10vh] z-10"
          />

          {/* Beak band */}
          <Image
            src="/Hornbill/part2.svg"
            alt="Hornbill beak band"
            width={0}
            height={0}
            className="absolute left-[34.5vw] top-[10.5vh] w-[6.5vw] h-[10vh] z-20"
          />

          {/* Beak tip */}
          <Image
            src="/Hornbill/part4.svg"
            alt="Hornbill beak tip"
            width={0}
            height={0}
            className="absolute left-[41.5vw] top-[14.5vh] w-[3vw] h-[6vh] z-30"
          />
        </div>
      </div>

      {/* ================= TEXT BLOCK ================= */}
      <div className="flex items-start relative left-[0.5vw]">
        {/* LEFT: INCAND */}
        <div className="flex flex-col gap-[3.2vh] ">
          <div className="flex items-end gap-1 scale-[1] origin-left">
  <div className="translate-x-[2vw]">
    <Letter src="/Hornbill/I.svg" hoverSrc="/Hornbill/Ihover.svg" alt="I" />
  </div>

  <Letter src="/Hornbill/N.svg" hoverSrc="/Hornbill/Nhover.svg" alt="N" />
  <Letter src="/Hornbill/C.svg" hoverSrc="/Hornbill/Chover.svg" alt="C" />
  <Letter src="/Hornbill/A.svg" hoverSrc="/Hornbill/Ahover.svg" alt="A" />
  <Letter src="/Hornbill/N2.svg" hoverSrc="/Hornbill/N2hover.svg" alt="N2" />
  <Letter src="/Hornbill/D.svg" hoverSrc="/Hornbill/Dhover.svg" alt="D" />
</div>


         <div className="relative flex items-end gap-1 scale-[0.775] origin-left left-[4.7vw] ">
  <Letter src="/Hornbill/E.svg" hoverSrc="/Hornbill/Ehover.svg" alt="E" />
  <Letter src="/Hornbill/S.svg" hoverSrc="/Hornbill/Shover.svg" alt="S" />
  <Letter src="/Hornbill/C2.svg" hoverSrc="/Hornbill/C2hover.svg" alt="C2" />
  <Letter src="/Hornbill/E2.svg" hoverSrc="/Hornbill/E2hover.svg" alt="E2" />
  <Letter src="/Hornbill/N3.svg" hoverSrc="/Hornbill/N3hover.svg" alt="N3" />
  <Letter src="/Hornbill/C3.svg" hoverSrc="/Hornbill/C3hover.svg" alt="C3" />
  <Letter src="/Hornbill/E3.svg" hoverSrc="/Hornbill/E3hover.svg" alt="E3" />
</div>

        </div>

        {/* RIGHT: 2026 */}
        <div className="group relative cursor-pointer right-[6vw]">

  {/* NORMAL 2026 */}
  <Image
    src="/Hornbill/title2.svg"
    alt="2026"
    width={0}
    height={0}
    className="

      h-[33.5vh]
      w-auto
      transition-all
      duration-200
      group-hover:opacity-0
      group-hover:scale-[0.96]
    "
  />

  {/* ANIMATED 2026 (hover) */}
  <Image
    src="/Hornbill/title3.svg" // or .webp / .mp4 poster
    alt="2026 animated"
    width={0}
    height={0}
    className="
      absolute inset-0
      h-[33.5vh]
      w-auto
      opacity-0
      transition-all
      duration-200
      group-hover:opacity-100
      group-hover:scale-[0.98]
      
      p-[0.6vh]
    "
  />

</div>


      </div>
      
    

      {/* ================= OTHER BIRDS ================= */}
      <div className="relative  w-full">
        {/* LEFT BIRDS (3) */}
        <div className="relative right-[1.5vw] bottom-[50vh] flex ">
          <Image
            src="/Hornbill/bird2.svg"
            alt="Flying birds left 1"
            width={0}
            height={0}
            className=" relative w-[4vw] h-[4vh] top-[6vh] translate-x-[1vw]"
          />
          <Image
            src="/Hornbill/bird1.svg"
            alt="Flying birds left 2"
            width={0}
            height={0}
            className="w-[5vw] h-[5vh] "
          />
          <Image
            src="/Hornbill/bird3.svg"
            alt="Flying birds left 3"
            width={0}
            height={0}
            className="w-[6vw] h-[6vh] translate-y-[2vh] -translate-x-[2vw]"
          />
        </div>

        {/* RIGHT BIRDS (2) */}
        <div className="relative left-[57vw] flex top-[2vh] gap-[0.5vw]">
          <Image
            src="/Hornbill/bird5.svg"
            alt="Flying birds right 1"
            width={0}
            height={0}
            className="w-[5vw] h-[5vh] "
          />
          <Image
            src="/Hornbill/bird4.svg"
            alt="Flying birds right 2"
            width={0}
            height={0}
            className="w-[6vw] h-[6vh] -translate-y-[8vh]"
          />
        </div>
      </div>
      {/* Tribal Tapestry */} 
      <Image 
        src="/Hornbill/title.svg" 
        alt="Tribal Tapestry"  
        width={0} 
        height={0} 
        className="relative w-[48vw] h-[10.5vh] -left-[1vw] bottom-[6vh]" 
      /> 


    </div>
    {/* ===== END GLOBAL WRAPPER ===== */}

  </section>
)

  }
