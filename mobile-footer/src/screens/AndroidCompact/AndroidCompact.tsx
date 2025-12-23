import { useEffect, useState } from "react";

const socialIcons = [
  { src: "/social-icons-3.svg", alt: "Instagram" },
  { src: "/social-icons-2.svg", alt: "LinkedIn" },
  { src: "/social-icons.svg", alt: "Facebook" },
  { src: "/social-icons-1.svg", alt: "Twitter" },
];

const decorativeImages = [
  {
    src: "/vector-6.svg",
    className: "w-[5.98%] h-[2.89%] top-[19.87%] left-[24.26%]",
    alt: "Vector",
  },
  {
    src: "/vector-5.svg",
    className: "w-[3.78%] h-0 top-[22.26%] left-[12.43%]",
    alt: "Vector",
  },
  {
    src: "/vector-1.svg",
    className: "w-[6.40%] h-[2.04%] top-[19.52%] left-[17.15%]",
    alt: "Vector",
  },
  {
    src: "/vector-9.svg",
    className: "w-[4.36%] h-0 top-[46.05%] left-[75.12%]",
    alt: "Vector",
  },
  {
    src: "/vector.svg",
    className: "w-[6.11%] h-[2.10%] top-[44.06%] left-[82.67%]",
    alt: "Vector",
  },
];

const leftSideImages = [
  {
    src: "/vector-3.svg",
    className: "top-[534px] left-[29px] w-[142px] h-[232px]",
    alt: "Vector",
  },
  {
    src: "/vector-6-1.svg",
    className: "top-[567px] -left-px w-[212px] h-[237px]",
    alt: "Vector",
  },
  {
    src: "/vector-7.svg",
    className: "top-[590px] left-[55px] w-[157px] h-[241px]",
    alt: "Vector",
  },
  {
    src: "/vector-2.svg",
    className: "top-[529px] left-[-35px] w-[142px] h-[232px]",
    alt: "Vector",
  },
  {
    src: "/vector-8.svg",
    className: "top-[630px] left-10 w-[142px] h-[232px]",
    alt: "Vector",
  },
  {
    src: "/vector-1-1.svg",
    className: "top-[569px] left-[-59px] w-36 h-[188px]",
    alt: "Vector",
  },
  {
    src: "/vector-4.svg",
    className: "top-[632px] -left-6 w-[157px] h-[241px]",
    alt: "Vector",
  },
  {
    src: "/vector-5-1.svg",
    className: "top-[649px] -left-7 w-[157px] h-[241px]",
    alt: "Vector",
  },
  {
    src: "/vector-14-2.svg",
    className: "top-[715px] left-[-54px] w-[271px] h-[331px]",
    alt: "Vector",
  },
  {
    src: "/vector-11.svg",
    className: "top-[756px] left-[-31px] w-[237px] h-[249px]",
    alt: "Vector",
  },
  {
    src: "/vector-14.svg",
    className: "top-[802px] left-[-18px] w-[147px] h-[223px]",
    alt: "Vector",
  },
];

const bottomGroups = [
  {
    src: "/group-1.png",
    className: "w-[32.77%] h-[7.52%] top-[93.57%] left-0",
    alt: "Group",
  },
  {
    src: "/group-2.png",
    className: "w-[32.77%] h-[7.52%] top-[94.87%] left-0",
    alt: "Group",
  },
  {
    src: "/group-3.png",
    className: "w-[32.77%] h-[7.52%] top-[91.28%] left-[20.59%]",
    alt: "Group",
  },
  {
    src: "/group-4.png",
    className: "w-[32.77%] h-[7.52%] top-[93.46%] left-[75.20%]",
    alt: "Group",
  },
  {
    src: "/group-5.png",
    className: "w-[32.77%] h-[7.52%] top-[94.00%] left-[12.82%]",
    alt: "Group",
  },
  {
    src: "/group-6.png",
    className: "w-[27.12%] h-[11.47%] top-[95.25%] left-[37.67%]",
    alt: "Group",
  },
  {
    src: "/group-7.png",
    className: "w-[29.72%] h-[9.16%] top-[89.86%] left-[7.28%]",
    alt: "Group",
  },
  {
    src: "/group-8.png",
    className: "w-[35.19%] h-[10.12%] top-[85.61%] left-[23.30%]",
    alt: "Group",
  },
  {
    src: "/group-9.png",
    className: "w-[47.36%] h-[6.76%] top-[92.07%] left-[61.24%]",
    alt: "Group",
  },
  {
    src: "/group-10.png",
    className: "w-[34.57%] h-[10.25%] top-[91.94%] left-[51.70%]",
    alt: "Group",
  },
];

const rightSideGroups = [
  {
    src: "/group-11.png",
    className: "w-[59.71%] h-[10.47%] top-[91.17%] left-[69.90%]",
    alt: "Group",
  },
  {
    src: "/group-12.png",
    className: "w-[32.79%] h-[7.49%] top-[87.46%] left-[5.56%]",
    alt: "Group",
  },
  {
    src: "/group-13.png",
    className: "w-[32.93%] h-[7.52%] top-[87.24%] left-[44.20%]",
    alt: "Group",
  },
];

export const AndroidCompact = (): JSX.Element => {
  const [scale, setScale] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      // Calculate independent scales to fill the screen strictly
      const scaleX = vw / 412;
      const scaleY = vh / 917;
      setScale({ x: scaleX, y: scaleY });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-screen bg-[#FCD1A6] overflow-hidden relative">
      <div 
        className="absolute top-0 left-0 w-[412px] h-[917px] bg-white overflow-hidden shadow-2xl origin-top-left"
        style={{
          transform: `scale(${scale.x}, ${scale.y})`
        }}
      >
        <div className="absolute top-0 left-0.5 w-[410px] h-[917px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_31%,rgba(255,255,255,1)_0%,rgba(252,209,166,1)_100%)]">
          <div className="absolute top-[calc(50.00%_-_258px)] left-[calc(50.00%_-_83px)] w-[164px] h-[164px] bg-white rounded-[1000px]" />

          {/* Top Birds */}
          <img
            className="absolute w-[24.54px] h-[26.51px] top-[182.22px] left-[99.46px]"
            alt="Vector"
            src="/top-bird-1.svg"
          />
          <img
            className="absolute w-[15.48px] h-[11.29px] top-[204.15px] left-[50.98px]"
            alt="Vector"
            src="/top-bird-2.svg"
          />
          <img
            className="absolute w-[26.24px] h-[18.66px] top-[179px] left-[70.3px]"
            alt="Vector"
            src="/top-bird-3.svg"
          />

          {decorativeImages.map((img, index) => (
            <img
              key={`decorative-${index}`}
              className={`absolute ${img.className}`}
              alt={img.alt}
              src={img.src}
            />
          ))}

          <img
            className="absolute top-[242px] left-[54px] w-[302px] h-[90px]"
            alt="INCAND ESCENCE"
            src="/title-group.svg"
          />

          <img
            className="absolute top-[348px] left-[84px] w-[239px] h-[41px]"
            alt="Tribal Tapestry"
            src="/tribal-tapestry.svg"
          />

          <img
            className="absolute top-[422px] left-[308px] w-[18px] h-[14px]"
            alt="Vector"
            src="/bottom-bird.svg"
          />

          <img
            className="absolute top-44 left-[285px] w-20 h-[63px]"
            alt="Group"
            src="/group-48096173.png"
          />

          <img
            className="absolute h-[4.47%] top-[37.95%] left-[calc(50.00%_-_121px)] w-[239px]"
            alt="Vector"
            src="/vector-10.svg"
          />

          <button 
            className="absolute top-[54px] left-[20px] w-[148px] h-[42px] hover:opacity-90 transition-opacity"
            aria-label="Brochure"
          >
            <img
              className="w-full h-full"
              alt="Brochure"
              src="/brochure-group.svg"
            />
          </button>

          <img
            className="absolute top-[784px] left-[287px] w-[191px] h-[183px]"
            alt="Vector"
            src="/vector-12-1.svg"
          />

          <img
            className="absolute top-[757px] left-[301px] w-[191px] h-40"
            alt="Vector"
            src="/vector-13.svg"
          />

          <img
            className="absolute top-[527px] left-[236px] w-[209px] h-[364px]"
            alt="Group"
            src="/group-3-1.png"
          />

          <img
            className="absolute top-[771px] left-[292px] w-[190px] h-[182px]"
            alt="Vector"
            src="/vector-12.svg"
          />

          {rightSideGroups.map((img, index) => (
            <img
              key={`right-group-${index}`}
              className={`absolute ${img.className}`}
              alt={img.alt}
              src={img.src}
            />
          ))}

          <img
            className="absolute top-[543px] left-[calc(50.00%_-_44px)] w-[88px] h-[11px]"
            alt="Contact Us"
            src="/contact-us.svg"
          />

          <nav
            className="absolute top-[589px] left-[calc(50.00%_-_89px)] w-[170px] h-[17px] flex gap-[34.1px] items-center justify-between"
            aria-label="Social media links"
          >
            {socialIcons.map(({ src, alt }, index) => (
              <button
                key={`social-${index}`}
                className="w-[17px] h-[17px] flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label={alt}
              >
                <img src={src} alt={alt} className="w-full h-full" />
              </button>
            ))}
          </nav>
        </div>

        <img
          className="absolute w-[27.07%] h-[6.43%] top-[89.34%] left-[40.79%]"
          alt="Group"
          src="/group.png"
        />

        {leftSideImages.map((img, index) => (
          <img
            key={`left-${index}`}
            className={`absolute ${img.className}`}
            alt={img.alt}
            src={img.src}
          />
        ))}

        <img
          className="absolute top-[821px] left-[182px] w-[238px] h-[216px]"
          alt="Vector"
          src="/vector-14-1.svg"
        />

        {bottomGroups.map((img, index) => (
          <img
            key={`bottom-${index}`}
            className={`absolute ${img.className}`}
            alt={img.alt}
            src={img.src}
          />
        ))}

        <footer className="absolute top-[864px] left-0 w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center [font-family:'Inter',Helvetica] text-black text-[10px] text-center font-bold leading-[1.1]">
            <span>MADE IN COLLABORATION</span>
            <span>WITH GDG NIT SILCHAR</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
