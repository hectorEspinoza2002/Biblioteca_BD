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

}
