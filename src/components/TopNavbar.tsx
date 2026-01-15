"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  route: string; // Renamed from id to route for clarity
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    route: "/", // Changed to root path
    icon: "https://res.cloudinary.com/dgechlqls/image/upload/v1766226889/Group_qp18l8.png",
    label: "Home",
  },

  {
    route: "/events", // Route to Events page
    icon: "https://res.cloudinary.com/dgechlqls/image/upload/v1766226904/Group_2_ur19lj.png",
    label: "Events",
  },
  {
    route: "/gallery", // Route to Gallery page
    icon: "https://res.cloudinary.com/dgechlqls/image/upload/v1766226912/Group_3_centwg.png",
    label: "Photo Gallery",
  },
  {
    route: "/team", // Route to Team page
    icon: "newLanding/Group.png",
    label: "Team",
  },

];

const TopNavbar: React.FC = () => {
  const pathname = usePathname(); // Gets the current URL path
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only handles the initial entry animation now
    setIsLoaded(true);
  }, []);

  return (
    /* Hidden below xl */
    <div
      className={`fixed top-6 left-1/2 z-50 hidden w-full -translate-x-1/2 justify-center transition-opacity duration-700 xl:flex ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex w-full max-w-2xl items-center justify-center gap-10 px-4">
        {/* Background Line */}
        <div
          className={`absolute top-[40px] right-0 left-0 z-0 mx-14 h-3 -translate-y-1/2 rounded-full border-2 border-[#df972b] bg-[#361E1E] shadow-inner transition-all duration-1000 ease-out ${
            isLoaded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        />

        {navItems.map((item) => {
          // Check if current path matches the item route
          const isActive = pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              aria-label={item.label}
              className="group relative z-10 flex flex-col items-center justify-center focus:outline-none"
            >
              {/* Icon Circle */}
              <div
                className={`relative z-20 flex h-20 w-20 scale-90 items-center justify-center rounded-full border-[3px] shadow-2xl transition-all duration-300 ease-out ${
                  isActive
                    ? "scale-90 border-[#FBB752] bg-white"
                    : "border-[#FBB752] bg-black hover:scale-95"
                }`}
              >
                <div className="relative h-3/5 w-3/5">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    unoptimized
                    className="object-contain opacity-100 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Label - Logic updated to show always if active, otherwise on hover */}
              <span
                className={`absolute z-10 -translate-y-2 text-sm font-bold tracking-wider whitespace-nowrap text-[#361E1E] transition-all duration-500 ease-out ${
                  isActive
                    ? "translate-y-12 opacity-100" // Always visible if active
                    : "opacity-0 group-hover:translate-y-12 group-hover:opacity-100" // Hover effect if inactive
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopNavbar;