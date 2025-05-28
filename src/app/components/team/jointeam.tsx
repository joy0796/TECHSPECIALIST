'use client';

import Link from 'next/link';

const JoinUs = () => {
  return (
    <section className="bg-[#3B7EEE] text-white px-4 md:px-14 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
          Join us & be a part of the future
        </h2>
        <p className="text-sm leading-relaxed mb-10 max-w-3xl">
          At Techspecialist Consulting Limited (TCL), we are always on the lookout for individuals who are passionate about driving meaningful progress. If you are seeking a career where your expertise is valued, collaboration fuels success, and innovation is powered by people — you have found the right place. Join us in shaping the future of digital transformation.
        </p>
        <Link href="/careers" className="inline-block bg-[#ED5D25] hover:bg-orange-700 text-white font-medium px-8 py-4 rounded transition duration-300">
          
            JOIN US
        
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
