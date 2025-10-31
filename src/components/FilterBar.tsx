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
    <div className="bg-violet-light/20 dark:bg-primary-800 border border-violet-lavender/40 dark:border-primary-600 shadow-xl rounded-xl p-6 mb-8 backdrop-blur-sm transition-theme">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Filtro de Categorías */}
        <div>
          <label className="block text-sm font-semibold text-primary-700 dark:text-violet-light mb-2">
             Categoría
          </label>
          <select
            value={categoriaSeleccionada}
            onChange={(e) => onCategoriaChange(e.target.value)}
            className="w-full border border-violet-lavender/50 dark:border-primary-600 bg-white dark:bg-primary-900 text-primary-800 dark:text-violet-light rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-bright dark:focus:ring-primary-500 focus:border-transparent shadow-sm transition-theme cursor-pointer"
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
          <label className="block text-sm font-semibold text-primary-700 dark:text-violet-light mb-2">
             Estado de Lectura
          </label>
          <select
            value={estadoSeleccionado}
            onChange={(e) => onEstadoChange(e.target.value)}
            className="w-full border border-violet-lavender/50 dark:border-primary-600 bg-white dark:bg-primary-900 text-primary-800 dark:text-violet-light rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-bright dark:focus:ring-primary-500 focus:border-transparent shadow-sm transition-theme cursor-pointer"
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