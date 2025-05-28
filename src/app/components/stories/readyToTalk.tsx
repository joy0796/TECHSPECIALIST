'use client';

import Link from 'next/link';

export default function ReadyToTalk() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Ready to talk?
        </h2>
        <p className="teext-xl text-[#3E3E3E] font-semibold mb-2">
          Join hundreds of users across various sectors who trust Techspecialist Consulting Limited
        </p>
        <Link href="/contact" className="inline-block bg-orange-600 text-white text-sm uppercase tracking-wide px-6 py-3 hover:bg-orange-700 transition-colors">
        
            Contact Us
        </Link>
      </div>
    </section>
  );
}
