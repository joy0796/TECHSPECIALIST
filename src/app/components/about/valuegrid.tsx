'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ValueGrid() {
useEffect(() => {
      AOS.init();
    }, []);

  const values = [
    'Excellence',
    'Innovation',
    'Integrity',
    'Client Centricity',
    'Collaboration',
    'Accountability',
  ];

  return (
    <section className="bg-white text-black py-10 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto text-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">360 Value</h2>
        <p className="text-gray-900 mb-12 text-md">
          Over a decade of digital transformation, a promise of 360 value
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value}
              className="bg-white text-gray-800 font-semibold text-lg py-8 px-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
