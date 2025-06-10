'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Section() {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className="w-full bg-white pl-6 py-0 md:py-0 border-b border-red-400 h-[95vh]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-28 md:pt-16">
        
        <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <p className="text-[14px] md:text-[16px] font-[900] text-[#3E3E3E] uppercase mb-2 font-sans">
            Artificial Intelligence
          </p>
          <h1 className="text-[30px] md:text-[50px] font-[600] font-custom text-[#3E3E3E] mb-4 leading-[100%]">
            Cross-sectional Collaboration: AI Partnerships driving Nigerias Digital Economy.
          </h1>
          <p className="text-[18px] md:text[20px] font-[400] font-sans text-[#979595] mb-2">
            By Suleman Olalomi, Danielle Udochi, Victoria Ubi
          </p>
          <p className="text-[18px] md:text[20px] font-[400] font-sans text-[#979595] mb-6">5 min read.</p>

          {/* Icons */}
          <div className="flex items-center gap-4 text-[#979595]">
                                <Image
                      src="/cases1.png"
                      alt="Orange Icon"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
          
                    <Image
                      src="/cases2.png"
                      alt="Orange Icon"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
          
                    <Image
                      src="/cases3.png"
                      alt="Orange Icon"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    </div>
        </div>

        {/* Right - Image */}
        <div className="w-full h-[85vh] -scale-x-100 relative overflow-hidden shadow-md" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <Image
            src="/heroimage.jpg"
            alt="Digital Transformation"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Link href="/contact">
        <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-20 w-10 h-10 bg-orange-600 rounded-full flex justify-center items-center z-50">
          <Image
            src="/Vector.png"
            alt="Orange Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </Link>
    </section>
  );
}