'use client';

import Image from 'next/image';

type Member = {
  name: string;
  role: string;
  image: string;
};

type TeamGroup = {
  title: string;
  members: Member[];
};

const teamData: TeamGroup[] = [
  {
    title: 'Board of Directors',
    members: [
      { name: 'Adedayo Eyiaro', role: 'Chairman', image: '/team1.png' },
      { name: 'Joy Eboh Adah', role: 'Board Member', image: '/team2.png' },
      { name: 'Daniel Taiwo', role: 'Board Member', image: '/team3.png' },
      { name: 'Toyyib Ijaya', role: 'Board Member', image: '/team4.png' },
      { name: 'Temitope Ayeni', role: 'Board Member', image: '/team5.png' },
      { name: 'Godwin Arigbonu', role: 'Board Member', image: '/team9.png' },
    ],
  },
  {
    title: 'Management Team',
    members: [
      { name: 'Olusola Afolabi', role: 'MD Techspecialist Consulting', image: '/myGuy.png' },
      { name: 'Victoria Ubi', role: 'Human Resources', image: '/team7.png' },
      { name: 'Zainab Sanni', role: 'Team Lead, Technical Services', image: '/team8.png' },
      { name: 'Zainab Sanni', role: 'Team Lead, Cybersecurity', image: '/kadir.png' },
      { name: 'Godwin Arigbonu', role: 'MD Techspecialist Consulting', image: '/kadir.png' },
    ],
  },
  {
    title: 'Meet the Team',
    members: [
      { name: 'Damilola Adebayo', role: 'Branding & Communications', image: '/kadir.png' },
      { name: 'Adedayo Eyiaro', role: 'Business Development Specialist', image: '/kadir.png' },
      { name: 'Temitope Ayeni', role: 'AV Specialist', image: '/kadir.png' },
      { name: 'Victoria Ubi', role: 'IT Support Technician', image: '/kadir.png' },
      { name: 'Gbolahan Afolabi', role: 'IT Support Technician', image: '/kadir.png' },
      { name: 'Toyin Ijaiya', role: 'System Administrator', image: '/kadir.png' },
      { name: 'Oluwagbolahan Aina', role: 'IT Support Technician', image: '/kadir.png' },
      { name: 'Danielle Udochi', role: 'IT Support Technician', image: '/kadir.png' },
      { name: 'Suleman Olalomi', role: 'IT Support Technician', image: '/kadir.png' },
      { name: 'Daniel Taiwo', role: 'IT Support Technician', image: '/kadir.png' },
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {teamData.map((group, idx) => (
          <div key={idx}>
            <h2 className="text-center text-[30px] md:text-[40px] font-[600] font-sans text-gray-800 mb-10 text-[#3E3E3E]">
              {group.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 place-items-center">
              {group.members.map((member, i) => (
                <div key={i} className="text-center">
                  <div className="relative w-48 h-60 mx-auto mb-4 rounded overflow-hidden border border-gray-200 shadow-sm">  
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="font-[600] font-sans text-[20px] md:text-[23px] text-gray-900">{member.name}</p>
                  <p className="text-[17px] font-[400] font-sans text-[#3E3E3E] mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
