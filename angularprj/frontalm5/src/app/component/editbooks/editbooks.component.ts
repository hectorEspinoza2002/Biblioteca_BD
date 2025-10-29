import { Component, ViewChild } from '@angular/core';
import { Book } from '../../entity/libro';
import { Author } from '../../entity/autor';
import { BookService } from '../../service/book.service';
import { AuthorService } from '../../service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbooks',
  standalone: false,
  templateUrl: './editbooks.component.html',
  styleUrl: './editbooks.component.css'
})
export class EditbooksComponent {
   book=new Book;
myauthor = new Author;
availableAuthors: any[] = []; // Lista de autores disponibles
selectedAuthor: number=0;
  constructor (private service:BookService,private authorservice:AuthorService, private router:Router) {}
  ngOnInit(): void {
    this.loadAvailableAuthors();
    this.selectEdit();
  }


loadAvailableAuthors() {
  this.authorservice.listAuthors().subscribe(
    data => {
      this.availableAuthors = data;
    }
  );
}
  @ViewChild('myFocus') myFocus: any;

  ngAfterViewInit(): void {
    // Set focus to the firstName field
    this.myFocus.nativeElement.focus();
  }
selectEdit(){
  let isbn=localStorage.getItem("isbn");
  if (isbn)
  {
    this.service.searchBookId(isbn)
    .subscribe(result=>{
      this.book=result;
      this.selectedAuthor = Number(this.book.author.id);
    })

  }

}

editBook(book:Book)
{
  this.service.editBook(book)
  .subscribe(result=>{
  this.book=result;
   alert("Libro Modificado!");
  })
   this.router.navigate(["listbooks"]);
  }

  Cancel()
  {
    this.router.navigate(["listbooks"]);
  }
}
