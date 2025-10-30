import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../entity/librot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9090';

  buscarLibro(id: String){
    return this.http.get<Libro>(this.Url + '/list_libro/'+id);
  }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.Url + '/list_libro');
  }

  deleteLibro(lib: Libro){
    return this.http.delete(this.Url + '/delete_libro/' + lib.idLibro, {responseType: 'text'});
  }

  addLibro(l:Libro){
    return this.http.post<Libro>(this.Url + '/create_libro',l);
  }

  editLibro(id: String, updateLibro: Libro){
    return this.http.put<Libro>(this.Url +'/update_libro/'+id, updateLibro);
  }

}
