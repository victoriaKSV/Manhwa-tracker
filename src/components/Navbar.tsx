// src/components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
          📚 Manhwa Tracker
        </Link>
        
        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:underline">
            Catálogo
          </Link>
          <Link href="/biblioteca" className="hover:underline">
            Mi Biblioteca
          </Link>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}