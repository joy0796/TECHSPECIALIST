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
    image: "/guy.jpeg",
    heading:
      "Cross-Sectoral Collaboration:\nAI Partnerships Driving Nigerias\nDigital Economy",
  },
  {
    label: "Digital Transformation",
    image: "/digitalimage.png",
    heading:
      "Digital Transformation in Nigerian SMEs: Barriers, Breakthroughs, and\n Blueprints",
  },
  {
    label: "Information Security",
    image: "/female.png",
    heading:
      " When Hackers come for \nGovernment: A review of\n cyberattacks on Nigerian\n public institutions.",
  },
  {
    label: "Digital Infrastructure",
    image: "/goodnotes.png",
    heading:
      "Bridging Budget and innovation:\n Sustainable IT management for Nigeria’s\n Digital future.",
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
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <div
        className={`absolute   inset-0 bg-cover bg-no-repeat transition-all duration-700 ${
          activeTab.label === "Artificial Intelligence"
        }`}
        style={{
          backgroundImage: `url('${activeTab.image}')`,
          backgroundPosition: "center top 0px",
          backgroundSize: "cover",
        }}
      />

      {[
        "Digital Transformation",
        "Information Security",
        "Digital Infrastructure",
      ].includes(activeTab.label) && (
        <div
          className={`absolute inset-0 z-[1] ${
            activeTab.label === "Digital Infrastructure"
              ? "bg-black/10"
              : "bg-black/30"
          }`}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection
          activeTab={activeTab}
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
        />
      </div>

      <Link href="/contact">
        <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-24 w-8 h-8 bg-orange-600 rounded-full flex justify-center items-center z-50">
          <Image
            src="/Vector.png"
            alt="Orange Icon"
            width={16}
            height={16}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default HeroWrapper;
