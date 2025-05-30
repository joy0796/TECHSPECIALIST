'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Image from 'next/image';

export default function ContactSection() {
  useEffect(() => {
      AOS.init();
    }, []);
  return (
    <section className="bg-white text-gray-800 py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side */}
        <div className='mt-10' data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h2 className="text-[83px] font-[600] mb-2 font-sans">
            <span className="text-[#3B73E3]">Connect</span> with our <br />
            <span className="">Team of Experts</span>
          </h2>
          <p className="mb-1 text-[23px] text-gray-700 font-[900] font-Roboto">
            Discover why hundreds of enterprises and institutions choose <br />
            Techspecialist Consulting Limited as their trusted technology partner.
          </p>

          <div className="text-xs space-y-2 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className='text-black'>📧</span>
              <span>info@techspecialistlimited.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className='text-black'>📞</span>
              <span>+234 0929 11443</span>
            </div>
          </div>

          
          <div className="mt-8 flex justify-center md:justify-start">
            <div className="bg-gray-200 w-80 h-80 rounded-t-full flex items-end justify-center overflow-hidden">
              <Image
                src="/contactimg.png"
                alt="Support Representative"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#ED5D25] shadow-lg p-6 space-y-4 text-white" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div>
            <label className="block text-[22px] font-[600] mb-1 font-sans">FULL NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full p-3 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-sans">COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your company name here"
              className="w-full p-3 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-sans">COMPANY/BUSINESS EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="Enter your email address here"
              className="w-full p-3 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-sans">PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number here"
              className="w-full p-3 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-sans">FIELD OF INTEREST</label>
            <select className="w-full p-3 rounded text-black">
              <option>Digital Transformation</option>
              <option>AI Solutions</option>
              <option>Public Sector</option>
            </select>
          </div>

          <div className="text-[22px">
            <label className="flex items-start gap-2">
              <input type="checkbox" />
              <span>
                I would like to receive marketing communications regarding Techspecialist Consulting Limited
                service offerings. I understand that I can unsubscribe at any time.
              </span>
            </label>
          </div>

          <div>
            <button className="w-1/2 bg-[#3B73E3] text-white font-md text-xs py-3 rounded-md  transition">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
