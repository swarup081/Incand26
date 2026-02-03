"use client";

import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 2,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 3,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 4,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 5,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 6,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 7,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
  {
    id: 8,
    time: "06:00 pm",
    title: "Komedi Knight",
    desc: "An evening of sharp wit, honest humor, and loud laughter.",
  },
];

export default function EventTimeline() {
  return (
    <div className="relative flex min-h-[500px] w-max items-center px-10 py-20">
      {/* Central Axis Line */}
      <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full bg-[#4a4a4a]" />

      {events.map((ev, i) => {
        // Even IDs (2, 4, 6, 8) are TOP events in the image?
        // Let's re-verify image.
        // Image: 1 is Bottom. 2 is Top.
        // Array index 0 -> ID 1 -> Bottom. (isTop = false)
        // Array index 1 -> ID 2 -> Top. (isTop = true)
        const isTop = (i + 1) % 2 === 0;

        return (
          <div key={ev.id} className="relative mx-12 flex flex-col items-start">
            {/* --- TOP SECTION --- */}
            <div className="flex h-[200px] w-[400px] flex-col justify-end pb-4 pl-8">
              {isTop ? (
                // CONTENT (Top)
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-4">
                    <span className="font-hitchcut text-8xl leading-none text-[#1a1a1a]">
                      {ev.id}
                    </span>
                    <span className="font-oxanium text-2xl font-bold text-[#d94d2e]">
                      {ev.title}
                    </span>
                  </div>
                  <p className="font-oxanium mt-2 max-w-xs text-sm text-gray-500">
                    {ev.desc}
                  </p>
                </div>
              ) : (
                // TIME (Top for Bottom Event)
                <div className="flex w-full items-end pb-2">
                  <span className="font-oxanium text-xl font-bold text-[#d94d2e]">
                    {ev.time}
                  </span>
                </div>
              )}
            </div>

            {/* --- CONNECTOR / AXIS POINT --- */}
            <div className="relative z-10 flex h-0 w-full items-center">
              {/* Connector Line Logic */}
              <div className="absolute top-0 left-8 h-10 w-10 -translate-y-1/2 translate-x-1/2">
                {/*
                    If isTop: Connector goes from Axis UP to Content.
                    Curve: Start at Axis, go Up, curve Right.
                */}
                {isTop ? (
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    className="absolute bottom-0 left-0 -translate-x-[2px] translate-y-1/2 overflow-visible"
                  >
                    {/* Path: From center (0,0 relative) UP and RIGHT */}
                    <path
                      d="M 0 0 V -30 Q 0 -50 20 -50"
                      fill="none"
                      stroke="#5a5a5a"
                      strokeWidth="2"
                    />
                    <path d="M 18 -54 L 24 -50 L 18 -46" fill="#5a5a5a" />
                  </svg>
                ) : (
                  // If Bottom: Connector goes from Axis DOWN to Content.
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    className="absolute top-0 left-0 -translate-x-[2px] -translate-y-1/2 overflow-visible"
                  >
                    <path
                      d="M 0 0 V 30 Q 0 50 20 50"
                      fill="none"
                      stroke="#5a5a5a"
                      strokeWidth="2"
                    />
                    <path d="M 18 54 L 24 50 L 18 46" fill="#5a5a5a" />
                  </svg>
                )}
              </div>
            </div>

            {/* --- BOTTOM SECTION --- */}
            <div className="flex h-[200px] w-[400px] flex-col justify-start pt-4 pl-8">
              {!isTop ? (
                // CONTENT (Bottom)
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-4">
                    <span className="font-hitchcut text-8xl leading-none text-[#1a1a1a]">
                      {ev.id}
                    </span>
                    <span className="font-oxanium text-2xl font-bold text-[#d94d2e]">
                      {ev.title}
                    </span>
                  </div>
                  <p className="font-oxanium mt-2 max-w-xs text-sm text-gray-500">
                    {ev.desc}
                  </p>
                </div>
              ) : (
                // TIME (Bottom for Top Event)
                <div className="flex w-full items-start pt-2">
                  <span className="font-oxanium text-xl font-bold text-[#d94d2e]">
                    {ev.time}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* End Arrow on Axis */}
       <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#e6e0d4] z-10 -translate-y-1/2 translate-x-1/2 rounded-full border border-[#4a4a4a]"></div>
    </div>
  );
}
