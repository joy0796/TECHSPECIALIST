
'use client'
import Link from 'next/link'

// import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-services.jpg" //  Make sure this image exists in /public
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-28 md:pt-14">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="text-sm md:text-lg font-medium max-w-3xl md:leading-relaxed text-justify">
          Our service portfolio has evolved into a sophisticated integrated ecosystem where three core service domains interconnect through strategic pathways. This architecture enables us to deliver truly comprehensive solutions that address every aspect of our clients&apos; digital transformation journey.
        </p>
        <div className="mt-6">
          <Link href="/team">
          <button className="px-6 py-3 border border-white rounded-md transition">
            Talk with the Team
          </button>
          </Link>
        </div>
        {/* <p>hello</p> */}
        <div className="hidden md:block bg-black/50 text-white rounded-lg shadow-lg px-6 py-4 flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto text-center text-sm font-semibold mt-2 sm:mt-10 md:mt-10 lg:mt-16 whitespace-nowrap">
          <span>Digital Transformation</span>
          <span>IT Support as a Service (ITaaS)</span>
          <span>Digital Upskilling as a Service (DUaaS)</span>
        </div>
      </div>


    </section>
  )
}
