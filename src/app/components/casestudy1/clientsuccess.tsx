'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import Image from 'next/image';



const caseStudies = [
  {
    title: 'From Reactive to Resilient: A Cybersecurity Transformation Journey',
    tag: 'Information Security',
  },
  {
    title: 'Finding the Fault Lines: Closing IT Gaps Through Strategic Auditing',
    tag: 'Digital Transformation',
  },
  {
    title: 'From Legacy to Leading Edge: A Digital Infrastructure Overhaul',
    tag: 'Digital Transformation',
  },
];

const ClientSuccessStories = () => {
  useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section className="bg-white px-4 lg:px-24 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[30px] md:text-[40px] font-[600] font-custom text-[#3E3E3E] mb-2">
          How we have helped clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-blue-500 rounded overflow-hidden text-white" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between px-6 py-6 md:px-8 md:py-8"
            >

              <h3 className="text-[30px] md:text-[40px] font-[600] font-custom leading-[100%]">{study.title}</h3>

              
              {idx < caseStudies.length - 1 && (
                <div className="hidden md:block absolute top-12 bottom-12 right-0 w-px bg-white/50" />
              )}

              
              <p className="text-[14px] md:text-[16px] font-[600] font-sans mt-4 mb-8">{study.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
