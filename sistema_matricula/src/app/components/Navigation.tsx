"use client";
import React, { useState } from 'react';

import Link from 'next/link';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-green-500 to-cyan-700 text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            Mariscal AAC
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-yellow-300 font-semibold px-2 md:px-4 py-1 md:py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm md:text-base">Inicio</Link>
            <Link href="/institucion" className="hover:text-yellow-300 transition-colors duration-300 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-white/10 text-sm md:text-base">Nuestra Institución</Link>
            <Link href="/vida" className="hover:text-yellow-300 transition-colors duration-300 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-white/10 text-sm md:text-base">Vida Escolar</Link>
            <Link href="/nosotros" className="hover:text-yellow-300 transition-colors duration-300 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-white/10 text-sm md:text-base">Nosotros</Link>
            <Link href="/contacto" className="hover:text-yellow-300 transition-colors duration-300 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-white/10 text-sm md:text-base">Contacto</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-yellow-300 focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-green-500 to-cyan-700 text-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-semibold text-yellow-300 bg-white/10 hover:bg-white/20">Inicio</Link>
            <Link href="/institucion" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-300 hover:bg-white/10">Nuestra Institución</Link>
            <Link href="/vida" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-300 hover:bg-white/10">Vida Escolar</Link>
            <Link href="/nosotros" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-300 hover:bg-white/10">Nosotros</Link>
            <Link href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-300 hover:bg-white/10">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 