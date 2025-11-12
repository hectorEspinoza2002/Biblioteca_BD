import { Component, OnInit } from '@angular/core';
import { Editorial } from '../../entity/editorial';
import { EditorialService } from '../../service/editorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial',
  standalone: false,
  templateUrl: './editorial.component.html',
  styleUrl: './editorial.component.css',
})
export class EditorialComponent implements OnInit {

  editoriales: Editorial[] = [];
  nuevaEditorial: Editorial = new Editorial();
  modoEdicion: boolean = false;
  editorialSeleccionadaId?: number;

  constructor(private ediService: EditorialService, private router: Router) {}

  ngOnInit(): void {
    this.cargarEditoriales();
  }

  cargarEditoriales() {
    this.ediService.getAll().subscribe((data) => {
      this.editoriales = data;
    });
  }

  guardarEditorial() {
    if (this.modoEdicion && this.editorialSeleccionadaId) {
      // Modo editar
      this.ediService.editEditorial(this.editorialSeleccionadaId.toString(), this.nuevaEditorial)
        .subscribe({
          next: () => {
            alert('Editorial actualizada correctamente ✅');
            this.cancelarEdicion();
            this.cargarEditoriales();
          },
          error: () => alert('Error al actualizar la editorial')
        });
    } else {
      // Modo crear
      this.ediService.addEditorial(this.nuevaEditorial)
        .subscribe({
          next: () => {
            alert('Editorial creada correctamente ✅');
            this.nuevaEditorial = new Editorial();
            this.cargarEditoriales();
          },
          error: () => alert('Error al crear la editorial')
        });
    }
  }

  seleccionarEditorial(ed: Editorial) {
    this.modoEdicion = true;
    this.editorialSeleccionadaId = ed.idEditorial;
    this.nuevaEditorial = { ...ed }; // copia los datos al formulario
  }

  eliminarEditorial(ed: Editorial) {
    if (confirm(`¿Seguro que deseas eliminar la editorial "${ed.nombre}"?`)) {
      this.ediService.deleteEditorial(ed).subscribe({
        next: () => {
          alert(`Editorial "${ed.nombre}" eliminada correctamente 🗑️`);
          this.cargarEditoriales();
        },
        error: () => alert('Error al eliminar la editorial')
      });
    }
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    this.editorialSeleccionadaId = undefined;
    this.nuevaEditorial = new Editorial();
  }

}
