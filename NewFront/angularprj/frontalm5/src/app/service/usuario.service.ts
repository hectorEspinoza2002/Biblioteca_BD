import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../entity/usuario';
import { Observable } from 'rxjs';
import { Genero } from '../entity/genero';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  Url = 'http://localhost:9090/api';
  /*

  listUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.Url}/usuarios`);
  }

  buscarUsuarioId(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.Url}/${id}`);
  }

  login(loginRequest: { idUsuario: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.Url}/login`, loginRequest);
  }

  addUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.Url}/usuarios`, usuario);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.Url}/${id}`, { responseType: 'text' });
  }

*/
}
