// src/components/FilterBar.tsx
'use client';

interface FilterBarProps {
  categoriaSeleccionada: string;
  estadoSeleccionado: string;
  onCategoriaChange: (categoria: string) => void;
  onEstadoChange: (estado: string) => void;
}

export default function FilterBar({
  categoriaSeleccionada,
  estadoSeleccionado,
  onCategoriaChange,
  onEstadoChange,
}: FilterBarProps) {
  const categorias = ['todas', 'reencarnación', 'regresión', 'fantasía', 'acción', 'artes marciales'];
  const estados = ['todos', 'leyendo', 'leido', 'pendiente', 'abandonado', 'asco'];

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md rounded-lg p-6 mb-8 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Filtro de Categorías */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            📂 Categoría
          </label>
          <select
            value={categoriaSeleccionada}
            onChange={(e) => onCategoriaChange(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 dark:focus:ring-gray-600 focus:border-transparent"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro de Estado */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            📊 Estado de Lectura
          </label>
          <select
            value={estadoSeleccionado}
            onChange={(e) => onEstadoChange(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 dark:focus:ring-gray-600 focus:border-transparent"
          >
            {estados.map((estado) => (
              <option key={estado} value={estado}>
                {estado.charAt(0).toUpperCase() + estado.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}