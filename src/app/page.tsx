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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Catálogo de Manhwas
          </h1>
          <p className="text-gray-600">
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
            className="w-full px-6 py-4 rounded-lg shadow-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
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
        <div className="mb-4 text-gray-600">
          Mostrando <strong>{manhwasFiltrados.length}</strong> de{' '}
          <strong>{manhwas.length}</strong> manhwas
        </div>

        {/* Grid de manhwas */}
        {manhwasFiltrados.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">😕 No se encontraron manhwas</p>
            <p className="text-gray-500 mt-2">Intenta cambiar los filtros</p>
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