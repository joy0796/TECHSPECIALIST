// app/components/ContactSection.tsx
"use client";

// import { useState } from "react";

const ContactSection = () => {
  // const [topic, setTopic] = useState("Digital Transformation");

  return (
    <section className="w-full px-4 py-12 bg-white md:flex md:gap-10 md:justify-center md:items-center gap-12 mx-auto">
      {/* Left: Form */}
      <div className="bg-white text-black  w-full md:w-[230px]">
    
        <div className='bg-gray-100 p-2'>
          <p className="text-sm font-semibold text-[#3E3E3E]">Ready to talk?</p>
          <p className="text-xs text-[#707070]">
            I want to talk to your specialist in the field of{' '}
            <span className="text-[#707070] underline">Digital Transformation</span>.
          </p>
          </div>
          <form className="text-xs">
            <div className='bg-[#F0F0F0] p-2'>
              <label className='text-xs text-[#3E3E3E]'>FULL NAME</label>
                <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-gray-100 p-2'>
              <label className='text-xs text-[#3E3E3E]'>COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-gray-100 p-2'>
              <label className='text-xs text-[#3E3E3E]'>BUSINESS EMAIL</label>
                            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-gray-100 p-2'>
              <label className='text-xs text-[#3E3E3E]'>PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-gray-100 p-2'>
                <label className="flex items-start gap-2 text-xs">
              <input type="checkbox" className="mt-1 text-[#707070]" />
              I would like to receive exciting communication regarding Techspecialist services.
            </label>
            </div>
            

            <div className=''>
                            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded font-normal"
            >
              Contact Me
            </button>
            </div>

          </form>
        </div>


      {/* Right: Text + Stats */}
      <div className="mt-10 md:mt-0 md:w-[600px] text-gray-800">
        <p className="text-sm mb-4 text-justify">
          Modern businesses require more than just functional IT systems—they need resilient, responsive, and future-ready technology environments that keep operations running smoothly.  At Techspecialist Consulting Limited (TCL), we deliver dependable IT Support as a Service (ITaaS) that ensures your infrastructure performs at its best—every hour, every day. </p>

        <p className="text-sm mb-6 text-justify">
          We help organizations across sectors manage the complexity of todays IT landscape with tailored support services designed to reduce downtime, enhance system reliability, and strengthen cybersecurity—all while aligning with your strategic objectives.
        </p>

        <h3 className="font-semibold mb-4">Why Choose TCL?</h3>

        {/* KPIs */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-center">Target Impact</h4>
          <div className="flex flex-col sm:flex-row gap-6 mb-6 justify-center">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#3E3E3E]">99.9%</p>
              <p className="text-sm font-medium">System Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#3E3E3E]">95%</p>
              <p className="text-sm font-medium">SLA Compliance</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#3E3E3E]">24/7</p>
              <p className="text-sm font-medium">Monitoring</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mb-4">
          <span className="font-semibold">Trusted Expertise:</span> With over 15 years of experience enabling digital transformation, our team brings proven methodologies, sector-specific knowledge, and a commitment to excellence in every engagement.
        </p>
        <p className="text-sm mb-4">
          <span className="font-semibold">Scalable & Customizable:</span>Whether you're a growing SME or a large enterprise, our ITaaS offering scales with your needs—adapting to new challenges, user demands, and technology shifts.
        </p>
        <p className="text-sm">
          <span className="font-semibold">One Partner, Total Support:</span> We act as an extension of your team, offering end-to-end IT support that covers infrastructure, user support, security, and strategic advisory—all under one roof.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
