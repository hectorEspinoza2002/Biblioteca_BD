import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  usuario: any = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // 1️⃣ Obtener el usuario guardado en localStorage
    const usuarioStr = localStorage.getItem('usuario');

    if (usuarioStr) {
      const usuarioGuardado = JSON.parse(usuarioStr);

      // 2️⃣ Consultar al backend para tener los datos actualizados
      this.usuarioService.obtenerUsuarioPorId(usuarioGuardado.idUsuario).subscribe({
        next: (data) => {
          this.usuario = data;
        },
        error: (err) => {
          console.error('Error al obtener el usuario:', err);
        }
      });
    }
  }

}
