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

  // 🗑️ Eliminar libro
  deleteLibro(lib: Libro) {
    var validar = confirm('¿Está seguro que desea eliminar el Libro: ' + lib.titulo + '?');
    if (validar) {
      this.libroService.deleteLibro(lib).subscribe({
        next: (result) => {
          this.libros = this.libros.filter((x) => x !== lib);
          alert(result);
          this.configurarPaginacion(); // 🔁 actualiza la paginación después de eliminar
        },
        error: () => {
          alert('Ha ocurrido un error al eliminar el libro.');
        },
      });
    }
  }

  // ✏️ Seleccionar libro para editar
  selectlibro(l: Libro): void {
    localStorage.setItem('id', l.idLibro.toString());
    this.router.navigate(['/editlibro']);
  }

  /*
  libros!: Libro[];

  constructor(private libroService: LibroService, private router: Router){}

  ngOnInit(): void {

    this.libroService.getAll().subscribe(data => {
      this.libros = data;
    });

  }

  deleteLibro(lib: Libro){
    var validar = confirm("Esta seguro que desea eliminar el Libro: "+lib.titulo);
    if(validar == true){
      this.libroService.deleteLibro(lib).subscribe({
        next: (result) => {
          this.libros = this.libros.filter(x => x !== lib);
          alert(result);
        },
        error: () => {
        alert("Ha ocurrido un errore al eliminar el libro.");
        },
      });
    }
  }

  selectlibro(l:Libro): void {
    localStorage.setItem("id",l.idLibro.toString().valueOf());
    this.router.navigate(["/editlibro"]);
  }
*/
}
