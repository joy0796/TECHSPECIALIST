'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ChairmanMessage() {
  return (
    <section className="bg-white text-black py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/5 flex-shrink-0">
          <Image
            src="/kadir.png" 
            alt="Chairman"
            width={200}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div className="text-gray-800 space-y-6 leading-relaxed text-justify">
            <p className='text-sm'>
              At Techspecialist Consulting Limited (TCL), we recognize that Artificial Intelligence,
              Customer Experience, and Cybersecurity form the backbone of resilient and
              future-ready organizations. By weaving these elements into every solution we deliver,
              we empower businesses and government institutions to operate smarter, respond faster,
              and lead boldly.
            </p>
            <p className='text-sm'>
              Our AI-driven, security-conscious approach is built on deep technical expertise and
              strengthened by strategic alliances. Through this, we do not just implement technology — 
              we enable sustainable transformation, helping our partners navigate disruption, exceed
              expectations, and thrive in the digital age.
            </p>
            
          </div>

          <div className="mt-4 flex justify-between">
            <p>
              <strong className="text-[#3E3E3E] text-sm">Kadir Salami</strong>{' '}
              <span className="text-gray-800 text-sm">Chairman</span>
            </p>

            
            
          </div>
        </div>

        <div className='mt-auto whitespace-nowrap'>
            <Link href="/team">
            <button className="bg-[#F05A28] text-white font-md px-4 py-2 rounded hover:bg-orange-600 transition">
              Meet the team
            </button>
            </Link>
            </div>
      </div>
    </section>
  );
}
