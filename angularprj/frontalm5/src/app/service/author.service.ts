import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../entity/autor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:9090';

  listAuthors(){
    return this.http.get<Author[]>(this.Url+"/api/list_authors");
  }

  addAuthors(author:Author){
    return this.http.post<Author>(this.Url+"/api/create_authors",author);
  }

  searchAuthorId(id:String){
    return this.http.get<Author>(this.Url+"/api/list_author_id/"+id);
  }

  editAuthor(id:String,author:Author){
    return this.http.put<Author>(this.Url+"/api/update_authors/"+id,author);
  }

  deleteAuthor(author:Author){
    return this.http.delete(this.Url+"/api/delete_authors/"+author.id,{responseType: 'text'});
  }
}
