import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../../entity/prestamo';
import { PrestamoService } from '../../service/prestamo.service';

@Component({
  selector: 'app-prestamo-estudiante',
  standalone: false,
  templateUrl: './prestamo-estudiante.component.html',
  styleUrl: './prestamo-estudiante.component.css'
})
export class PrestamoEstudianteComponent implements OnInit {

  prestamos: Prestamo[] = [];
  usuario: any;

  constructor(private prestamoService: PrestamoService) {}

  ngOnInit(): void {
    // Recuperar el usuario logueado desde localStorage
    const usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      this.usuario = JSON.parse(usuarioStr);
      this.cargarPrestamos();
    } else {
      alert('No hay usuario logueado.');
    }
  }

  cargarPrestamos(): void {
    this.prestamoService.getPrestamosPorUsuario(this.usuario.idUsuario).subscribe({
      next: (data) => this.prestamos = data,
      error: (err) => console.error(err)
    });
  }

  devolverPrestamo(p: Prestamo): void {
    if (confirm('¿Deseas devolver este libro?')) {
      this.prestamoService.devolverPrestamo(p.idPrestamo!).subscribe({
        next: () => {
          alert('Libro devuelto correctamente.');
          this.cargarPrestamos();
        },
        error: (err) => alert('Error al devolver: ' + err.error)
      });
    }
  }

}
