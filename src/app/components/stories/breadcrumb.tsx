'use client';

import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="w-full border-b-2 border-orange-600 bg-white py-4 px-4 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap text-[16px] text-orange-600 font-[700] uppercase space-x-1 font-sans">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-1">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
