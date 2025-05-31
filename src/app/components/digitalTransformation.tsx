"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const sectors = ["Public Sector", "Non Profit", "Private Sector"];

const industries = [
  "Government Administration",
  "Public Safety and Security",
  "Education",
  "Healthcare",
  "Infrastructure & Transportation",
  "Utilities and Energy",
  "Social Services",
  "Judiciary and Legal Affairs",
  "Agricultural Services",
  "Science and Research",
  "Finance and Revenue",
];

const cards = [
  { title: "Digital Transformation Consulting", content: "We partner with businesses to access their digital maturity, define their roadmaps and implement tailored solutions using cutting edge technologies such as cloud computing, automation, data analysis and Ai. Our approach goes beyond technology, we align people, processes amd culture to deliver ,meaningful, measureable transformation." },
  { title: "IT Support as a service(ITAAS)", content: "We provide reliable, responsive IT infrastructure management and support services to maintain operational continuity:" },
  { title: "Digital Upskilling as a Service (DUaaS)", content: "We help organizations and individuals build the digital competencies needed for successful technology adoption:" },
];

export default function DigitalTransformationSection() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleReset = () => setStep(1);

  return (
    <section className="flex  w-[95%] flex-col items-center justify-between  pt-12 pb-24 gap-10 mx-auto">
      {step === 1 && (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          <div
            className=" w-full text-center lg:text-left"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl sm:text-[48px] font-semibold leading-tight text-[#3E3E3E] mt-16 font-custom">
              Begin your <span className="text-[#ED5D25]">digital transformation</span> journey here
            </h1>
            <p className="mt-6 text-[#3E3E3E] text-[24px] font-poppins">
              Let us help you begin your digital transformation journey with this free assessment
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-10 text-gray-800 w-full mb-10">
              <h2 className="text-xl font-semibold mb-4 sm:mb-0">
                1. <span className="font-bold">What is your sector?</span>
              </h2>
              <p className="text-sm text-gray-500">Step 1 of 3</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-start gap-10 md:gap-24">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => sector === "Public Sector" && setStep(2)}
                  className="px-12 py-4 border-2 border-gray-300 rounded-xl text-gray-800 font-medium hover:bg-[#ED5D25] hover:text-white transition whitespace-nowrap"
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          <div
            className="w-full max-w-lg flex justify-center mt-14"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image
              src="/digitalimg.png"
              alt="Digital transformation illustration"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="w-full max-w-6xl text-center" data-aos="fade-up"
     data-aos-duration="2000">

          <div className="flex items-center gap-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">2. What is your Industry?</h2>
            
          </div>
          <p className="text-sm text-gray-500 mb-6 font-semibold">Step 2 of 3</p>
          <button onClick={handleReset} className="text-orange-500 font-semibold ml-auto text-lg mb-10">Reset</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {industries.map((industry) => (
              <div
                key={industry}
                className="shadow-lg rounded-lg py-8 px-4 cursor-pointer hover:shadow-lg transition border-t-4 border-orange-500 text-[#3E3E3E] hover:bg-orange-500 hover:text-white"
                onClick={() => setStep(3)}
              >
                <p className="font-semibold text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="w-full max-w-6xl text-center" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="flex items-center gap-10 mb-24">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">2. What is your business need?</h2>
            
          </div>
          <p className="text-sm text-gray-500 mb-6 font-semibold">Step 2 of 3</p>
          <button onClick={handleReset} className="text-orange-500 font-semibold ml-auto text-lg mb-10">Reset</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#3E3E3E] ">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col justify-between text-justify"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#3E3E3E] mb-2 text-center">{card.title}</h3>
                  <p className="text-[#979595]">{card.content}</p>
                </div>
                {index >= 0 && (
                  <button className="mt-4 px-2 py-1 border border-orange-500 text-orange-500 bg-white hover:bg-orange-50 transition w-full md:w-[110px] ml-auto">
                    See More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
