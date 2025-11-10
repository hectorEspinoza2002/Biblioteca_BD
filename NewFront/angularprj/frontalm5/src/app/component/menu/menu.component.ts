import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  usuarioNombre: string = '';
  idRol: number | null = null;

  constructor(
    private sessionService: SessionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.sessionService.usuario$.subscribe(usuario => {
      if (usuario) {
        this.usuarioNombre = usuario.nombre;
        this.idRol = usuario.rol.idRol;
      } else {
        this.usuarioNombre = '';
        this.idRol = null;
      }
    });
  }

  logout(): void {
    if (confirm('¿Seguro que deseas cerrar sesión?')) {
      this.sessionService.clearUsuario();
      this.router.navigate(['/login']);
    }
  }

  /*

   usuarioNombre: string = '';
  idRol: number | null = null; // guardamos el rol del usuario

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.cargarUsuario();
    // Nos suscribimos al evento de cambio en localStorage
    window.addEventListener('storage', () => this.cargarUsuario());
  }

  cargarUsuario(): void {
    const usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      this.usuarioNombre = usuario.nombre;
      this.idRol = usuario.rol.idRol;
      console.log(this.idRol);
    } else {
      this.usuarioNombre = '';
      this.idRol = null;
    }
  }

  logout(): void {
    if (confirm('¿Seguro que deseas cerrar sesión?')) {
      localStorage.removeItem('usuario');
      this.cargarUsuario(); // actualiza el menú
      this.router.navigate(['/login']);
    }
  }
    */

/*
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
*/
}
