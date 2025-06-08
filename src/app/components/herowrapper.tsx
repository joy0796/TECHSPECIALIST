// "use client"

// import { useState, useEffect, useRef } from "react";
// import Navbar from "./navbar";
// import HeroSection from "./heropage";
// import Image from "next/image";
// import "../../../src/app/globals.css";
// import Link from "next/link";

// const tabs = [
//   {
//     label: "Artificial Intelligence",
//     image: "/blackman.png",
//     heading:
//       "Cross-Sectoral Collaboration: \nAI Partnerships Driving Nigerias \n Digital Economy",
//   },
//   {
//     label: "Digital Transformation",
//     image: "/hey.png",
//     heading:
//       "Digital Transformation in \nNigerian SMEs: Barriers, \nBreakthroughs, and\n Blueprints",
//   },
//   {
//     label: "Information Security",
//     image: "/female.png",
//     heading:
//       " When Hackers come for \nGovernment: A review of\n cyberattacks on Nigerian\n public institutions.",
//   },
//   {
//     label: "Digital Infrastructure",
//     image: "/goodnotes.png",
//     heading:
//       "Bridging Budget and innovation: Sustainable IT management for Nigeria’s Digital future.",
//   },
// ];

// const HeroWrapper = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     startAutoCycle();
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   const startAutoCycle = () => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % tabs.length);
//     }, 4000);
//   };

//   const handleTabClick = (index: number) => {
//     setActiveIndex(index);
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     startAutoCycle();
//   };

//   const activeTab = tabs[activeIndex];

//   return (
//     <div className="">
//       {/* Background Image */}
//       <div
//         className={`absolute   inset-0 bg-cover bg-no-repeat h-[30%] transition-all duration-700 ${
//           activeTab.label === "Artificial Intelligence"
//         }`}
//         style={{
//           backgroundImage: `url('${activeTab.image}')`,
//           backgroundPosition: "center top 2px",
//           backgroundSize: "cover",
//           // backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           // backgroundSize: "cover",
//           height: "auto",
//         }}
//       />

//       {[
//         "Digital Transformation",
//         "Information Security",
//         "Digital Infrastructure",
//       ].includes(activeTab.label) && (
//         <div
//           className={`absolute inset-0 z-[1] ${
//             activeTab.label === "Digital Infrastructure"
//               ? "bg-black/10"
//               : "bg-black/30"
//           }`}
//         />
//       )}

//       {/* Main Content */}
//       <div className="relative z-10">
//         <Navbar />
//         <HeroSection
//           activeTab={activeTab}
//           activeIndex={activeIndex}
//           tabs={tabs}
//           onTabClick={handleTabClick}
//         />
//       </div>

//       <Link href="/contact">
//         <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-24 w-12 h-12 bg-orange-600 rounded-full flex justify-center items-center z-50">
//           <Image
//             src="/Vector.png"
//             alt="Orange Icon"
//             width={30}
//             height={30}
//             className="object-contain"
//           />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default HeroWrapper;




"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";
import HeroSection from "./heropage";
import Image from "next/image";
import "../../../src/app/globals.css";
import Link from "next/link";

const tabs = [
  {
    label: "Artificial Intelligence",
    image: "/blackman.png",
    heading:
      "Cross-Sectoral Collaboration: \nAI Partnerships Driving Nigerias \n Digital Economy",
    textColor: "black" as const,
  },
  {
    label: "Digital Transformation",
    image: "/hey.png",
    heading:
      "Digital Transformation in \nNigerian SMEs: Barriers, \nBreakthroughs, and\n Blueprints",
    textColor: "white" as const,
  },
  {
    label: "Information Security",
    image: "/female.png",
    heading:
      " When Hackers come for \nGovernment: A review of\n cyberattacks on Nigerian\n public institutions.",
    textColor: "white" as const,
  },
  {
    label: "Digital Infrastructure",
    image: "/goodnotes.png",
    heading:
      "Bridging Budget and\n innovation: Sustainable IT\n management for Nigeria’s \nDigital future.",
    textColor: "black" as const,
  },
];

const HeroWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoCycle = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 4000);
  };

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoCycle();
  };

  const activeTab = tabs[activeIndex];

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center transition-all duration-700"
        style={{
          backgroundImage: `url('${activeTab.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top 2px",
          height: "100vh",
          width: "100%",
          zIndex: 0,
        }}
      />

      {[
        "Digital Transformation",
        "Information Security",
        "Digital Infrastructure",
      ].includes(activeTab.label) && (
        <div
          className={`absolute inset-0 z-10 ${
            activeTab.label === "Digital Infrastructure"
              ? "bg-black/10"
              : "bg-black/30"
          }`}
        />
      )}

      {/* Main Content */}
      <div className="relative z-20 min-h-screen">
        <Navbar textColor={activeTab.textColor} />
        <HeroSection
          activeTab={activeTab}
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
        />
      </div>

      {/* Floating Icon */}
      <Link href="/contact">
        <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-24 w-12 h-12 bg-orange-600 rounded-full flex justify-center items-center z-50">
          <Image
            src="/Vector.png"
            alt="Orange Icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default HeroWrapper;
