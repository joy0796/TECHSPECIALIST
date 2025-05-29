'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionMissionValues() {
  useEffect(() => {
            AOS.init();
          }, []);
  return (
    <section className="bg-[#3B7EEE] py-12 px-8 lg:px-10 mt-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md p-8 md:p-16" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"  >
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#3E3E3E]">Vision</h3>
            <p className="text-gray-700 text-md leading-relaxed">
              To be Africa&apos;s premier digital transformation enabler, delivering
              innovative technology solutions that create measurable business value.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#3E3E3E]">Mission</h3>
            <p className="text-gray-700 text-md leading-relaxed">
              To be Africa&apos;s premier digital transformation enabler, delivering
              innovative technology solutions that create measurable business value.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#3E3E3E]">Value Proposition</h3>
            <p className="text-gray-700 text-md leading-relaxed">
              Empowering Nigerian businesses to thrive in the digital age by simplifying
              technology, accelerating digital transformation, and driving measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
