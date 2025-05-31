"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";
import HeroSection from "./heropage";
import Image from "next/image";

const tabs = [
  {
    label: "Artificial Intelligence",
    image: "/ai.jpg",
    backgroundText: "Empowering Nigeria’s future through AI innovation.",
  },
  {
    label: "Digital Transformation",
    image: "/digital-transformation.jpg",
    backgroundText: "Revolutionizing industries with cutting-edge digital tools.",
  },
  {
    label: "Information Security",
    image: "/info-security.jpg",
    backgroundText: "Protecting digital assets through top-tier cybersecurity.",
  },
  {
    label: "Digital Infrastructure",
    image: "/infrastructure.jpg",
    backgroundText: "Building the backbone of Nigeria’s digital economy.",
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
    }, 2000); // every 6 seconds
  };

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoCycle(); // restart auto-loop
  };

  const activeTab = tabs[activeIndex];

  return (
    <div className="relative w-full h-auto">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 -scale-x-100 bg-cover bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('${activeTab.image}')`,
          backgroundPosition: "center top 0px",
          backgroundSize: "cover",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection
          activeTab={activeTab}
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
        />
      </div>

      {/* Orange circle icon */}
      <div className="absolute bottom-4 right-4 sm:bottom-36 sm:right-24 w-8 h-8 bg-orange-600 rounded-full flex justify-center items-center z-20">
        <Image
          src="/Vector.png"
          alt="Orange Icon"
          width={16}
          height={16}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroWrapper;
