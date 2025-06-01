'use client';

import Link from 'next/link';

export default function ReadyToTalk() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[83px] font-[600] text-[#3E3E3E] mb-2 font-sans">
          Ready to talk?
        </h2>
        <p className="text-[40px] text-[#3E3E3E] font-[500] mb-2 font-sans leading-normal">
          Join hundreds of users across various sectors who trust Techspecialist Consulting Limited
        </p>
        <Link href="/contact" className="inline-block bg-[#ED5D25] text-white text-[20px] uppercase tracking-wide px-6 py-6 hover:bg-orange-700 transition-colors font-[600] font-sans">
        
            Contact Us
        </Link>
      </div>
    </section>
  );
}
