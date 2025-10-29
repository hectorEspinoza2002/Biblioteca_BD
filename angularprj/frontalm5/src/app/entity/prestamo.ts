import { EstadoPrestamo } from './EstadoPrestamo';
import { Libro } from './libro';

export class Prestamo {
  idPrestamo!: number;
  usuario!: string;
  libro!: Libro;
  fechaPrestamo!: Date;
  fechaDevolucionPrevista!: Date;
  fechaDevolucionReal!: Date;
  estado!: EstadoPrestamo;
}
