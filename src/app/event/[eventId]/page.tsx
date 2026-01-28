"use client";

import Image from "next/image";
import events from "../../../data/event.json";
import { useParams, useRouter } from "next/navigation";

const images = [
  "/image/Vector1.png",
  "/image/Vector2.png",
  "/image/Group.png",
  "/image/Group1.png",
  "/image/Vector1.png",
  "/image/Vector2.png",
  "/image/Group.png",
  "/image/Group1.png",
];

export const runtime = "edge";

export default function EventPoster() {
  const params = useParams();
  const router = useRouter();
  const eventId = Number(params.eventId);

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  const currentIndex = events.findIndex((e) => e.id === eventId);

  if (currentIndex === -1) {
    return <div>Invalid event</div>;
  }

  const dateObj = new Date(event.date);
  const isValid = !isNaN(dateObj.getTime());

  // If valid, format the numbers. If not, use a placeholder "--"
  const day = isValid ? String(dateObj.getDate()).padStart(2, "0") : "--";
  const month = isValid
    ? String(dateObj.getMonth() + 1).padStart(2, "0")
    : "--";
  const year = isValid ? String(dateObj.getFullYear()).slice(-2) : "--";

  const isAlternateTheme = event.id % 2 === 1;

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % events.length;
    const nextId = events[nextIndex]!.id;
    router.push(`/event/${nextId}`);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + events.length) % events.length;
    const prevId = events[prevIndex]!.id;
    router.push(`/event/${prevId}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid h-[55rem] min-h-screen w-full max-w-[43.75rem] min-w-screen grid-cols-10 grid-rows-22 divide-x divide-y border border-black bg-[#fffffe] sm:h-[25rem] sm:grid-cols-21 sm:grid-rows-11">
        
        {/* Background Tiles Loop */}
        {Array.from({ length: 21 * 16 }).map((_, i) => {
          const src = images[i % images.length]!;

          return (
            <div
              key={i}
              className={`relative overflow-hidden md:border border-black transition-colors duration-300  ${
                isAlternateTheme ? "bg-[#4F2222]" : ""
              } `}
            >
              <Image
                src={src}
                fill
                className={`object-contain transition-all duration-300 ${
                  isAlternateTheme ? "opacity-30" : "opacity-50"
                }`}
                alt=""
              />
            </div>
          );
        })}

        {/* Main Event Image */}
        <div
          className={`relative overflow-hidden 
          col-span-8 col-start-2 row-span-9 row-start-2 
          sm:col-span-8 sm:col-start-2 sm:row-span-8 sm:row-start-2 ${
            isAlternateTheme ? "border border-white" : ""
          }`}
        >
          <Image
            src={event.image}
            alt="Event"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Event ID */}
        <div
          className={`flex items-center justify-center text-xl font-bold transition-colors duration-300 
          col-span-1 col-start-2 row-span-1 row-start-12 
          sm:col-span-1 sm:col-start-11 sm:row-start-2 ${
            isAlternateTheme
              ? "bg-[#1E0C0C] text-white  border border-white"
              : "bg-[#FFF8EC] text-black"
          } `}
        >
          {event.id}
        </div>

        {/* Day */}
        <div
          className={`flex items-center justify-center text-xs font-semibold transition-colors duration-300 
          col-span-1 col-start-7 row-span-1 row-start-12 
          sm:col-span-1 sm:col-start-17 sm:row-start-2 sm:text-2xl md:text-xl ${
            isAlternateTheme
              ? "bg-[#1E0C0C] text-white  border border-white"
              : "bg-[#FFF8EC] text-black"
          } `}
        >
          {day}
        </div>

        {/* Month */}
        <div
          className={`flex items-center justify-center text-xs font-semibold transition-colors duration-300 
          col-span-1 col-start-8 row-span-1 row-start-12 
          sm:col-span-1 sm:col-start-18 sm:row-start-2 sm:text-2xl md:text-xl ${
            isAlternateTheme
              ? "bg-[#1E0C0C] text-white  border-y-[1px] border-white"
              : "bg-[#FFF8EC] text-black"
          } `}
        >
          {month}
        </div>

        {/* Year */}
        <div
          className={`flex items-center justify-center text-xs font-semibold transition-colors duration-300 
          col-span-1 col-start-9 row-span-1 row-start-12 
          sm:col-span-1 sm:col-start-19 sm:row-start-2 sm:text-2xl md:text-xl ${
            isAlternateTheme
              ? "bg-[#1E0C0C] text-white  border border-white"
              : "bg-[#FFF8EC] text-black"
          } `}
        >
          {year}
        </div>

        {/* Title */}
        <div
          className={`flex items-center justify-center text-[0.9375rem] font-bold transition-colors duration-300 
          col-span-5 col-start-2 row-span-1 row-start-13 
          sm:col-span-7 sm:col-start-11 sm:row-start-4 sm:text-xl md:col-span-8 md:col-start-11 md:text-xl md:leading-normal lg:col-span-6 lg:col-start-11 lg:text-2xl lg:leading-relaxed ${
            isAlternateTheme
              ? "bg-[#1E0C0C] text-white border border-white"
              : "bg-[#FFF8EC] text-black"
          } `}
        >
          {event.title}
        </div>

        {/* Description */}
        <div
          className={`overflow-y-auto p-3 text-xs leading-tight whitespace-pre-line transition-colors duration-300 
          col-span-8 col-start-2 row-span-6 row-start-14 
          sm:col-span-9 sm:col-start-11 sm:row-span-5 sm:row-start-5 sm:text-sm sm:leading-snug md:text-base md:leading-normal lg:text-xl lg:leading-relaxed [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent ${
            isAlternateTheme
              ? "bg-[#1E0C0C] text-white [&::-webkit-scrollbar-thumb]:bg-white/20 border border-white"
              : "bg-[#FFF8EC] text-black [&::-webkit-scrollbar-thumb]:bg-black/20"
          } `}
        >
          {event.description}
        </div>

        {/* Previous Button */}
        <div
          className={`flex items-center justify-center 
          col-span-3 col-start-2 row-span-1 row-start-21 
          sm:col-span-2 sm:col-start-2 sm:row-start-10 ${
            isAlternateTheme
              ? "bg-amber-950 text-white border border-white"
              : "bg-[#FFF8EC] text-white"
          }`}
        >
          <button
            onClick={goPrev}
            className={`cursor-pointer lg:rounded-xl rounded-sm lg:px-4 lg:py-2 py-1 px-2 md:text-[1rem] text-[10px] ${
              isAlternateTheme
                ? "bg-gray-100 text-amber-950"
                : "bg-amber-600 text-white"
            } `}
          >
            PREVIOUS
          </button>
        </div>

        {/* Next Button */}
        <div
          className={`flex items-center justify-center 
          col-span-3 col-start-7 row-start-21 
          sm:col-span-2 sm:col-start-18 sm:row-start-10 ${
            isAlternateTheme
              ? "bg-amber-950 text-white border border-white"
              : "bg-[#FFF8EC] text-white"
          }`}
        >
          <button
            onClick={goNext}
            className={`cursor-pointer lg:rounded-xl rounded-sm lg:px-4 lg:py-2 py-1 px-2 md:text-[1rem] text-[10px] ${
              isAlternateTheme
                ? "bg-gray-100 text-amber-950"
                : "bg-amber-600 text-white"
            } `}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}