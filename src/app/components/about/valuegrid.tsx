'use client';

export default function ValueGrid() {
  const values = [
    'Excellence',
    'Innovation',
    'Integrity',
    'Client Centricity',
    'Collaboration',
    'Accountability',
  ];

  return (
    <section className="bg-white text-black py-10 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 text-[#3E3E3E]">360 Value</h2>
        <p className="text-gray-500 mb-12 text-sm">
          Over a decade of digital transformation, a promise of 360 value
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value}
              className="bg-white text-[#3E3E3E] font-semibold text-sm py-8 px-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
