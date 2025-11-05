import { Component, OnInit } from '@angular/core';
import { Libro } from '../../entity/librot';
import { LibroService } from '../../service/libro.service';
import { Router } from '@angular/router';

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

  constructor(private libroService: LibroService, private router: Router) {}

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

  prestamoLibro(l:Libro): void {
    localStorage.setItem('id', l.idLibro.toString());
    this.router.navigate(['/prestamo']);
  }

}
