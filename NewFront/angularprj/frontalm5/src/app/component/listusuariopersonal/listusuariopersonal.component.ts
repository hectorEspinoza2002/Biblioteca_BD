import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../entity/usuario';
import { RolUsuario } from '../../entity/rolusuario';
import { RolusuarioService } from '../../service/rolusuario.service';
import { CarreraService } from '../../service/carrera.service';
import { Carrera } from '../../entity/carrera';

@Component({
  selector: 'app-listusuariopersonal',
  standalone: false,
  templateUrl: './listusuariopersonal.component.html',
  styleUrl: './listusuariopersonal.component.css'
})
export class ListusuariopersonalComponent {

  usuarios: Usuario[] = [];
  roles: RolUsuario[] = [];
  carreras: Carrera[] = [];

  nuevoUsuario: Usuario = new Usuario();
  modoEdicion: boolean = false;
  usuarioSeleccionadoId?: number;

  constructor(private usuarioService: UsuarioService, private router: Router, private carreraService: CarreraService,
    private rolService: RolusuarioService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarRoles();
    this.cargarCarreras();
  }

  cargarUsuarios() {
    this.usuarioService.getAll().subscribe(data => {
      this.usuarios = data;
    });
  }

  cargarRoles() {
    this.rolService.getAll().subscribe(data => {
      this.roles = data;
    });
  }

  cargarCarreras() {
    this.carreraService.getAll().subscribe(data => {
      this.carreras = data;
    });
  }

  guardarUsuario() {
    if (this.modoEdicion && this.usuarioSeleccionadoId) {
      // editar
      this.usuarioService.editUsuario(this.usuarioSeleccionadoId.toString(), this.nuevoUsuario)
        .subscribe({
          next: () => {
            alert('Usuario actualizado correctamente ✅');
            this.cancelarEdicion();
            this.cargarUsuarios();
          },
          error: () => alert('Error al actualizar el usuario')
        });
    } else {
      // crear
      this.usuarioService.addUsuario(this.nuevoUsuario)
        .subscribe({
          next: () => {
            alert('Usuario creado correctamente ✅');
            this.nuevoUsuario = new Usuario();
            this.cargarUsuarios();
          },
          error: () => alert('Error al crear el usuario')
        });
    }
  }

  seleccionarUsuario(us: Usuario) {
    this.modoEdicion = true;
    this.usuarioSeleccionadoId = us.idUsuario;
    this.nuevoUsuario = { ...us }; // copia los datos
  }

  eliminarUsuario(us: Usuario) {
    if (confirm(`¿Seguro que deseas eliminar al usuario "${us.nombre} ${us.apellido}"?`)) {
      this.usuarioService.deleteUsuario(us.idUsuario).subscribe({
        next: () => {
          alert(`Usuario "${us.nombre}" eliminado correctamente 🗑️`);
          this.cargarUsuarios();
        },
        error: () => alert('Error al eliminar el usuario')
      });
    }
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    this.usuarioSeleccionadoId = undefined;
    this.nuevoUsuario = new Usuario();
  }

}
