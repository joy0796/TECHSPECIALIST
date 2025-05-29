"use client";

// import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";



const tabs = [
  "Artificial Intelligence",
  "Digital Transformation",
  "Information Security",
  "Digital Infrastructure",
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence");

  useEffect(() => {
      AOS.init();
    }, []);

  return (
    <section className="w-full pt-28 md:pt-[19rem] pb-12 relative z-10 md:pl-4">
      <div className=" flex flex-col-reverse lg:flex-row">
        {/* Left - Text Content */}
        <div className="w-full md:ml-20 md:pr-[6rem] lg:mt-0 space-y-2 text-center md:text-start"
        >
          <p className="text-[23px] font-semibold text-[#3E3E3E] uppercase">
            {activeTab}
          </p>
          <h1 className="text-3xl md:text-[53px] font-semibold leading-tight text-[#3E3E3E]">
            Cross-Sectoral Collaboration:
            <br />
            AI Partnerships Driving Nigeria&apos;s
            <br />
            Digital Economy
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center items-center md:justify-start">

            <Link href="/casestudy3">
            <button className="px-8 py-5 border border-black rounded-lg text-[16px] font-medium hover:bg-black hover:text-white transition text-black">
              Get a Free IT Audit
            </button>
            </Link>

            <Link href="/casestudy2">
            <button className="px-14 py-5 bg-[#3E3E3E] text-white rounded-lg text-[16px] hover:bg-gray-800 transition font-normal">
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
