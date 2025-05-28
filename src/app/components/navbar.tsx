"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from 'next/navigation';




type NavbarProps = {
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  logoSrc?: string;
};


const Navbar = ({ textColor = "text-[#3E3E3E]", borderColor = 'border-b border-black', bgColor = 'Transparent', logoSrc = '/logo.png' }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav 
    style={{ backgroundColor: bgColor }}
    className={`w-full shadow-md ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${textColor}`}>
          
          <Link href="/" className="flex items-center space-x-2">
                {pathname !== '/' && (
                  <MenuIcon className="text-gray-400" />
              )}
            <Image
              src={logoSrc || "/logo.png"}
              alt="TCL Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>

    
          <div className={`hidden md:flex space-x-6 text-xs font-semibold ${textColor}`}>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/trends">Trends & Insights</Link>
            <Link href="/subscribe">Subscribe</Link>
            <Link href="/contact">Contact</Link>
            
          </div>

          
          <div className="md:hidden flex items-center bg-white text-red rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <CloseIcon className="text-gray-800" />
              ) : (
                <MenuIcon className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>


      <div
  className={`md:hidden absolute bg-white w-full top-16 left-0 z-50 overflow-hidden transition-all duration-500 ease-in-out ${
    mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <div className="px-4 py-3 space-y-2 text-sm font-bold text-black">
    <Link href="/services" className="block">Services</Link>
    <Link href="/about" className="block">About</Link>
    <Link href="/trends" className="block">Trends & Insights</Link>
    <Link href="/subscribe" className="block">Subscribe</Link>
    <Link href="/contact" className="block">Contact</Link>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
