'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Section() {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className="w-full bg-white pl-4 py-0 md:py-0 border-b border-red-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-28 md:pt-16">
        
        <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <p className="text-[14px] md:text-[16px] font-[900] text-[#3E3E3E] uppercase mb-2 font-Roboto">
            Artificial Intelligence
          </p>
          <h1 className="text-[30px] md:text-[57px] font-[600] font-sans text-[#3E3E3E] leading-snug mb-4">
            Cross-sectional Collaboration: AI Partnerships driving Nigerias Digital Economy.
          </h1>
          <p className="text-[18px] md:text[20px] font-[400] font-Roboto text-[#979595] mb-2">
            By Suleman Olalomi, Danielle Udochi, Victoria Ubi
          </p>
          <p className="text-[18px] md:text[20px] font-[400] font-Roboto text-[#979595] mb-6">5 min read.</p>

          {/* Icons */}
          <div className="flex items-center gap-4 text-[#979595]">
            <PrintIcon className="cursor-pointer hover:text-black" />
            <ShareIcon className="cursor-pointer hover:text-black" />
            <BookmarkBorderIcon className="cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full h-64 md:h-[100vh] -scale-x-100 relative rounded-lg overflow-hidden shadow-md" data-aos="flip-left"
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
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 bg-orange-600 rounded-full flex justify-center ">
              <Image
                src="/Vector.png"
                alt="Orange Icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
    </section>
  );
}