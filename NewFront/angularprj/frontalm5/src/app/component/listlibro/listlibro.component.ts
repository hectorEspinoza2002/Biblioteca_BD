import { Component, OnInit } from '@angular/core';
import { Libro } from '../../entity/librot';
import { LibroService } from '../../service/libro.service';
import { Router } from '@angular/router';
import { Editorial } from '../../entity/editorial';
import { EditorialService } from '../../service/editorial.service';

@Component({
  selector: 'app-listlibro',
  standalone: false,
  templateUrl: './listlibro.component.html',
  styleUrl: './listlibro.component.css'
})
export class ListlibroComponent implements OnInit{

  libros: Libro[] = [];
  libro: Libro = new Libro();
  modoEditar = false; // 👈 indica si estás editando
  editoriales: Editorial[] = [];

  constructor(private libroService: LibroService, private router: Router, private editorialService:EditorialService ) {}

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarEditoriales();
  }

  cargarLibros(): void {
    this.libroService.getAll().subscribe({
      next: (data) => this.libros = data,
      error: () => alert('Error al cargar libros')
    });
  }

  cargarEditoriales() {
    this.editorialService.getAll().subscribe(data => this.editoriales = data);
  }

  guardarLibro(): void {
    if (this.modoEditar) {
      // Editar libro existente
      this.libroService.editLibro(this.libro.idLibro.toString(), this.libro).subscribe({
        next: () => {
          alert('📘 Libro actualizado correctamente');
          this.resetFormulario();
          this.cargarLibros();
        },
        error: () => alert('Error al actualizar el libro')
      });
    } else {
      // Crear nuevo libro
      this.libroService.addLibro(this.libro).subscribe({
        next: () => {
          alert('📕 Libro agregado correctamente');
          this.resetFormulario();
          this.cargarLibros();
        },
        error: () => alert('Error al agregar el libro')
      });
    }
  }

  editarLibro(l: Libro): void {
    this.modoEditar = true;
    this.libro = { ...l }; // copiar datos al formulario
  }

  eliminarLibro(l: Libro): void {
    if (confirm(`¿Seguro que deseas eliminar el libro "${l.titulo}"?`)) {
      this.libroService.deleteLibro(l).subscribe({
        next: (result) => {
          alert(result);
          this.cargarLibros();
        },
        error: () => alert('Error al eliminar el libro')
      });
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        this.libro.fotografia = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  resetFormulario(): void {
    this.libro = new Libro();
    this.modoEditar = false;
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
    this.router.navigate([""]);
  }
    */

}
