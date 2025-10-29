import { Editorial } from "./editorial";

export class Libro{
  idLibro!: number;
  isbn!: string;
  titulo!: string;
  anioPublicacion!: Date;
  editorial!: Editorial;
  serie!: string;
  totalEjemplares!: number;
  ejemplaresDisponible!: number;
}
