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

  constructor(public router:Router){}

  ngOnInit(): void {
    const usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      this.usuarioNombre = usuario.nombre;
    }
  }

  logout(): void {
    if (confirm('¿Seguro que deseas cerrar sesión?')) {
      localStorage.removeItem('usuario'); // 🔹 Elimina la sesión
      this.router.navigate(['/login']);   // 🔹 Redirige al login
    }
  }

}
