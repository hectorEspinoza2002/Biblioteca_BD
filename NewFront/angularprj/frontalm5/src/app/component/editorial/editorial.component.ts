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
  editoriales!: Editorial[];

  constructor(private ediService: EditorialService, private router: Router) {}

  ngOnInit(): void {
    this.ediService.getAll().subscribe((data) => {
      this.editoriales = data;
    });
  }

  deleteEditorial(ed: Editorial){
    var validar = confirm("Esta seguro que desea eliminar la editorial?");
    if(validar == true){
      this.ediService.deleteEditorial(ed).subscribe({
        next: (result) => {
          this.editoriales = this.editoriales.filter((x) => x !== ed);
          alert(result+ed.nombre+ " eliminada correctamente");
        },
        error: ()=>{
          alert("Ha ocurrido un error al eliminar la editorial");
        }
      })
    }
  }

  selectEdit(){

  }

  deleteEdit(){

  }

}
