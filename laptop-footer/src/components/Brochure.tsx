import React from "react";
import { cn } from "../lib/utils";
import brochureIcon1 from "../assets/brochure/brochure-icon-1.svg";
import brochureIcon2 from "../assets/brochure/brochure-icon-2.svg";

interface BrochureProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // Props can be extended if needed
}

export const Brochure = React.forwardRef<HTMLAnchorElement, BrochureProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href="#"
        className={cn("group relative block w-[21vw] h-[5.42vw] cursor-pointer transition-transform duration-700 ease-in-out hover:-rotate-3 select-none", className)}
        style={style}
        {...props}
      >
        {/* Shadow Layer */}
        <div 
            className="absolute bg-black rounded-[3.7vw] transition-all duration-300 ease-out pointer-events-none
                       top-0 left-[0.05vw] w-[20.94vw] h-[5.36vw]
                       group-hover:-top-[1.51vw] group-hover:-left-[0.73vw] group-hover:w-[26.88vw] group-hover:h-[8.8vw]
                       group-hover:bg-[#A25D5D] group-hover:border-[0.16vw] group-hover:border-black group-hover:rounded-[4.64vw]"
        />
        
        {/* Main Layer */}
        <div 
            className="absolute bg-[#751313] border-[0.16vw] border-black rounded-[3.7vw] transition-all duration-300 ease-out
                       top-0 left-0 w-[20.94vw] h-[5.36vw]
                       group-hover:-top-[2.4vw] group-hover:-left-[0.21vw] group-hover:w-[26.82vw] group-hover:h-[8.8vw]
                       group-hover:rounded-[4.64vw]
                       overflow-hidden z-10"
        >
             {/* Text */}
             <span 
                className="absolute font-sans transition-all duration-300 ease-out z-20 whitespace-nowrap tracking-wider select-none
                           left-[3.49vw] top-[1.25vw] text-[#FCDBBB] text-[2.29vw] leading-[1.2]
                           group-hover:left-[4.53vw] group-hover:top-[1.93vw] group-hover:text-white group-hover:text-[2.86vw]"
                style={{ fontFamily: "'Russo One', sans-serif" }}
             >
               BROCHURE
             </span>

             {/* Image 1 (Left) */}
             <img 
                src={brochureIcon1} 
                alt="" 
                draggable={false}
                className="absolute transition-all duration-300 ease-out max-w-none z-30 pointer-events-none select-none
                           -left-[2.55vw] -top-[2.5vw] w-[6.93vw] h-[11.41vw]
                           group-hover:-left-[3.44vw] group-hover:-top-[1.51vw] group-hover:w-[9.84vw] group-hover:h-[15vw]"
             />

             {/* Image 2 (Right) */}
             <img 
                src={brochureIcon2} 
                alt="" 
                draggable={false}
                className="absolute transition-all duration-300 ease-out max-w-none z-30 pointer-events-none select-none
                           left-[16.56vw] -top-[2.6vw] w-[6.93vw] h-[11.41vw]
                           group-hover:left-[20.57vw] group-hover:-top-[3.54vw] group-hover:w-[9.84vw] group-hover:h-[15vw]"
             />
        </div>
      </a>
    );
  }
);

Brochure.displayName = "Brochure";
