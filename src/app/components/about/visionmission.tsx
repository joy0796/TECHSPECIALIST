'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionMissionValues() {
  useEffect(() => {
            AOS.init();
          }, []);
  return (
    <section className="bg-[#3B7EEE] py-10 md:py-16 px-8 lg:px-16 mt-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md p-8 md:p-16" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center "  >
          <div className="border-r border-blue-100 px-2">
            <h3 className="text-[35px] font-[600] mb-6 text-[#3E3E3E] font-custom">Vision</h3>
            <p className="text-[#3E3E3E] leading-relaxed text-[20px] font-[600] font-sans">
              To be Africa&apos;s premier digital transformation enabler, delivering
              innovative technology solutions that create measurable business value.
            </p>
          </div>
          <div>
            <h3 className="text-[35px] font-[600] mb-6 text-[#3E3E3E] font-custom">Mission</h3>
            <p className="text-[#3E3E3E] leading-relaxed text-[20px] font-[600] font-sans">
              To be Africa&apos;s premier digital transformation enabler, delivering
              innovative technology solutions that create measurable business value.
            </p>
          </div>
          <div>
            <h3 className="text-[35px] font-[600] mb-6 text-[#3E3E3E] font-custom">Value Proposition</h3>
            <p className="text-[#3E3E3E] leading-relaxed text-[20px] font-[600] font-sans">
              Empowering Nigerian businesses to thrive in the digital age by simplifying
              technology, accelerating digital transformation, and driving measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
