import { UsuarioService } from './../../service/usuario.service';
import { Component } from '@angular/core';
import { Usuario } from '../../entity/usuario';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (usuario) => {
        alert('Bienvenido ' + usuario.nombre);
        this.sessionService.setUsuario(usuario); // 🔹 Guarda y actualiza la sesión
        this.router.navigate(['/principal']);
      },
      error: (err) => {
        if (err.status === 404) alert('Usuario no encontrado');
        else if (err.status === 401) alert('Contraseña incorrecta');
        else alert('Error al iniciar sesión');
      },
    });
  }

  irARegistro(): void {
    this.router.navigate(['/register']);
  }

  /*
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (usuario) => {
        alert('Bienvenido ' + usuario.nombre);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(['/principal']);
      },
      error: (err) => {
        if (err.status === 404) alert('Usuario no encontrado');
        else if (err.status === 401) alert('Contraseña incorrecta');
        else alert('Error al iniciar sesión');
      },
    });
  }

  irARegistro(): void {
    this.router.navigate(['/register']);
  }
    */
}
