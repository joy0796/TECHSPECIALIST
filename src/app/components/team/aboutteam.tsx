'use client';




export default function Team() {
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
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/40 via-black/70 to-transparent text-white max-w-4xl py-6 px-4 md:mt-14 shadow-lg border-l-4 border-[#F06322] pt-10 backdrop-blur-lg">
        <p className="text-[57px]  font-[600 ] text-white mb-2  font-custom md:mt-6">Our Team</p>
        <h2 className="text-[23px] leading-snug mb-4 font-sans">
          At Techspecialist Consulting Limited (TCL), progress is intentional. Every day, we empower enterprises and government institutions to overcome the challenges of complex technologies—bridging ambition with execution through clarity, expertise, and impact. 
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
