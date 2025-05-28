'use client';



export default function ContactWithCompanyInfo() {
  

  return (
    <section className="bg-white text-black px-4 py-8 border-b border-gray-400">
      <div className="  flex flex-col md:flex-row justify-between gap-8 px-2 md:px-8">
        {/* Left - Contact Form */}
        <div className="bg-white text-black p-4  space-y-4 pt-14 border-t border-gray-300 w-full md:w-[1000px]">
        <div className='bg-gray-100 mb-1 p-2'>
          <p className="text-sm font-semibold text-[#3E3E3E]">Ready to talk?</p>
          <p className="text-xs text-[#707070]">
            I want to talk to your specialist in the field of{' '}
            <span className="text-[#707070] underline">Digital Transformation</span>.
          </p>
          </div>
          <form className="space-y-3 text-sm">
            <div className='bg-[#F0F0F0] mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>FULL NAME</label>
                <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-gray-100 mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-gray-100 mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>BUSINESS EMAIL</label>
                            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-gray-100 mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-gray-100 mb-1 p-2'>
                <label className="flex items-start gap-2 text-xs">
              <input type="checkbox" className="mt-1 text-[#707070]" />
              I would like to receive exciting communication regarding Techspecialist services.
            </label>
            </div>
            

            <div className=''>
                            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded font-semibold"
            >
              Contact Me
            </button>
            </div>

          </form>
        </div>
        {/* Right - Company Info */}
        <div className="text-[#979595] space-y-6 text-xs leading-relaxed text-justify">
          <p>
            Techspecialist Consulting Limited (TCL) stands as Nigerias premier digital transformation enabler,
            delivering innovative technology solutions that drive measurable business value.
          </p>
          <p>
            Founded in 2008, we have strategically evolved from a traditional IT service provider into a comprehensive
            digital transformation partner — guiding organizations through their digital journeys with expertise,
            precision, and purpose.
          </p>
          <p>
            As a proud member of the MSwitch Group — a dynamic ecosystem that includes Techspecialist Consulting,
            Mswitch Media, and the TIIDELab Initiative — we are part of a broader mission to empower organizations and
            elevate creators through digital innovation, creative expression, and smart business support. This alignment
            enhances our capabilities and offers our clients access to a wider network of specialized expertise.
          </p>
          <p>
            With our headquarters in Abuja and a growing national footprint, TCL supports Nigerian businesses,
            government agencies, and international organizations in navigating todays digital landscape. We simplify
            complex technologies, accelerate transformation initiatives, and deliver consistent, measurable outcomes
            that align with each clients strategic objectives.
          </p>
          <p>
            Our distinctive approach integrates three specialized service domains into a seamless ecosystem — enabling
            us to address the full spectrum of digital challenges facing modern organizations. This holistic methodology
            empowers our clients to achieve operational excellence, build lasting resilience, and secure sustainable
            growth in an era defined by technological disruption and opportunity.
          </p>
          <p>At TCL, we do not just implement technology — we create impact.</p>
        </div>
      </div>
    </section>
  );
}
