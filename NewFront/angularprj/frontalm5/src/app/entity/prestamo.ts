import { EstadoPrestamo } from "./estadoPrestamo";
import { Libro } from "./librot";
import { Usuario } from "./usuario";

export class Prestamo {
  idPrestamo!: number;
  usuario!: Usuario;
  libro!: Libro;
  fechaPrestamo!: Date;
  fechaDevolucionPrevista!: Date;
  fechaDevolucionReal!: Date;
  estado!: EstadoPrestamo;
}
