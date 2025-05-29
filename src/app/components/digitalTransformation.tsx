"use client"

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DigitalTransformationSection() {

  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
      {/* Text Section */}
      <div className="max-w-xl w-full text-center lg:text-left" data-aos="flip-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
          Begin your <span className="text-orange-500">digital transformation</span> journey here
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Let us help you begin your digital transformation journey with this free assessment
        </p>

        {/* Step and Question */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-gray-800 w-full">
          <h2 className="text-xl font-semibold mb-4 sm:mb-0">
            1. <span className="font-bold">What is your sector?</span>
          </h2>
          <p className="text-sm text-gray-500">Step 1 of 3</p>
        </div>

        {/* Sector Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-start gap-8">
          {["Public Sector", "Non Profit", "Private Sector"].map((sector) => (
            <button
              key={sector}
              className="px-4 py-2 border border-gray-300 rounded-xl text-gray-800 font-medium hover:bg-gray-100 transition whitespace-nowrap"
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-lg flex justify-center" data-aos="flip-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Image
          src="/digitalimg.png"
          alt="Digital transformation illustration"
          width={600}
          height={600}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
