// src/app/page.tsx
'use client';

import { useState, useMemo } from 'react';
import ManhwaCard from '@/components/ManhwaCard';
import FilterBar from '@/components/FilterBar';
import { mockManhwas } from '@/data/mockManhwas';
import { Manhwa, EstadoLectura } from '@/types';

export default function Home() {
  const [manhwas, setManhwas] = useState<Manhwa[]>(mockManhwas);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [estadoSeleccionado, setEstadoSeleccionado] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  // Filtrar manhwas
  const manhwasFiltrados = useMemo(() => {
    return manhwas.filter((manhwa) => {
      // Filtro de categoría
      const coincideCategoria =
        categoriaSeleccionada === 'todas' ||
        manhwa.categorias.some((cat) =>
          cat.toLowerCase().includes(categoriaSeleccionada.toLowerCase())
        );

      // Filtro de estado
      const coincideEstado =
        estadoSeleccionado === 'todos' || manhwa.estado === estadoSeleccionado;

      // Filtro de búsqueda
      const coincideBusqueda =
        busqueda === '' ||
        manhwa.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        manhwa.descripcion.toLowerCase().includes(busqueda.toLowerCase());

      return coincideCategoria && coincideEstado && coincideBusqueda;
    });
  }, [manhwas, categoriaSeleccionada, estadoSeleccionado, busqueda]);

  // Cambiar estado de un manhwa
  const handleEstadoChange = (id: string, nuevoEstado: EstadoLectura) => {
    setManhwas((prev) =>
      prev.map((m) => (m.id === id ? { ...m, estado: nuevoEstado } : m))
    );
  };

  return (
    <main className="min-h-screen bg-[#C4DCAC] dark:bg-[#0a1f1c] transition-theme">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D37] dark:text-[#6ED5B6] mb-2 drop-shadow-lg">
            Catálogo de Manhwas
          </h1>
          <p className="text-[#21736A] dark:text-[#C4DCAC]">
            Descubre y organiza tus manhwas de reencarnación favoritos
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Buscar por título o descripción..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full px-6 py-4 rounded-xl shadow-lg border-2 border-[#4AA294] dark:border-[#4AA294] bg-white dark:bg-[#143D37] text-[#143D37] dark:text-[#C4DCAC] placeholder:text-[#4AA294] dark:placeholder:text-[#6ED5B6] focus:ring-2 focus:ring-[#6ED5B6] dark:focus:ring-[#4AA294] focus:border-transparent text-lg transition-theme"
          />
        </div>

        {/* Filtros */}
        <FilterBar
          categoriaSeleccionada={categoriaSeleccionada}
          estadoSeleccionado={estadoSeleccionado}
          onCategoriaChange={setCategoriaSeleccionada}
          onEstadoChange={setEstadoSeleccionado}
        />

        {/* Contador de resultados */}
        <div className="mb-4 text-[#143D37] dark:text-[#6ED5B6]">
          Mostrando <strong className="text-[#4AA294] dark:text-[#C4DCAC]">{manhwasFiltrados.length}</strong> de{' '}
          <strong className="text-[#4AA294] dark:text-[#C4DCAC]">{manhwas.length}</strong> manhwas
        </div>

        {/* Grid de manhwas */}
        {manhwasFiltrados.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-[#21736A] dark:text-[#C4DCAC]">😕 No se encontraron manhwas</p>
            <p className="text-[#4AA294] dark:text-[#6ED5B6] mt-2">Intenta cambiar los filtros</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {manhwasFiltrados.map((manhwa) => (
              <ManhwaCard
                key={manhwa.id}
                manhwa={manhwa}
                onEstadoChange={handleEstadoChange}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}