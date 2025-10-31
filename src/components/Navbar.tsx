// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-violet-bright via-primary-400 to-violet-lavender dark:from-primary-700 dark:via-primary-800 dark:to-primary-900 text-white shadow-2xl border-b border-violet-lavender/30 dark:border-primary-600/50 transition-theme">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-all duration-300 drop-shadow-lg hover:scale-105">
           Manhwa Tracker
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-violet-light transition-colors font-medium">
            Catálogo
          </Link>
          <Link href="/biblioteca" className="hover:text-violet-light transition-colors font-medium">
            Mi Biblioteca
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-white/20 hover:bg-white/30 dark:bg-primary-800 dark:hover:bg-primary-700 px-3 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-primary-600"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="bg-white text-primary-600 dark:bg-primary-600 dark:text-violet-light px-4 py-2 rounded-lg font-semibold hover:bg-violet-light hover:text-primary-700 dark:hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}