import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  usuarioNombre: string = '';
  rolId: number = 0;


  esProfesor: boolean = false;
  esPersonal: boolean = false;

  constructor(public router:Router){}

  ngOnInit(): void {
    const usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      this.usuarioNombre = usuario.nombre;
      this.rolId = usuario.rol?.idRol || 0;

      this.esProfesor = this.rolId === 2;
      this.esPersonal = this.rolId === 3;
      console.log(this.rolId);
    }
  }

  logout(): void {
    if (confirm('¿Seguro que deseas cerrar sesión?')) {
      localStorage.removeItem('usuario'); // 🔹 Elimina la sesión
      this.router.navigate(['/login']);   // 🔹 Redirige al login
    }
  }

}
