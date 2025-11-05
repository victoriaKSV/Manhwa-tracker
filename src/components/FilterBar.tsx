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
    <div className="bg-white dark:bg-[#143D37] border-2 border-[#4AA294] dark:border-[#4AA294] shadow-xl rounded-xl p-6 mb-8 transition-theme">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Filtro de Categorías */}
        <div>
          <label className="block text-sm font-semibold text-[#143D37] dark:text-[#6ED5B6] mb-2">
            📚 Categoría
          </label>
          <select
            value={categoriaSeleccionada}
            onChange={(e) => onCategoriaChange(e.target.value)}
            className="w-full border-2 border-[#4AA294] dark:border-[#6ED5B6] bg-[#C4DCAC] dark:bg-[#0a1f1c] text-[#143D37] dark:text-[#C4DCAC] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6ED5B6] dark:focus:ring-[#4AA294] focus:border-transparent shadow-sm transition-theme cursor-pointer font-medium"
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
          <label className="block text-sm font-semibold text-[#143D37] dark:text-[#6ED5B6] mb-2">
            📖 Estado de Lectura
          </label>
          <select
            value={estadoSeleccionado}
            onChange={(e) => onEstadoChange(e.target.value)}
            className="w-full border-2 border-[#4AA294] dark:border-[#6ED5B6] bg-[#C4DCAC] dark:bg-[#0a1f1c] text-[#143D37] dark:text-[#C4DCAC] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6ED5B6] dark:focus:ring-[#4AA294] focus:border-transparent shadow-sm transition-theme cursor-pointer font-medium"
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