'use client';




export default function Itaas() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      {/* <Image
        src="/housingfeatureimg" 
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/30" /> */}

      {/* Content Box */}
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white max-w-xl p-6 md:mt-14 rounded-md shadow-lg border-l-4 border-[#F06322]">
        <p className="text-lg font-semibold uppercase text-gray-300 mb-2 mt-10">IT Support as a Service (ITaaS)</p>
        <h2 className="text-md font-bold leading-snug mb-6">
          We provide reliable, responsive IT infrastructure management and support services to maintain operational continuity:
        </h2>

        {/* Icons */}
        {/* <div className="flex gap-4 mt-4 text-white/80">
          <InsertLink className="cursor-pointer hover:text-white transition" />
          <Share className="cursor-pointer hover:text-white transition" />
          <Bookmark className="cursor-pointer hover:text-white transition" />
        </div> */}
      </div>
      

    </section>
  );
}
