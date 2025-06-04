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
    <footer className="bg-[#0D0D0D] text-white px-6 md:px-20 py-6">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* Logo*/}
        <div>
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png"
            alt="Techspecialist Logo"
            width={120}
            height={40}
          />
          <p className="mt-2 font-inter md:ml-4 font-inter font-[500] text-[15px] md:text-[18.59px]">TCL © 2008</p>
        </div>

        <div className="hidden md:block items-start">
          <div className='text-center'>
            <p className="mt-2 text-[7.96px] mx-auto font-Poppins text-center font-[500]">member of</p>
          </div>

          <div className="w-5 h-5 mx-auto relative">
          <Image
            src="/footerimg.png"
            alt="Techspecialist Logo"
            fill
            className="object-contain"
          />
          </div>


          <p className="mt-2 text-[11.63px] mx-auto font-[500] font-Poppins md:ml-4">Mswitch Group</p>
        </div>
        </div>

        {/* Mission Statement */}
        <div className="text-[25px] md:text-[35px] font-[600] font-custom leading-[120%]">
          <h2 className=" mb-2">
            ...bridging the <br/>gap between <br/>
          
            <span className="text-blue-400">users</span> <span>& </span> 
            <span className="text-[#ED5D25]">technology</span>
          </h2>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-[17px] md:text-[24.53px] font-[600] mb-2 font-custom">Location</h3>
          <p className="flex items-center gap-4">
            <LocationOn fontSize="medium" className="mt-0.5 w-[21.77px] h-[25.14px]" />
            <span className='text-[14px] md:text-[18.59px] font-[500] font-inter'>No. 2 Harare street, Wuse<br/> Zone 6, Abuja, F.C.T.</span>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[17px] md:text-[24.53px] font-[600] font-custom mb-2">Contact us</h3>
          <ul className="text-[18.59px] space-y-2">
            <li className="flex items-center gap-2">
              <MailOutline fontSize="small" /> <span className='font-inter font-[500] text-[16px] md:text-[18.59px]'>info@techspecialistlimited.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone fontSize="small" /> <span className='font-inter font-[500] text-[16px] md:text-[18.59px]'>+234 0929 11443</span>
            </li>
            <li className="flex items-center gap-2">
              <Twitter fontSize="small" /> <span className='font-inter font-[500] text-[16px] md:text-[18.59px]'>@tclafrica</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram fontSize="small" /> <span className='font-inter font-[500] text-[16px] md:text-[18.59px]'>@tclafrica</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-[15px] md:text-[19px] flex flex-wrap gap-4 font-[600] font-custom">
  {footerLinks.map(({ label, path }) => (
    <Link key={label} href={path} className="hover:text-gray-400">
      {label}
    </Link>
  ))}
</div>
    </footer>
  );
}
