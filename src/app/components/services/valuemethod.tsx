"use client";
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


export default function ValueMethodologySection() {
  useEffect(() => {
        AOS.init();
      }, []);

  const pillars = [
    {
      title: "Strategic Discovery & Digital Assessment",
      description:
        "We start by deeply understanding your organization’s strategic goals, digital environment, and transformation potential. This includes Business Value Mapping to align priorities with measurable outcomes; a Technology Ecosystem Assessment to evaluate systems, architecture, and integrations; Digital Maturity Benchmarking against industry standards; and a Capability Gap Analysis to identify critical skill, process, and technology needs required to reach your objectives.",
    },
    {
      title: "Value-Driven Solution Design",
      description:
        "Our expert IT architects develop tailored transformation blueprints aligned with your organization’s unique context and goals. This includes designing business-aligned technology frameworks, selecting optimal solutions based on scalability and long-term value, creating phased implementation roadmaps that balance quick wins with strategic growth, and establishing ROI models with clear metrics to track and sustain value over time.",
    },
    {
      title: "Excellence in Execution & Change Enablement",
      description:
        "Our experienced service delivery teams execute with precision, combining agile methodologies for rapid value delivery with deep enterprise integration expertise to ensure seamless alignment with existing systems. We prioritize human-centered change management to drive adoption through effective stakeholder engagement, while maintaining rigorous quality assurance standards to ensure reliable, high-impact outcomes.",
    },
    {
      title: "Continuous Value Optimization & Support",
      description:
        "We build long-term partnerships anchored in continuous innovation and measurable results. This includes proactive performance management to optimize solutions over time, leveraging data-driven insights to uncover new opportunities, conducting regular strategic technology reviews to stay ahead of emerging trends, and supporting ongoing capability development through knowledge transfer and team upskilling.",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          The Techspecialist Value Methodology
        </h2>
        <p className="text-gray-700 mt-4 text-base max-w-3xl mx-auto">
          TCL’s proprietary engagement methodology has been refined through over a decade of successful digital transformation implementations. This structured yet flexible approach ensures maximum value creation, seamless implementation, and sustainable long-term outcomes.
        </p>
      </div>

      {/* Card Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-white text-gray-800 rounded-xl shadow-xl p-6 text-left"
            data-aos="fade-right"
     data-aos-offset="200"
     
          >
            <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
            <p className="text-md leading-relaxed text-justify">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
