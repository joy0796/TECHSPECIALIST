"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on page and scroll state
  const textColor = isScrolled || isHomePage ? "text-black" : "text-white";
  const iconColor = textColor;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 transition-colors duration-300 ${textColor}`}>
          <Link href="/" className="flex items-center space-x-2">
            {pathname !== "/" && <MenuIcon className={iconColor} />}
            <Image
              src="/logo.png"
              alt="TCL Logo"
              width={120}
              height={40}
              className="object-contain transition-all duration-300"
            />
          </Link>

          <div className={`hidden md:flex space-x-6 text-sm font-semibold ${textColor}`}>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/trends">Trends & Insights</Link>
            <Link href="/subscribe">Subscribe</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="md:hidden flex items-center rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <CloseIcon className={iconColor} />
              ) : (
                <MenuIcon className={iconColor} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full top-16 left-0 z-40 transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ${isScrolled ? "bg-white text-black" : isHomePage ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <div className="px-4 py-3 space-y-2 text-sm font-bold">
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
