import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  Url = 'http://localhost:9090';

  constructor(private http:HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.Url + '/list_carrera');
  }
}
