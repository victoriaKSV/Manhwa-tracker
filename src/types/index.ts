// src/types/index.ts

export interface Manhwa {
  id: string;
  titulo: string;
  descripcion: string;
  portada: string;
  estado: EstadoLectura;
  categorias: string[];
  capitulos: Capitulo[];
  rating?: number;
}

export interface Capitulo {
  id: string;
  numero: number;
  titulo: string;
  url: string;
  fechaPublicacion?: string;
}

export interface Comentario {
  id: string;
  usuarioId: string;
  usuarioNombre: string;
  texto: string;
  fecha: string;
  manhwaId: string;
}

export type EstadoLectura = 'leyendo' | 'leido' | 'abandonado' | 'asco' | 'pendiente';

export interface Usuario {
  id: string;
  username: string;
  email: string;
}