import { Component, OnInit } from '@angular/core';
import { Book } from '../../entity/libro';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbooks',
  standalone: false,
  templateUrl: './listbooks.component.html',
  styleUrl: './listbooks.component.css',
})
export class ListbooksComponent implements OnInit{
  books!: Book[];

  constructor(private service: BookService, private router: Router) {}
  ngOnInit(): void {
    this.service.listBooks().subscribe(data => {
      this.books = data;
    })
  }
  deleteBook(book: Book) {
    var valida = confirm("Está seguro que desea eliminar el registro?");
    if (valida == true) {
      this.service.deleteBook(book).subscribe(result => {
        this.books = this.books.filter(x => x !== book);
        alert(result);
      })
    }
  }

  selectEdit(book: Book): void {
    localStorage.setItem("isbn", book.isbn.valueOf());
    this.router.navigate(["editbooks"]);
  }
}
