'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

export default function HeroSection() {
  useEffect(() => {
          AOS.init();
        }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-start overflow-hidden" >
      {/* Background Image */}
      <Image
        src="/image 4.png"
        alt="Team working"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 w-full" data-aos="fade-up"
     data-aos-duration="1000">
        <div className="text-white max-w-xl">
          <h1 className="text-[57px] font-semibold leading-tight mb-6">
            Empowering businesses with  digital solutions, one process at a time
          </h1>

          <Link href="/contact">
          <button className="border border-white px-8 py-3 text-white text-lg hover:bg-white hover:text-black transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl group hover:scale-105 transition">
          <svg
            className="w-6 h-6 text-red-600 group-hover:scale-110 transition"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
