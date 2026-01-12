"use client";

import { MemberCard } from "./MemberCard";

// Core team member data
const coreMembers = [
    {
        maskGroup: "/team/mask-group.webp",
        frameImage: "/team/e45fa6e1f8e8c01193d414257a13c3d2-1-5.webp",
        profileImage: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp",
        socialIcons: [
            { maskGroup: "/team/mask-group-1.webp", icon: "/team/fb.webp", link: "#" },
            { maskGroup: "/team/mask-group-2.webp", icon: "/team/github.webp", link: "#" },
            { maskGroup: "/team/mask-group-3.webp", icon: "/team/linkedin.webp", link: "#" },
        ],
        name: "Hibino Kafka",
        role: "UI/UX Designer",
    },
    {
        maskGroup: "/team/mask-group.webp",
        frameImage: "/team/e45fa6e1f8e8c01193d414257a13c3d2-1-5.webp",
        profileImage: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp",
        socialIcons: [
            { maskGroup: "/team/mask-group-1.webp", icon: "/team/fb.webp", link: "#" },
            { maskGroup: "/team/mask-group-2.webp", icon: "/team/github.webp", link: "#" },
            { maskGroup: "/team/mask-group-3.webp", icon: "/team/linkedin.webp", link: "#" },
        ],
        name: "Hibino Kafka",
        role: "UI/UX Designer",
    },
    {
        maskGroup: "/team/mask-group.webp",
        frameImage: "/team/e45fa6e1f8e8c01193d414257a13c3d2-1-5.webp",
        profileImage: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp",
        socialIcons: [
            { maskGroup: "/team/mask-group-1.webp", icon: "/team/fb.webp", link: "#" },
            { maskGroup: "/team/mask-group-2.webp", icon: "/team/github.webp", link: "#" },
            { maskGroup: "/team/mask-group-3.webp", icon: "/team/linkedin.webp", link: "#" },
        ],
        name: "Hibino Kafka",
        role: "UI/UX Designer",
    },
    {
        maskGroup: "/team/mask-group.webp",
        frameImage: "/team/e45fa6e1f8e8c01193d414257a13c3d2-1-5.webp",
        profileImage: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp",
        socialIcons: [
            { maskGroup: "/team/mask-group-1.webp", icon: "/team/fb.webp", link: "#" },
            { maskGroup: "/team/mask-group-2.webp", icon: "/team/github.webp", link: "#" },
            { maskGroup: "/team/mask-group-3.webp", icon: "/team/linkedin.webp", link: "#" },
        ],
        name: "Hibino Kafka",
        role: "UI/UX Designer",
    },
    {
        maskGroup: "/team/mask-group.webp",
        frameImage: "/team/e45fa6e1f8e8c01193d414257a13c3d2-1-5.webp",
        profileImage: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp",
        socialIcons: [
            { maskGroup: "/team/mask-group-1.webp", icon: "/team/fb.webp", link: "#" },
            { maskGroup: "/team/mask-group-2.webp", icon: "/team/github.webp", link: "#" },
            { maskGroup: "/team/mask-group-3.webp", icon: "/team/linkedin.webp", link: "#" },
        ],
        name: "Hibino Kafka",
        role: "UI/UX Designer",
    },
    {
        maskGroup: "/team/mask-group.webp",
        frameImage: "/team/e45fa6e1f8e8c01193d414257a13c3d2-1-5.webp",
        profileImage: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp",
        socialIcons: [
            { maskGroup: "/team/mask-group-1.webp", icon: "/team/fb.webp", link: "#" },
            { maskGroup: "/team/mask-group-2.webp", icon: "/team/github.webp", link: "#" },
            { maskGroup: "/team/mask-group-3.webp", icon: "/team/linkedin.webp", link: "#" },
        ],
        name: "Hibino Kafka",
        role: "UI/UX Designer",
    },
];

// Junior team member data
const juniorMembers = [
    { id: 1, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 2, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 3, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 4, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 5, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 6, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 7, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 8, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 9, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 10, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 11, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
    { id: 12, name: "Surojit Roy", role: "UI/UX designer", image: "/team/d49ca87acb58b4eef86bba9825321fae-2-5.webp" },
];

export const TeamPage = () => {
    const scrollToSection = (id: string) => {
        if (id === "top") {
            const container = document.getElementById("teams-page-container");
            if (container) {
                container.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <main id="teams-page-container" className="w-full h-screen bg-[#F7DAB2] overflow-x-hidden overflow-y-auto">
            <div className="relative w-full min-h-full">
                {/* Background Layer */}
                <div
                    className="absolute inset-0 w-full z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/team/teams-bg--1--3.webp')",
                        backgroundRepeat: "repeat-y",
                        backgroundSize: "100% auto"
                    }}
                />

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-[1920px] mx-auto pb-[10vw]">

                    {/* Hero Banner Section */}
                    <section className="relative w-full flex justify-center mt-8 lg:mt-[5vw]">
                        <div className="relative w-full lg:w-[93.85vw] flex justify-center items-center">
                            <img
                                className="w-full h-auto object-contain"
                                alt="Meet the Incandescence 2026 Team"
                                src="/team/hero-banner.webp"
                            />
                        </div>
                    </section>

                    {/* Decorative Navbar */}
                    <div className="relative w-[80vw] md:w-[50vw] lg:w-[45vw] h-[15vw] md:h-[10vw] lg:h-[8vw] flex items-center justify-center mt-[10vw] mb-[10vw] md:mt-[6vw] md:mb-[6vw] lg:mt-[5vw] lg:mb-[5vw]">
                        {/* The Line */}
                        <div className="absolute w-full h-[1.5vw] md:h-[0.8vw] lg:h-[0.6vw] bg-[#3f2e18] border-y-[0.2vw] md:border-y-[0.15vw] lg:border-y-[0.1vw] border-[#e2be36] rounded-full"></div>

                        {/* The Icons Container */}
                        <div className="flex justify-between w-[85%] lg:w-[70%] z-10 relative items-center">
                            {/* Left Icon - Scroll to Top */}
                            <div
                                onClick={() => scrollToSection("top")}
                                className="w-[13vw] h-[13vw] md:w-[8vw] md:h-[8vw] lg:w-[5.5vw] lg:h-[5.5vw] rounded-full bg-black border-[0.6vw] md:border-[0.3vw] lg:border-[0.2vw] border-[#e2be36] overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                            >
                                <img src="/team/navbar-7.webp" className="w-full h-full object-cover" alt="Scroll to Top" />
                            </div>

                            {/* Middle Icon - Scroll to Core Team */}
                            <div
                                onClick={() => scrollToSection("core-team")}
                                className="w-[16vw] h-[16vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full bg-white border-[0.6vw] md:border-[0.3vw] lg:border-[0.2vw] border-black overflow-hidden flex items-center justify-center transform scale-110 cursor-pointer hover:scale-125 transition-transform"
                            >
                                <img src="/team/navbar2.webp" className="w-full h-full object-cover" alt="Scroll to Core Team" />
                            </div>

                            {/* Right Icon - Scroll to Junior Team */}
                            <div
                                onClick={() => scrollToSection("junior-team")}
                                className="w-[13vw] h-[13vw] md:w-[8vw] md:h-[8vw] lg:w-[5.5vw] lg:h-[5.5vw] rounded-full bg-black border-[0.6vw] md:border-[0.3vw] lg:border-[0.2vw] border-[#e2be36] overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                            >
                                <img src="/team/navbar-1.webp" className="w-full h-full object-cover" alt="Scroll to Junior Team" />
                            </div>
                        </div>
                    </div>

                    {/* CORE MEMBERS Title */}
                    <div id="core-team" className="inline-flex items-center justify-center px-[5vw] py-[3vw] lg:px-[3.3vw] lg:py-[1.8vw] bg-[#e2be36] rounded-[2vw] lg:rounded-[0.7vw] border-[1vw] lg:border-[0.4vw] border-solid border-[#514114] mb-[10vw] lg:mb-[5vw]">
                        <div className="font-hitchcut font-normal text-[#160f0c] text-[7vw] lg:text-[4.4vw] text-justify tracking-[0.17vw] leading-none whitespace-nowrap">
                            CORE MEMBERS
                        </div>
                    </div>

                    {/* Heads Title */}
                    <div className="inline-flex items-center justify-center px-[6vw] py-[3vw] lg:px-[2.3vw] lg:py-[1.2vw] bg-[#e2be36] rounded-[1.5vw] lg:rounded-[0.5vw] border-[0.8vw] lg:border-[0.3vw] border-solid border-[#514114] mb-[15vw] lg:mb-[8vw]">
                        <div className="font-hitchcut font-normal text-[#160f0c] text-[8vw] lg:text-[3vw] text-justify tracking-[0.12vw] leading-none whitespace-nowrap">
                            Heads
                        </div>
                    </div>

                    {/* Heads Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[15vw] gap-y-[15vw] lg:gap-y-[5vw] mb-[20vw] lg:mb-[10vw] px-[4vw]">
                        {coreMembers.map((member, index) => (
                            <div
                                key={`member-${index}`}
                                className={`flex justify-center ${index % 3 === 1 ? "lg:-mt-[5vw]" : ""}`}
                            >
                                <MemberCard {...member} />
                            </div>
                        ))}
                    </div>

                    {/* Junior Members Title */}
                    <div id="junior-team" className="inline-flex items-center justify-center px-[6vw] py-[3vw] lg:px-[2.3vw] lg:py-[1.2vw] bg-[#DD7A1E] rounded-[1.5vw] lg:rounded-[0.5vw] border-[0.8vw] lg:border-[0.3vw] border-solid border-black mb-[10vw] lg:mb-[5vw]">
                        <div className="font-hitchcut font-normal text-[#160f0c] text-[8vw] lg:text-[3vw] text-justify tracking-[0.12vw] leading-none whitespace-nowrap">
                            Junior Members
                        </div>
                    </div>

                    {/* Junior Members Grid */}
                    <section className="w-full relative py-8 md:py-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 lg:gap-x-[5vw] lg:gap-y-[8vw] justify-items-center max-w-[1563px] mx-auto px-[4vw]">
                            {juniorMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="w-full bg-transparent border-none shadow-none"
                                >
                                    <div className="flex flex-col items-center gap-[4vw] lg:gap-[1.2vw] p-0">
                                        <div className="relative w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[18vw] aspect-[279/364] flex justify-center items-center group overflow-hidden">
                                            {/* Frame Layer - Top */}
                                            <img
                                                className="absolute inset-0 w-full h-full z-10 object-contain pointer-events-none"
                                                alt="Frame"
                                                src="/team/junior-frame.webp"
                                            />

                                            {/* Profile Image Layer - Bottom */}
                                            <img
                                                className="w-[85%] h-[85%] object-cover object-top"
                                                alt={`${member.name} profile`}
                                                src={member.image}
                                            />

                                            {/* Social Links Slide-up */}
                                            <div className="absolute bottom-[8%] left-0 w-full flex justify-center gap-[4vw] md:gap-[2vw] lg:gap-[1.5vw] z-20 transition-transform duration-300 translate-y-0 lg:translate-y-[300%] lg:group-hover:translate-y-0">
                                                <a href="#" className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] lg:w-[2.5vw] lg:h-[2.5vw] bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                    <img src="/team/linkedin.webp" alt="LinkedIn" className="w-[60%] h-[60%] object-contain" />
                                                </a>
                                                <a href="#" className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] lg:w-[2.5vw] lg:h-[2.5vw] bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                    <img src="/team/fb.webp" alt="Facebook" className="w-[60%] h-[60%] object-contain" />
                                                </a>
                                                <a href="#" className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] lg:w-[2.5vw] lg:h-[2.5vw] bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                    <img src="/team/github.webp" alt="Github" className="w-[60%] h-[60%] object-contain" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full items-center gap-[2vw] lg:gap-[0.5vw]">
                                            <h3 className="w-full font-hitchcut font-normal text-white text-[5vw] md:text-[2.5vw] lg:text-[1.45vw] text-center tracking-[0] leading-normal whitespace-nowrap">
                                                {member.name}
                                            </h3>
                                            <p className="w-full font-hitchcut font-normal text-white text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-center tracking-[0] leading-normal whitespace-nowrap">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};
