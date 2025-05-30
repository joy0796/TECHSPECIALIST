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
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];



  return (
    <footer className="bg-[#0D0D0D] text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Info */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png" // Adjust path as needed
            alt="Techspecialist Logo"
            width={200}
            height={40}
          />
          <p className="mt-2 text-sm mx-auto font-inter">TCL © 2008</p>
        </div>

        {/* Mission Statement */}
        <div className=" md:text-left text-[39.18px] font-[600] font-custom">
          <h2 className=" mb-2">
            ...Bridging the <br/> gap between{' '}
          
            <span className="text-blue-400">users</span> <span>&</span> 
            <span className="text-[#ED5D25]">technology</span>
          </h2>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-[24.53px] font-semibold mb-2">Location</h3>
          <p className="flex items-start gap-2 text-[18.59]">
            <LocationOn fontSize="small" className="mt-0.5" />
            No. 2 Harare street, Wuse Zone 6, Abuja, F.C.T.
          </p>
        </div>

        {/* Contact Info */}
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

      {/* Bottom Links */}
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
