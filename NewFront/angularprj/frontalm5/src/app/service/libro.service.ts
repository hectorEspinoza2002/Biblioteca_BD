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
    return this.http.get<Libro>(this.Url + '');
  }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.Url + '');
  }

  deleteLibro(lib: Libro){
    return this.http.delete(this.Url + '' + lib.idLibro, {responseType: 'text'});
  }

  addLibro(l:Libro){
    return this.http.post<Libro>(this.Url + '',l);
  }

}
