"use client";
import React from "react";
import InfiniteScroller from "~/components/InfiniteScroller";
import GlobalScrollStyles from "~/components/GlobalScrollStyles_Sponsers";
import { sponsorsData } from "~/data/sponsors";
import TribalTrackbar from "~/components/TrivalNavbar"; 

export default function HomePage() {
  const data = sponsorsData;

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-neutral-900 text-neutral-100">
      <GlobalScrollStyles />

      {/* --- HOME --- */}
      <section
        id="home"
        className="flex h-screen w-full snap-start flex-col items-center justify-center bg-gradient-to-b from-[#fdfcf0] to-[#f4e4bc] px-4 text-center"
      >
        <h1 className="font-hitchcut text-6xl font-black text-amber-900 drop-shadow-xl sm:text-7xl md:text-8xl lg:text-9xl">
          INCANDESCENCE 2025
        </h1>
      </section>

      {/* ---EVENTS --- */}
      <section
        id="events"
        className="flex h-screen w-full snap-start flex-col items-center justify-center bg-[#e8dfc5] px-4 text-center"
      >
        <h1 className="font-hitchcut text-5xl font-black text-[#520000] drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
          EVENTS
        </h1>
       
      </section>

      {/* ---  SPONSORS --- */}
      <section
        id="sponsors"
        className="relative min-h-screen w-full snap-start bg-cover bg-center bg-no-repeat md:h-screen md:overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgechlqls/image/upload/v1766212699/BACKUP_SPONSORS_osnbmg.png')",
        }}
      >
        <div className="mx-auto h-full max-w-8xl font-hitchcut lg:px-10 py-12 md:py-0 flex flex-col justify-center">
          
          {/* DESKTOP LAYOUT */}
          <div className="hidden h-full grid-cols-2 items-center gap-12 md:grid">
            {/* TEXT */}
            <div className="pr-8">
              <h1 className="mb-8 text-7xl font-black text-amber-900 drop-shadow-2xl">
                PREVIOUS SPONSORS
              </h1>
              <p className="text-3xl leading-relaxed font-medium text-[#000000]">
                NIT Silchar&apos;s cultural extravaganza invites you into a vibrant{" "}
                <span className="font-bold text-[#008080]">
                  Tribal Tapestry
                </span>
                —a journey woven with ancient rhythms, timeless traditions, and
                stories passed through generations, where heritage comes alive
                and brilliance shines from the roots.
              </p>
            </div>

            {/* SCROLLERS */}
            <div className="flex h-full gap-8 overflow-hidden">
              <div className="w-1/2">
                <InfiniteScroller direction="down" sponsors={data.column1} />
              </div>
              <div className="w-1/2">
                <InfiniteScroller direction="up" sponsors={data.column2} />
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="flex flex-col gap-8 py-12 px-4 pb-32 md:hidden">
            <h1 className="text-center text-5xl font-black text-[#520000]">
              PREVIOUS SPONSORS
            </h1>
            <p className="px-4 text-center text-xl text-[#000000]">
              NIT Silchar&apos;s cultural extravaganza invites you into a vibrant{" "}
              <span className="font-bold text-[#008080]">Tribal Tapestry</span>
              —a journey woven with ancient rhythms, timeless traditions, and
              stories passed through generations.
            </p>
            <div className="flex flex-col gap-6">
              <InfiniteScroller direction="left" sponsors={data.column1} />
              <InfiniteScroller direction="right" sponsors={data.column2} />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section
        id="contact"
        className="flex h-screen w-full snap-start flex-col items-center justify-center bg-[#d4c59a] px-4 text-center"
      >
        <h1 className="font-hitchcut text-5xl font-black text-[#361E1E] drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
          CONTACT
        </h1>
       
      </section>
      <TribalTrackbar />
      
    </main>
  );
}