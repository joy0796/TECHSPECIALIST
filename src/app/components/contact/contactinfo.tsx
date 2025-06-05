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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-16 gap-4">
        {/* Left Side */}
        <div className='' data-aos="zoom-in"
              data-aos-duration="1000">
          <h2 className="text-[40px] md:text-[70px] font-[600] mb-4 font-custom leading-[100%]">
            <span className="text-[#3B73E3]">Connect</span> with our
            <span className=""> Team of Experts</span>
          </h2>
          <p className="mb-2 text-[23px] text-gray-700 font-[900] font-sans leading-[140%]">
            Discover why hundreds of enterprises and institutions choose
            Techspecialist Consulting Limited as their trusted technology partner.
          </p>

          <div className="space-y-2 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className='text-black'>📧</span>
              <span className='font-Poppins text-[18.59px] font-[500]'>info@techspecialistlimited.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className='text-black'>📞</span>
              <span className='font-Poppins text-[18.59px] font-[500]'>+234 0929 11443</span>
            </div>
          </div>

          
          <div className="flex justify-center md:justify-start mt-6">
            
              <Image
  src="/groupcontactimg.png"
  alt="Support Representative"
  width={900}
  height={900}
  className="object-contain"
/>
            
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#ED5D25] shadow-lg pt-8 px-6 space-y-4 text-white h-fit rounded-md" data-aos="zoom-in"
              data-aos-duration="1000">
          <div>
            <label className="block text-[22px] font-[600] mb-1 font-custom">FULL NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full p-4 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-custom">COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your company name here"
              className="w-full p-4 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-custom">COMPANY/BUSINESS EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="Enter your email address here"
              className="w-full p-4 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-custom">PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number here"
              className="w-full p-4 rounded text-black placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[22px] font-[600] mb-1 font-custom">FIELD OF INTEREST</label>
            <select className="w-full p-4 rounded text-black">
              <option>Digital Transformation</option>
              <option>AI Solutions</option>
              <option>Public Sector</option>
            </select>
          </div>

          <div >
            <label className="flex items-center gap-2">
              <input type="checkbox" className='text-[30px]'/>
              <span className='font-custom font-[400] text-[16px]'>
                I would like to receive marketing communications regarding Techspecialist Consulting Limited
                service offerings. I understand that I can unsubscribe at any time.
              </span>
            </label>
          </div>

          <div>
            <button className=" bg-[#3B73E3] text-white font-md text-xs py-4 rounded-md  transition px-12 mb-10">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
