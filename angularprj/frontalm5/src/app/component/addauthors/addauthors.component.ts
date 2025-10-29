import { Component } from '@angular/core';
import { Author } from '../../entity/autor';
import { AuthorService } from '../../service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthors',
  standalone: false,
  templateUrl: './addauthors.component.html',
  styleUrl: './addauthors.component.css'
})
export class AddauthorsComponent {
  author = new Author;
  tmpauthor = new Author;

  constructor(private service: AuthorService, private router: Router){}
  ngOnInit(): void{}
  Cancel() {
    this.router.navigate(["listauthors"]);
  }

  Save(author:Author) {
    if(typeof(author.name) != "undefined"){
      this.service.addAuthors(author).subscribe(result => {
        if(result != null){
          alert("autor ingresado");
          this.router.navigate(["listauthors"]);
        } else {
          alert("Author ya existe, verifique");
        }
      });
    } else {
      alert("Debe ingresar nombre");
    }

  }

}
