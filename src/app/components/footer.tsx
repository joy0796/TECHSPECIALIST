'use client';
import Link from 'next/link';

import Image from 'next/image';
import {
  MailOutline,
  Phone,
  Twitter,
  Instagram,
  LocationOn,
} from '@mui/icons-material';

export default function Footer() {

const footerLinks = [
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Trends & Insights', path: '/trends' },
  { label: 'Subscribe', path: '/subsribe' },
  { label: 'Contact', path: '/contact' },
];



  return (
    <footer className="bg-[#0D0D0D] text-white px-6 md:px-12 py-10">
      <div className=" flex flex-col md:flex-row justify-between gap-10">
        {/* Logo*/}
        <div>
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png"
            alt="Techspecialist Logo"
            width={200}
            height={40}
          />
          <p className="mt-2 text-sm mx-auto font-inter">TCL © 2008</p>
        </div>

        <div className="flex flex-col items-start">
          <div className='text-center'>
            <p className="mt-2 text-[7.96px] mx-auto font-Poppins text-center ml-14 font-[500]">member of</p>
          </div>
          <Image
            src="/footerimg.png"
            alt="Techspecialist Logo"
            width={30}
            height={40}
            className='mx-auto'
          />
          <p className="mt-2 text-[11.63px] mx-auto font-[500] font-Poppins">Mswitch Group</p>
        </div>
        </div>

        {/* Mission Statement */}
        <div className="ml-10 text-[39.18px] font-[600] font-sans">
          <h2 className=" mb-2">
            ...bridging the <br/>gap between{' '}
          
            <span className="text-blue-400">users</span> <span>&</span> 
            <span className="text-[#ED5D25]">technology</span>
          </h2>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-[24.53px] font-semibold mb-2 font-sans">Location</h3>
          <p className="flex items-center gap-4">
            <LocationOn fontSize="medium" className="mt-0.5 w-[21.77px] h-[25.14px]" />
            <span className='text-[18.59px]'>No. 2 Harare street, Wuse Zone 6, Abuja, F.C.T.</span>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[24.53px] font-semibold mb-2">Contact us</h3>
          <ul className="text-[18.59px] space-y-2">
            <li className="flex items-center gap-2">
              <MailOutline fontSize="small" /> info@techspecialistlimited.com
            </li>
            <li className="flex items-center gap-2">
              <Phone fontSize="small" /> +234 0929 11443
            </li>
            <li className="flex items-center gap-2">
              <Twitter fontSize="small" /> @tclafrica
            </li>
            <li className="flex items-center gap-2">
              <Instagram fontSize="small" /> @tclafrica
            </li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-[19px] flex flex-wrap gap-4">
  {footerLinks.map(({ label, path }) => (
    <Link key={label} href={path} className="hover:text-gray-400">
      {label}
    </Link>
  ))}
</div>
    </footer>
  );
}
