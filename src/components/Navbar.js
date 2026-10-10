"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Berita", href: "/berita" },
    { name: "Prestasi", href: "/prestasi" },
    { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#173B73] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-white overflow-hidden p-0.5 flex items-center justify-center shrink-0 shadow">
            <Image
              src="/logosmanpa.jpeg"
              alt="Logo SMAN 4 Muaro Jambi"
              width={44}
              height={44}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-lg tracking-wide leading-tight group-hover:text-blue-100 transition">
              SMAN 4 Muaro Jambi
            </h1>
            <p className="text-xs text-blue-200 font-medium">
              Unggul, Berkarakter, dan Berprestasi
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition text-blue-100 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-blue-800 text-blue-100 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-blue-800 border-t border-blue-600 px-5 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition text-blue-100 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}