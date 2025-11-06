import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../../entity/prestamo';
import { PrestamoService } from '../../service/prestamo.service';

@Component({
  selector: 'app-prestamo',
  standalone: false,
  templateUrl: './prestamo.component.html',
  styleUrl: './prestamo.component.css'
})
export class PrestamoComponent implements OnInit {

   prestamos: Prestamo[] = [];

  constructor(private prestamoService: PrestamoService) {}

  ngOnInit(): void {
    this.cargarPrestamos();
  }

  cargarPrestamos() {
    this.prestamoService.getAll().subscribe(data => this.prestamos = data);
  }

  devolver(p: Prestamo) {
    if (confirm(`¿Deseas registrar la devolución del libro ${p.libro.idLibro}?`)) {
      this.prestamoService.devolverPrestamo(p.idPrestamo!).subscribe({
        next: () => this.cargarPrestamos(),
        error: err => alert(err.error)
      });
    }
  }

  eliminar(p: Prestamo) {
    if (confirm('¿Deseas eliminar este préstamo?')) {
      this.prestamoService.eliminarPrestamo(p.idPrestamo!).subscribe({
        next: () => this.cargarPrestamos(),
        error: err => alert(err.error)
      });
    }
  }

}
