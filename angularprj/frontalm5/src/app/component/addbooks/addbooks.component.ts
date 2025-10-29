import { Component } from '@angular/core';
import { Book } from '../../entity/libro';
import { Author } from '../../entity/autor';
import { BookService } from '../../service/book.service';
import { AuthorService } from '../../service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  standalone: false,
  templateUrl: './addbooks.component.html',
  styleUrl: './addbooks.component.css',
})
export class AddbooksComponent{
  book = new Book;
  myauthor = new Author;
  availableAuthors: any[] = []; // Lista de autores disponibles
  selectedAuthor: number = 0;

  constructor(
    private service: BookService,
    private authorservice: AuthorService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadAvailableAuthors();
  }

  loadAvailableAuthors() {
    this.authorservice.listAuthors().subscribe(data => {
      this.availableAuthors = data;
    });
  }

  Save(book:Book) {
    if (typeof (book.isbn) != "undefined") {
      if (typeof (book.name) != "undefined") {
        if (typeof (this.selectedAuthor) !== "undefined") {
          this.authorservice
            .searchAuthorId(this.selectedAuthor.toString().trim())
            .subscribe(adata => {
              book.author = adata;
              this.service.addBooks(book).subscribe(result => {
                if (result != null) {
                  alert("Libro Ingresado");
                  this.router.navigate(["listbooks"]);
                } else {
                  alert("Libro ya existe, Verifique!");
                }
              });
            })

          // Resto del código del componente

          /*this.service.addBooks(book)
          .subscribe(data=>{
            this.router.navigate(["listbooks"]);
          });
          */
        } else {
          alert("Debe ingresar autor");
        }
      } else {
        alert("Debe ingresar nombre");
      }
    } else {
      alert("Debe ingresar ISBN");
    }
  }
  Cancel() {
    this.router.navigate(["listbooks"]);
  }
}
