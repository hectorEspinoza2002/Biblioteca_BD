import { Component, OnInit } from '@angular/core';
import { Libro } from '../../entity/librot';
import { LibroService } from '../../service/libro.service';
import { Router } from '@angular/router';
import { PrestamoService } from '../../service/prestamo.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../entity/usuario';
import { Prestamo } from '../../entity/prestamo';

@Component({
  selector: 'app-principal',
  standalone: false,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{

  libros: Libro[] = [];
  librosPaginados: Libro[] = [];

  // 🔹 Variables de paginación
  paginaActual = 1;
  librosPorPagina = 6;
  totalPaginas = 0;
  totalPaginasArray: number[] = [];

  constructor(private libroService: LibroService, private router: Router, private prestamoService: PrestamoService) {}

  ngOnInit(): void {
    this.libroService.getAll().subscribe((data) => {
      this.libros = data;
      this.configurarPaginacion();
    });
  }

  // ⚙️ Inicializa la paginación
  configurarPaginacion(): void {
    this.totalPaginas = Math.ceil(this.libros.length / this.librosPorPagina);
    this.totalPaginasArray = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
    this.mostrarPagina(this.paginaActual);
  }

  // 📖 Muestra los libros de la página actual
  mostrarPagina(pagina: number): void {
    const inicio = (pagina - 1) * this.librosPorPagina;
    const fin = inicio + this.librosPorPagina;
    this.librosPaginados = this.libros.slice(inicio, fin);
    this.paginaActual = pagina;
  }

  // ⏩ Cambia de página
  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.mostrarPagina(pagina);
    }
  }

  // 🟢 Método para prestar libro
  prestarLibro(libro: Libro): void {
    //const usuarioId = localStorage.getItem('usuarioId'); // o donde guardes el usuario logueado
    // 🔹 Obtener el usuario completo del localStorage
    const usuarioStr = localStorage.getItem('usuario');

    if (!usuarioStr) {
      Swal.fire('Error', 'Debes iniciar sesión para poder prestar libros.', 'error');
      return;
    }

    // 🔹 Parsear el objeto
    const usuario = JSON.parse(usuarioStr);

    const prestamo = {
      usuario: { idUsuario: usuario.idUsuario },
      libro: { idLibro: libro.idLibro },
      estado: { idEstado: 1 } // Estado "Activo" o el ID que corresponda
    };

    this.prestamoService.registrarPrestamo(prestamo).subscribe({
      next: (res) => {
        Swal.fire('✅ Préstamo registrado', `Has prestado "${libro.titulo}" correctamente.`, 'success');
        libro.ejemplaresDisponibles--;
      },
      error: (err) => {
        const mensaje = err.error || 'Ocurrió un error al registrar el préstamo.';
        Swal.fire('⚠️ Error', mensaje, 'error');
      }
    });
  }

}
