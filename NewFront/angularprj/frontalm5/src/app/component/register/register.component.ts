import { Component } from '@angular/core';
import { Usuario } from '../../entity/usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) {}

  registrar(): void {
    this.authService.register(this.usuario).subscribe({
      next: () => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);
      },
      error: () => alert('Error al registrar usuario'),
    });
  }

  cancelar(): void {
    this.router.navigate(['/login']);
  }

}
