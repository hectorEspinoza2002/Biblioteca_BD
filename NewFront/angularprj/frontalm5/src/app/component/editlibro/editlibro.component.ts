import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Libro } from '../../entity/librot';
import { LibroService } from '../../service/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editlibro',
  standalone: false,
  templateUrl: './editlibro.component.html',
  styleUrl: './editlibro.component.css'
})
export class EditlibroComponent implements AfterViewInit {

   libros: Libro = new Libro();

  constructor(
    private libroService: LibroService,
    private router: Router
  ) {}

  @ViewChild('myFocus') myFocus: any;

  ngAfterViewInit(): void {
    this.myFocus.nativeElement.focus();
  }

  ngOnInit(): void {
    this.selectEdit();
  }

  selectEdit() {
    const id = localStorage.getItem('id');
    if (id) {
      this.libroService.buscarLibro(id).subscribe(result => {
        this.libros = result;
      });
    }
  }

  editLibro(l: Libro) {
    const id = localStorage.getItem('id');
    if (id) {
      this.libroService.editLibro(id, l).subscribe(result => {
        this.libros = result;
        alert(`Libro: ${l.titulo} modificado!`);
        this.router.navigate(['/principal']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/principal']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        this.libros.fotografia = base64String; // 👈 corregido
      };
      reader.readAsDataURL(file);
    }
  }

}
