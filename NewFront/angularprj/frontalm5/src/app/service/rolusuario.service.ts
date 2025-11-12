import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolusuarioService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9090';

  getAll(): Observable<any[]>{
      return this.http.get<any[]>(this.Url + '/list_rol');
    }

}
