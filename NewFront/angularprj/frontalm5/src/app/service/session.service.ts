import { Usuario } from './../entity/usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private usuarioSubject = new BehaviorSubject<any>(this.obtenerUsuarioLocal());
  usuario$ = this.usuarioSubject.asObservable();

  private obtenerUsuarioLocal(){
    const usuarioStr = localStorage.getItem('usuario');
    return usuarioStr ? JSON.parse(usuarioStr) : null;
  }

  setUsuario(usuario: any){
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioSubject.next(usuario);
  }

  clearUsuario(){
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
  }
}
