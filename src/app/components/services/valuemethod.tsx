"use client";

const methodologyItems = [
  {
    title: "Strategic Discovery & Digital Assessment",
    description: `We start by deeply understanding your organizations strategic goals, digital environment, and transformation potential. This includes Business Value Mapping to align priorities with measurable outcomes; a Technology Ecosystem Assessment to evaluate systems, architecture, and integrations; Digital Maturity Benchmarking against industry standards; and a Capability Gap Analysis to identify critical skill, process, and technology needs required to reach your objectives.`,
  },
  {
    title: "Value-Driven Solution Design",
    description: `Our expert IT architects develop tailored transformation blueprints aligned with your organizations unique context and goals. This includes designing business-aligned technology frameworks, selecting optimal solutions based on scalability and long-term value, creating phased implementation roadmaps that balance quick wins with strategic growth, and establishing ROI models with clear metrics to track and sustain value over time.`,
  },
  {
    title: "Excellence in Execution & Change Enablement",
    description: `Our experienced service delivery teams execute with precision, combining agile methodologies for rapid value delivery with deep enterprise integration expertise to ensure seamless alignment with existing systems. We prioritize human-centered change management to drive adoption through effective stakeholder engagement, while maintaining rigorous quality assurance standards to ensure reliable, high-impact outcomes.`,
  },
  {
    title: "Continuous Value Optimization & Support",
    description: `We build long-term partnerships anchored in continuous innovation and measurable results. This includes proactive performance management to optimize solutions over time, leveraging data-driven insights to uncover new opportunities, conducting regular strategic technology reviews to stay ahead of emerging trends, and supporting ongoing capability development through knowledge transfer and team upskilling.`,
  },
];

const ValueMethodologySection = () => {
  return (
    <section className="bg-white py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-bold text-[#3E3E3E] mb-2">
          The Techspecialist Value Methodology
        </h2>
        <p className="text-[#979595] max-w-3xl mx-auto mb-12 text-xs">
          TCLs proprietary engagement methodology has been refined through over a decade of successful digital transformation implementations. This structured yet flexible approach ensures maximum value creation, seamless implementation, and sustainable long-term outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodologyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-xl transition hover:shadow-2xl border border-gray-300 text-start"
            >
              <h3 className="text-sm font-semibold text-[#3E3E3E] mb-4">{item.title}</h3>
              <p className="text-[#979595] text-xs text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueMethodologySection;
