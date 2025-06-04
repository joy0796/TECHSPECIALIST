'use client';
import Link from "next/link";
export default function Hero360Value() {
  return (
    <section className="bg-[#3B73E3] text-white text-center py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[60px] md:text-[83px] font-custom font-[600] mb-4">360 VALUE</h1>
        <p className="text-[23px] mb-6 font-poppins font-[500] ">
          Over a decade of digital transformation, a promise of 360 value
        </p>

        <Link href="/about">
        <button className="border border-white px-8 py-4 text-white text-[19px] font-[500] hover:bg-white hover:text-blue-600 transition-all duration-300 font-sans">
          Read More
        </button>
        </Link>
      </div>
    </section>
  );
}
