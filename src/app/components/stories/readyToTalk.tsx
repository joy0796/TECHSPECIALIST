'use client';

import Link from 'next/link';

export default function ReadyToTalk() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[50px] md:text-[75px] font-[600] text-[#3E3E3E] mb-6 font-custom leading-[100%]">
          Ready to talk?
        </h2>
        <p className="text-[30px] md:text-[40px] text-[#3E3E3E] font-[500] font-custom leading-[100%]">
          Join hundreds of users across various sectors who trust Techspecialist Consulting Limited
        </p>
        <Link href="/contact" className="inline-block bg-[#ED5D25] text-white text-[20px] uppercase tracking-wide px-6 py-6 hover:bg-orange-700 transition-colors font-[600] font-sans mt-4 md:mt-6">
        
            Contact Us
        </Link>
      </div>
    </section>
  );
}
