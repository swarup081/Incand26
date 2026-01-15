"use client";
import React from "react";
import Image from "next/image";
import CardHover from "./CardHover";

const UPPER_CARD_IMAGE =
  "https://res.cloudinary.com/dig1vxljf/image/upload/v1768216195/Component_96_fjlycb.png";

const LOWER_CARD_IMAGE =
  "https://res.cloudinary.com/dig1vxljf/image/upload/v1768216273/Component_96_1_uapuri.png";

const eventsDay1 = [
  { id: 1, title: "COSTOPIA" },
  { id: 2, title: "COSTOPIA" },
  { id: 3, title: "COSTOPIA" },
  { id: 4, title: "COSTOPIA" },
];

const eventsDay2 = [
  { id: 5, title: "COSTOPIA" },
  { id: 6, title: "COSTOPIA" },
  { id: 7, title: "COSTOPIA" },
  { id: 8, title: "COSTOPIA" },
];

const eventsDay3 = [
  { id: 9, title: "COSTOPIA" },
  { id: 10, title: "COSTOPIA" },
  { id: 11, title: "COSTOPIA" },
  { id: 12, title: "COSTOPIA" },
];

const DayEvents = () => {
  return (
    <section className="relative z-30 -mt-24 w-full overflow-hidden sm:-mt-60">
      <div className="absolute inset-0 z-0 sm:hidden">
        <Image
          src="https://res.cloudinary.com/dig1vxljf/image/upload/v1768223559/events_mobile_view_1_avxwzm.png"
          alt="Mobile Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="relative w-full">
          <div className="absolute inset-0 z-0 hidden sm:block">
            <Image
              src="https://res.cloudinary.com/dig1vxljf/image/upload/v1768213636/Frame_1000008510_qiglnj.png"
              alt="Day 1 Background"
              fill
              className="scale-110 object-cover object-top"
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 pt-70 pb-20 sm:pt-48 sm:pb-32">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {eventsDay1.map((event) => (
                <div key={event.id} className="flex justify-center">
                  <CardHover
                    upperImage={UPPER_CARD_IMAGE}
                    lowerImage={LOWER_CARD_IMAGE}
                    eventName={event.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="relative -mt-20 w-full sm:-mt-40">
          <div className="absolute inset-0 z-0 hidden sm:block">
            <Image
              src="https://res.cloudinary.com/dig1vxljf/image/upload/v1768214357/Frame_1000008506_jbkk6e.png"
              alt="Day 2 Background"
              fill
              className="scale-110 object-cover object-top"
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:pt-64 sm:pb-32">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {eventsDay2.map((event) => (
                <div key={event.id} className="flex justify-center">
                  <CardHover
                    upperImage={UPPER_CARD_IMAGE}
                    lowerImage={LOWER_CARD_IMAGE}
                    eventName={event.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Day 3 */}
        <div className="relative -mt-20 w-full sm:-mt-40">
          <div className="absolute inset-0 z-0 hidden sm:block">
            <Image
              src="https://res.cloudinary.com/dig1vxljf/image/upload/v1768214482/Frame_1000008509_g8ykxh.png"
              alt="Day 3 Background"
              fill
              className="scale-110 object-cover object-top"
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 pt-32 pb-32 sm:pt-64 sm:pb-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {eventsDay3.map((event) => (
                <div key={event.id} className="flex justify-center">
                  <CardHover
                    upperImage={UPPER_CARD_IMAGE}
                    lowerImage={LOWER_CARD_IMAGE}
                    eventName={event.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayEvents;
