import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestamo } from '../entity/prestamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private baseUrl = 'http://localhost:9090/prestamos';

  constructor(private http: HttpClient) { }

  // 🟢 Obtener todos los préstamos
  getAll(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.baseUrl);
  }

  /* 🟢 Registrar un nuevo préstamo
  registrarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.baseUrl, prestamo);
  }
    */

  // 🟡 Registrar devolución de préstamo
  devolverPrestamo(id: number): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.baseUrl}/devolver/${id}`, {});
  }

  // 🔴 Eliminar un préstamo
  eliminarPrestamo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // Obtener préstamos por usuario
  getPrestamosPorUsuario(idUsuario: number): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(`${this.baseUrl}/usuario/${idUsuario}`);
  }

  registrarPrestamo(prestamo: any): Observable<any> {
  return this.http.post<any>('http://localhost:9090/prestamos', prestamo);
}


}
