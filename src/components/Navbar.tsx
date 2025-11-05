// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-[#4AA294] dark:bg-[#0a1f1c] text-white shadow-2xl border-b-4 border-[#21736A] dark:border-[#4AA294] transition-theme">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-[#C4DCAC] dark:hover:text-[#6ED5B6] transition-all duration-300 drop-shadow-lg hover:scale-105">
          🍃 Manhwa Tracker
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-[#C4DCAC] dark:hover:text-[#6ED5B6] transition-colors font-medium">
            Catálogo
          </Link>
          <Link href="/biblioteca" className="hover:text-[#C4DCAC] dark:hover:text-[#6ED5B6] transition-colors font-medium">
            Mi Biblioteca
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-[#6ED5B6] hover:bg-[#5AB3AC] dark:bg-[#21736A] dark:hover:bg-[#4AA294] px-3 py-2 rounded-lg transition-all duration-300 border-2 border-white/30 dark:border-[#4AA294]"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="bg-white text-[#143D37] dark:bg-[#4AA294] dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#C4DCAC] hover:text-[#143D37] dark:hover:bg-[#6ED5B6] dark:hover:text-[#143D37] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-[#143D37] dark:border-[#6ED5B6]">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}