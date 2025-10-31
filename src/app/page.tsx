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
    <main className="min-h-screen bg-gradient-to-br from-accent-pink via-violet-light/40 to-violet-lavender/60 dark:from-primary-900 dark:via-primary-800 dark:to-violet-ultra transition-theme">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-violet-light mb-2 drop-shadow-lg">
            Catálogo de Manhwas
          </h1>
          <p className="text-primary-600 dark:text-primary-200">
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
            className="w-full px-6 py-4 rounded-xl shadow-lg border border-violet-lavender/50 dark:border-primary-600 bg-white/90 dark:bg-primary-800/90 backdrop-blur-sm text-primary-900 dark:text-violet-light placeholder:text-primary-500 dark:placeholder:text-primary-300 focus:ring-2 focus:ring-violet-bright dark:focus:ring-primary-500 focus:border-transparent text-lg transition-theme"
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
        <div className="mb-4 text-primary-700 dark:text-primary-200">
          Mostrando <strong className="text-violet-bright dark:text-violet-lavender">{manhwasFiltrados.length}</strong> de{' '}
          <strong className="text-violet-bright dark:text-violet-lavender">{manhwas.length}</strong> manhwas
        </div>

        {/* Grid de manhwas */}
        {manhwasFiltrados.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-primary-600 dark:text-primary-400">😕 No se encontraron manhwas</p>
            <p className="text-primary-500 dark:text-primary-300 mt-2">Intenta cambiar los filtros</p>
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

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-bright/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-lavender/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-pink/10 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}