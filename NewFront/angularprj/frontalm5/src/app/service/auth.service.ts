import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entity/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.Url + '/login', { email, password });
  }

  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.Url + '/register', usuario);
  }
}
