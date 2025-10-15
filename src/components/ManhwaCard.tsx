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
      leyendo: 'bg-blue-500',
      leido: 'bg-green-500',
      pendiente: 'bg-yellow-500',
      abandonado: 'bg-gray-500',
      asco: 'bg-red-500',
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Portada */}
      <Link href={`/manhwa/${manhwa.id}`}>
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <Image
            src={manhwa.portada}
            alt={manhwa.titulo}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
          {/* Badge de rating */}
          {manhwa.rating && (
            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-bold text-sm">
              ⭐ {manhwa.rating}
            </div>
          )}
        </div>
      </Link>

      {/* Contenido */}
      <div className="p-4">
        <Link href={`/manhwa/${manhwa.id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-purple-600 transition line-clamp-1">
            {manhwa.titulo}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {manhwa.descripcion}
        </p>

        {/* Categorías */}
        <div className="flex flex-wrap gap-1 mb-3">
          {manhwa.categorias.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Estado selector */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {manhwa.capitulos.length} capítulos
          </span>
          
          <select
            value={manhwa.estado}
            onChange={(e) => onEstadoChange?.(manhwa.id, e.target.value as EstadoLectura)}
            className={`${getEstadoColor(
              manhwa.estado
            )} text-white text-xs px-3 py-1 rounded-full font-semibold cursor-pointer hover:opacity-80 transition`}
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