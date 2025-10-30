import { Component } from '@angular/core';
import { Genero } from '../../entity/genero';
import { GeneroService } from '../../service/genero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgenero',
  standalone: false,
  templateUrl: './addgenero.component.html',
  styleUrl: './addgenero.component.css'
})
export class AddgeneroComponent {

  gen = new Genero;

  constructor(private generoService:GeneroService, private router:Router){}
  ngOnInit(): void{}

  Cancelar(){
    this.router.navigate(["listgenero"]);
  }

  guardar(genero:Genero){
    if(typeof(genero.nombre) != "undefined"){
      this.generoService.addGenero(genero).subscribe(result => {
        if(result != null){
          alert("Genero: "+genero.nombre+" ingresado correctamente!");
          this.router.navigate(["listgenero"]);
        }
      });
    } else{
      alert("Debe ingresar datos!");
    }
  }

}
