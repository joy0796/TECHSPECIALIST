"use client";

// import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const tabs = [
  "Artificial Intelligence",
  "Digital Transformation",
  "Information Security",
  "Digital Infrastructure",
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence");

  return (
    <section className="w-full pt-16 md:pt-28 pb-12 relative z-10 md:pl-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row">
        {/* Left - Text Content */}
        <div className="w-full lg:w-2/3 lg:mt-0 space-y-2 text-center md:text-start">
          <p className="text-xs font-semibold text-gray-800 uppercase">
            {activeTab}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight text-[#3E3E3E]">
            Cross-Sectoral Collaboration:
            <br />
            AI Partnerships Driving Nigeria&apos;s
            <br />
            Digital Economy
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">

            <Link href="/casestudy3">
            <button className="px-2 py-2 border border-black rounded-lg text-sm font-medium hover:bg-black hover:text-white transition">
              Get a Free IT Audit
            </button>
            </Link>

            <Link href="/casestudy2">
            <button className="px-6 py-2 bg-[#3E3E3E] text-white rounded-lg text-sm hover:bg-gray-800 transition font-normal">
              Read More
            </button>
            </Link>
          </div>
        </div>

        {/* Right - Hero Image */}
        {/* <div className="w-full lg:w-1/2">
          <Image
            src="/heroimg.jpg"
            alt="Hero Image"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div> */}
      </div>

      {/* Tabs */}
      <div className="max-w-10xl mx-auto px-4 mt-28 md:mt-40 flex gap-6 md:gap-16 md:justify-between overflow-x-auto whitespace-nowrap scrollbar-hide">
    {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`pb-3 text-sm font-bold transition ${
        activeTab === tab
          ? "text-black border-t-4 border-orange-500 pt-2"
          : "text-[#979595]"
      }`}
    >
      {tab}
    </button>
  ))}
</div>

    </section>
  );
};

export default HeroSection;
