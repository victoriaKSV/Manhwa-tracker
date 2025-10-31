// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-black dark:to-gray-900 text-white shadow-lg border-b border-transparent dark:border-gray-800">
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
          <button
            onClick={toggleTheme}
            className="bg-white/20 hover:bg-white/30 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="bg-white text-primary-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}