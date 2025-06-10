
// 'use client'
// import Link from 'next/link'
// import { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";

// // import Image from 'next/image'

// export default function ServicesSection() {
//   useEffect(() => {
//       AOS.init();
//     }, []);
//   return (
//     <section className="relative w-full text-white overflow-hidden">

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-40 " data-aos="fade-up"
//      data-aos-duration="1000">
//         <h2 className="text-[35px] md:text-[57px] font-[600] mb-4 font-sans">Our Services</h2>
//         <p className="text-[19px] md:text-[23px] font-[600] max-w-3xl md:leading-normal font-Roboto">
//           Our service portfolio has evolved into a sophisticated integrated ecosystem where three core service domains interconnect through strategic pathways. This architecture enables us to deliver truly comprehensive solutions that address every aspect of our clients&apos; digital transformation journey.
//         </p>
//         <div className="mt-6">
//           <Link href="/team">
//           <button className="px-6 py-3 border border-white rounded-md transition text-[16px] font-500 font-inter">
//             Talk with the Team
//           </button>
//           </Link>
//         </div>
//         {/* <p>hello</p> */}
//         <div className="hidden md:flex bg-black/50 text-white rounded-xl shadow-lg px-6 py-6 flex-col md:flex-row gap-8 justify-between items-center w-full font-[500] whitespace-nowrap font-Roboto mt-[11rem]">
//           <p className='text-2xl'>Digital Transformation</p>
//           <p className='text-2xl'>IT Support as a Service (ITaaS)</p>
//           <p className='text-2xl'>Digital Upskilling as a Service (DUaaS)</p>
//         </div>
//       </div>


//     </section>
//   )
// }


'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ServicesSection() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="relative w-full text-white overflow-hidden h-[92vh] flex flex-col justify-between pb-0">
      {/* Top Content */}

      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div> */}
      <div
        className="max-w-6xl px-6 md:px-16 pt-28 md:pt-40 relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-[35px] md:text-[50px] font-[600] mb-2 font-custom">
          Our Services
        </h2>
        <p className="text-[19px] md:text-[20px] font-[600] max-w-3xl md:leading-normal font-sans">
          Our service portfolio has evolved into a sophisticated integrated
          ecosystem where three core service domains interconnect through
          strategic pathways. This architecture enables us to deliver truly
          comprehensive solutions that address every aspect of our clients&apos;
          digital transformation journey.
        </p>
        <div className="mt-6">
          <Link href="/team">
            <button className="px-6 py-3 border border-white rounded-lg transition text-[16px] font-500 font-inter">
              Talk with the Team
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full"
        
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="bg-black/50 text-white rounded-t-2xl shadow-lg px-8 py-5 flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center w-full font-[500] whitespace-nowrap ">
            <p className="text-[20px] text-center md:text-left font-sans">
              Digital Transformation
            </p>
            <p className="text-[20px] text-center md:text-left font-sans">
              IT Support as a Service (ITaaS)
            </p>
            <p className="text-[22px] text-center md:text-left font-sans">
              Digital Upskilling as a Service (DUaaS)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
