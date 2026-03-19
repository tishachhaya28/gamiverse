"use client";

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

import SearchModal from "@/components/SearchModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
              <img 
                src="/Logo.png" 
                alt="Gamiverse" 
                className="h-20 sm:h-24 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">HOME</Link>
            <Link href="/aboutus" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">ABOUT US</Link>
            <Link href="/developer" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">DEVELOPER</Link>
            <Link href="/affiliates" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">AFFILIATES</Link>
            <Link href="/contactus" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">CONTACT US</Link>
            
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-primary transition-colors outline-none"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2">
          <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md">HOME</Link>
          <Link href="/aboutus" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md">ABOUT US</Link>
          <Link href="/developer" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md">DEVELOPER</Link>
          <Link href="/affiliates" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md">AFFILIATES</Link>
          <Link href="/contactus" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-primary rounded-md">CONTACT US</Link>
        </div>
      )}
    </nav>
    <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
