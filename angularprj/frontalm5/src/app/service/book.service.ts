import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entity/libro';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:9090';

  listBooks(){
    return this.http.get<Book[]>(this.Url+"/api/list_books");
  }

  addBooks(book:Book){
    return this.http.post<Book>(this.Url+"/api/create_books",book);
  }

  searchBookId(id:String){
    return this.http.get<Book>(this.Url+"/api/list_books/"+id);
  }

  editBook(book:Book){
    return this.http.put<Book>(this.Url+"/api/update_books",book);
  }

  deleteBook(book:Book){
    return this.http.delete(this.Url+"/api/delete_books/"+book.isbn,{responseType: 'text'});
  }

}
