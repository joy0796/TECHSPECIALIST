'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExperienceImpact() {
  useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section className="py-2 px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h2 className="text-[40px] text-[#3E3E3E] font-[600] mb-8">
          Our Experience & Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" >
          <div>
            <p className="text-[83px] font-[700] text-[#3E3E3E]">15+</p>
            <p className="text-[#3E3E3E] mt-2 font-[600] text-[23px]">Years of experience</p>
          </div>
          <div className="md:border-l md:border-r border-gray-300">
            <p className="text-[83px] font-[700] text-[#3E3E3E]">50+</p>
            <p className="text-[#3E3E3E] mt-2 font-[600] text-[23px]">Businesses we have impacted</p>
          </div>
          <div>
            <p className="text-[83px] font-[700] text-[#3E3E3E]">1000+</p>
            <p className="text-[#3E3E3E] mt-2 font-[600] text-[23px]">Satisfied clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
