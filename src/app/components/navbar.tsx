"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

type NavbarProps = {
  textColor?: "white" | "black";
};

const Navbar = ({ textColor: heroTextColor }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomeStyle = ["/"].includes(pathname);

  const isCaseStudyPage = [
    "/casestudy1",
    "/casestudy2",
    "/casestudy3",
    "/subscribe",
    "/contact",
  ].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolledPast = isScrolled;

  

  // Text color: Use heroTextColor on home page when not scrolled, else black
  // New: always use heroTextColor if passed, else default to black
  const effectiveTextColor =
  heroTextColor === "white" && !isScrolledPast ? "white" : "black";

const borderColor =
  heroTextColor === "white" && !isScrolledPast ? "border-white" : "border-black";

// const logoSrc =
//   heroTextColor === "white" && !isScrolledPast ? "/logo2.png" : "/logo.png";

// const logoSrc = !isScrolledPast ? "/logo2.png" : "/logo.png";
const logoSrc = (() => {
  if (!isScrolledPast) {
    if (isHomeStyle) {
      // On home page and not scrolled, logo depends on text color
      return heroTextColor === "white" ? "/logo2.png" : "/logo.png";
    } else {
      // On other pages and not scrolled, always logo2.png (white logo)
      return "/logo2.png";
    }
  }
  // On any page and scrolled, use black logo
  return "/logo.png";
})();



const iconColorClass =
  effectiveTextColor === "white" ? "text-white" : "text-black";


  const isActive = (href: string) =>
    pathname === href ? "text-[#ED5D25]" : "";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 border-b ${borderColor} ${
        isCaseStudyPage
          ? "bg-blue-500"
          : isScrolledPast
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center h-16 transition-colors duration-300 ${
            effectiveTextColor === "white" ? "text-white" : "text-black"
          }`}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logoSrc}
              alt="TCL Logo"
              width={120}
              height={40}
              className="object-contain transition-all duration-300"
            />
          </Link>

          <div className="hidden md:flex space-x-10 text-[19px] font-[600]">
            <Link
              href="/services"
              className={`${isActive("/services")} font-custom`}
            >
              Services
            </Link>
            <Link href="/about" className={`${isActive("/about")} font-custom`}>
              About
            </Link>
            <Link href="/trends" className={`${isActive("/trends")} font-custom`}>
              Trends & Insights
            </Link>
            <Link
              href="/subscribe"
              className={`${isActive("/subscribe")} font-custom`}
            >
              Subscribe
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact")} font-custom`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <CloseIcon className={iconColorClass} />
              ) : (
                <MenuIcon className={iconColorClass} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full top-16 left-0 z-40 transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ${
          isCaseStudyPage
            ? "bg-blue-500 text-white"
            : isScrolledPast || !isHomeStyle
            ? "bg-white text-black"
            : effectiveTextColor === "white"
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="px-4 py-3 space-y-2 text-sm font-bold">
          <Link
            href="/services"
            className={`block ${isActive("/services")}`}
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`block ${isActive("/about")}`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/trends"
            className={`block ${isActive("/trends")}`}
            onClick={() => setMobileOpen(false)}
          >
            Trends & Insights
          </Link>
          <Link
            href="/subscribe"
            className={`block ${isActive("/subscribe")}`}
            onClick={() => setMobileOpen(false)}
          >
            Subscribe
          </Link>
          <Link
            href="/contact"
            className={`block ${isActive("/contact")}`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
