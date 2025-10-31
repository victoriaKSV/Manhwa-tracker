// src/data/mockManhwas.ts
import { Manhwa } from '@/types';

export const mockManhwas: Manhwa[] = [
  {
    id: '1',
    titulo: 'The Beginning After The End',
    descripcion: 'El Rey Grey tiene una fuerza, riqueza y prestigio inigualables, pero la soledad lo persigue. Renace en un mundo de magia y monstruos como Arthur Leywin.',
    portada: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400',
    estado: 'leyendo',
    categorias: ['Reencarnación', 'Fantasía', 'Acción'],
    capitulos: [
      { id: 'c1-1', numero: 1, titulo: 'Renacimiento', url: '#' },
      { id: 'c1-2', numero: 2, titulo: 'Nueva vida', url: '#' },
    ],
    rating: 9.2,
  },
  {
    id: '2',
    titulo: 'Solo Leveling',
    descripcion: 'En un mundo donde cazadores luchan contra monstruos, Sung Jinwoo es el más débil. Todo cambia cuando obtiene un poder de "regresión" único.',
    portada: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400',
    estado: 'leido',
    categorias: ['Regresión', 'Acción', 'Fantasía'],
    capitulos: [
      { id: 'c2-1', numero: 1, titulo: 'El cazador más débil', url: '#' },
      { id: 'c2-2', numero: 2, titulo: 'Sistema', url: '#' },
    ],
    rating: 9.8,
  },
  {
    id: '3',
    titulo: 'Omniscient Reader\'s Viewpoint',
    descripcion: 'Kim Dokja es el único que conoce el final de una novela web que se vuelve realidad. Usa su conocimiento para sobrevivir.',
    portada: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400',
    estado: 'leyendo',
    categorias: ['reencarnación', 'fantasía', 'drama'],
    capitulos: [
      { id: 'c3-1', numero: 1, titulo: 'Tres formas de sobrevivir', url: '#' },
    ],
    rating: 9.5,
  },
  {
    id: '4',
    titulo: 'Trash of the Count\'s Family',
    descripcion: 'Kim Rok Soo reencarna en el cuerpo de Cale Henituse, un noble conocido por ser basura. Decide vivir tranquilamente.',
    portada: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400',
    estado: 'pendiente',
    categorias: ['reencarnación', 'comedia', 'fantasía'],
    capitulos: [],
    rating: 9.1,
  },
  {
    id: '5',
    titulo: 'The Return of the Crazy Demon',
    descripcion: 'Un guerrero legendario regresa al pasado y decide vivir sin restricciones esta vez.',
    portada: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400',
    estado: 'leyendo',
    categorias: ['regresión', 'acción', 'artes marciales'],
    capitulos: [
      { id: 'c5-1', numero: 1, titulo: 'Regreso', url: '#' },
    ],
    rating: 8.9,
  },
  {
    id: '6',
    titulo: 'Second Life Ranker',
    descripcion: 'Yeon-woo busca venganza por su hermano gemelo asesinado, usando el reloj que le dejó con todas sus memorias.',
    portada: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400',
    estado: 'abandonado',
    categorias: ['reencarnación', 'acción', 'venganza'],
    capitulos: [
      { id: 'c6-1', numero: 1, titulo: 'El reloj', url: '#' },
    ],
    rating: 8.7,
  },
  {
    id: '7',
    titulo: 'The Tutorial Tower of the Advanced Player',
    descripcion: 'Atrapado en un tutorial durante 12 años, finalmente escapa con habilidades sobrenaturales.',
    portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
    estado: 'asco',
    categorias: ['regresión', 'acción'],
    capitulos: [],
    rating: 7.5,
  },
  {
    id: '8',
    titulo: 'Nano Machine',
    descripcion: 'Cheon Yeo-Woon recibe una nano máquina del futuro que cambia su destino en el mundo de las artes marciales.',
    portada: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400',
    estado: 'leido',
    categorias: ['reencarnación', 'artes marciales', 'sci-fi'],
    capitulos: [
      { id: 'c8-1', numero: 1, titulo: 'Nano máquina', url: '#' },
    ],
    rating: 9.0,
  },
];