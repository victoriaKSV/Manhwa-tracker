// src/components/ManhwaCard.tsx
'use client';

import { Manhwa, EstadoLectura } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface ManhwaCardProps {
  manhwa: Manhwa;
  onEstadoChange?: (id: string, nuevoEstado: EstadoLectura) => void;
}

export default function ManhwaCard({ manhwa, onEstadoChange }: ManhwaCardProps) {
  const getEstadoColor = (estado: EstadoLectura) => {
    const colores = {
      leyendo: 'bg-violet-bright dark:bg-primary-600',
      leido: 'bg-green-500 dark:bg-green-700',
      pendiente: 'bg-violet-lavender dark:bg-primary-500',
      abandonado: 'bg-accent-rose dark:bg-primary-800',
      asco: 'bg-red-500 dark:bg-red-700',
    };
    return colores[estado] || 'bg-gray-400';
  };

  const getEstadoEmoji = (estado: EstadoLectura) => {
    const emojis = {
      leyendo: '📖',
      leido: '✅',
      pendiente: '⏳',
      abandonado: '😴',
      asco: '🤢',
    };
    return emojis[estado] || '❓';
  };

  return (
    <div className="bg-white dark:bg-primary-800 border border-violet-lavender/40 dark:border-primary-600 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-primary-900/70 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
      {/* Portada */}
      <Link href={`/manhwa/${manhwa.id}`}>
        <div className="relative h-64 bg-violet-light/30 dark:bg-primary-900 overflow-hidden">
          <Image
            src={manhwa.portada}
            alt={manhwa.titulo}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          {/* Badge de rating */}
          {manhwa.rating && (
            <div className="absolute top-2 right-2 bg-violet-lavender dark:bg-primary-600 text-white px-2 py-1 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm">
              ⭐ {manhwa.rating}
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Contenido */}
      <div className="p-4 transition-theme">
        <Link href={`/manhwa/${manhwa.id}`}>
          <h3 className="font-bold text-lg mb-2 text-primary-800 dark:text-violet-light hover:text-violet-bright dark:hover:text-violet-lavender transition-colors line-clamp-1">
            {manhwa.titulo}
          </h3>
        </Link>

        <p className="text-primary-600 dark:text-primary-200 text-sm mb-3 line-clamp-2">
          {manhwa.descripcion}
        </p>

        {/* Categorías */}
        <div className="flex flex-wrap gap-1 mb-3">
          {manhwa.categorias.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="bg-violet-bright/20 dark:bg-primary-700 text-primary-700 dark:text-violet-light text-xs px-2 py-1 rounded-full border border-violet-bright/30 dark:border-primary-600 transition-theme"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Estado selector */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-600 dark:text-primary-300">
            {manhwa.capitulos.length} capítulos
          </span>

          <select
            value={manhwa.estado}
            onChange={(e) => onEstadoChange?.(manhwa.id, e.target.value as EstadoLectura)}
            className={`${getEstadoColor(
              manhwa.estado
            )} text-white text-xs px-3 py-1 rounded-full font-semibold cursor-pointer hover:opacity-90 transition-all shadow-md hover:shadow-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <option value="leyendo">{getEstadoEmoji('leyendo')} Leyendo</option>
            <option value="leido">{getEstadoEmoji('leido')} Leído</option>
            <option value="pendiente">{getEstadoEmoji('pendiente')} Pendiente</option>
            <option value="abandonado">{getEstadoEmoji('abandonado')} Abandonado</option>
            <option value="asco">{getEstadoEmoji('asco')} Asco</option>
          </select>
        </div>
      </div>
    </div>
  );
}