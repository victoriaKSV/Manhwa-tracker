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
      leyendo: 'bg-[#6ED5B6] dark:bg-[#4AA294]',
      leido: 'bg-[#5AB3AC] dark:bg-[#29827D]',
      pendiente: 'bg-[#4AA294] dark:bg-[#21736A]',
      abandonado: 'bg-[#767459] dark:bg-[#767459]',
      asco: 'bg-[#B86238] dark:bg-[#BF7E43]',
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
    <div className="bg-white dark:bg-[#143D37] border-2 border-[#4AA294] dark:border-[#4AA294] rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
      {/* Portada */}
      <Link href={`/manhwa/${manhwa.id}`}>
        <div className="relative h-64 bg-[#C4DCAC] dark:bg-[#0a1f1c] overflow-hidden">
          <Image
            src={manhwa.portada}
            alt={manhwa.titulo}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          {/* Badge de rating */}
          {manhwa.rating && (
            <div className="absolute top-2 right-2 bg-[#4AA294] dark:bg-[#21736A] text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg border-2 border-white dark:border-[#6ED5B6]">
              ⭐ {manhwa.rating}
            </div>
          )}
        </div>
      </Link>

      {/* Contenido */}
      <div className="p-4 transition-theme">
        <Link href={`/manhwa/${manhwa.id}`}>
          <h3 className="font-bold text-lg mb-2 text-[#143D37] dark:text-[#6ED5B6] hover:text-[#4AA294] dark:hover:text-[#C4DCAC] transition-colors line-clamp-1">
            {manhwa.titulo}
          </h3>
        </Link>

        <p className="text-[#21736A] dark:text-[#C4DCAC] text-sm mb-3 line-clamp-2">
          {manhwa.descripcion}
        </p>

        {/* Categorías */}
        <div className="flex flex-wrap gap-1 mb-3">
          {manhwa.categorias.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="bg-[#C4DCAC] dark:bg-[#21736A] text-[#143D37] dark:text-[#C4DCAC] text-xs px-2 py-1 rounded-full border border-[#4AA294] dark:border-[#6ED5B6] transition-theme font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Estado selector */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#21736A] dark:text-[#6ED5B6] font-medium">
            {manhwa.capitulos.length} capítulos
          </span>

          <select
            value={manhwa.estado}
            onChange={(e) => onEstadoChange?.(manhwa.id, e.target.value as EstadoLectura)}
            className={`${getEstadoColor(
              manhwa.estado
            )} text-white text-xs px-3 py-1 rounded-full font-semibold cursor-pointer hover:opacity-90 transition-all shadow-md hover:shadow-lg border-2 border-white/30`}
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