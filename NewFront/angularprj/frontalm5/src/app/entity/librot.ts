import { Editorial } from "./editorial";


export class Libro{
  idLibro!: number;
  isbn!: string;
  titulo!: string;
  anioPublicacion!: number;
  fotografia!: String;
  editorial!: Editorial;
  serie!: string;
  totalEjemplares!: number;
  ejemplaresDisponibles!: number;
}
