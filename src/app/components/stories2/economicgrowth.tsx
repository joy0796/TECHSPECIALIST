'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';





export default function EconomicGrowth() {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      {/* <Image
        src="/housingfeatureimg" 
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/30" /> */}

      {/* Content Box */}
      <div className="absolute top-14 left-5 sm:left-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white max-w-2xl px-4 py-8 md:mt-14 rounded-md shadow-lg border-l-8 border-[#F06322]" data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-[16px] font-[900] uppercase text-gray-300 mb-2 font-sans mt-4">Public Sector</p>
        <h2 className="text-[45px] font-[600] font-custom leading-[100%] mb-4">
          Young Nigerians will drive Ai for economic growth
        </h2>

        
        <div className="flex gap-2 mt-4 text-white/80 mb-4">
                                  <Image
                                src="/stories1.png"
                                alt="Techspecialist Logo"
                                width={30}
                                height={30}
                              />
        
                              <Image
                              src="/stories3.png"
                              alt="Techspecialist Logo"
                              width={30}
                              height={30}
                            />
        
                                <Image
                              src="/stories2.png"
                              alt="Techspecialist Logo"
                              width={30}
                              height={30}
                            />
                </div>
      </div>
      

    </section>
  );
}
