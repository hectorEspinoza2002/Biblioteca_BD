import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../entity/usuario';
import { Observable } from 'rxjs';
import { Genero } from '../entity/genero';
import { RolUsuario } from '../entity/rolusuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  Url = 'http://localhost:9090';

   obtenerUsuarioPorId(id: number): Observable<any> {
    return this.http.get(`${this.Url}/list_usuario/${id}`);
  }

  // Obtener todos los usuarios
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.Url + '/list_usuario');
  }

  // Crear usuario
  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.Url + '/create_usuario', usuario);
  }

  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.Url + '/register', usuario);
  }

  // Editar usuario
  editUsuario(id: string, usuario: Usuario){
    return this.http.put<Usuario>(this.Url + '/update_usuario/' + id, usuario);
  }

  // Eliminar usuario
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  // Obtener roles para el select
  getRoles(): Observable<RolUsuario[]> {
    return this.http.get<RolUsuario[]>(this.Url + '/list_rol');
  }

  /*

  listUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.Url}/usuarios`);
  }

  obtenerUsuarioPorId(id: string): Observable<Usuario> {
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
