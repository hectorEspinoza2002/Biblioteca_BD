import { Component, OnInit } from '@angular/core';
import { Genero } from '../../entity/genero';
import { GeneroService } from '../../service/genero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listgenero',
  standalone: false,
  templateUrl: './listgenero.component.html',
  styleUrl: './listgenero.component.css'
})
export class ListgeneroComponent implements OnInit{

  generos!: Genero[];

  constructor(private genService: GeneroService, private router:Router){}
  ngOnInit(): void {
      this.genService.getAll().subscribe(data => {
        this.generos = data;
      })
  }

  deleteRol(g:Genero){
    var validar = confirm("Esta seguro que desea eliminar el Genero "+g.nombre);
    if(validar == true){
      this.genService.deleteGenero(g).subscribe({
        next: (result) => {
          this.generos = this.generos.filter(x => x !== g);
          alert(result);
        },
        error: () => {
          alert("Ha ocurrido un error al eliminar el genero.\nVerifique que no existan usuarios");
        },
      });
    }
  }

  selectRol(g:Genero): void{
    localStorage.setItem("id",g.idGenero.toString().valueOf());
    this.router.navigate(["editgenero"])
  }

}
