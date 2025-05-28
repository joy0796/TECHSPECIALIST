'use client';

export default function ExperienceImpact() {
  return (
    <section className="py-2 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-[#3E3E3E] font-extrabold mb-8">
          Our Experience & Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-[#3E3E3E]">15+</p>
            <p className="text-[#3E3E3E] mt-2 font-semibold">Years of experience</p>
          </div>
          <div className="md:border-l md:border-r border-gray-300">
            <p className="text-4xl text-[#3E3E3E] font-extrabold">50+</p>
            <p className="text-[#3E3E3E] mt-2 font-semibold">Businesses we have impacted</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-[#3E3E3E]">1000+</p>
            <p className="text-[#3E3E3E] mt-2 font-semibold">Satisfied clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
