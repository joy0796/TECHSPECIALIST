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
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white max-w-2xl p-6 md:mt-28  shadow-lg border-l-4 border-[#F06322]">
        <p className="text-[40px] md:text-[55px] font-[600] uppercase text-gray-300 mb-4 mt-10 font-custom leading-[100%]">IT Support as a Service (ITaaS)</p>
        <h2 className="text-[19px] md:text-[23px] font-[900] leading-[140%] mb-6 font-sans">
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
