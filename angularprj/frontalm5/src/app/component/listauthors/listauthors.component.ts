import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Author } from '../../entity/author';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-listauthors',
  standalone: false,
  templateUrl: './listauthors.component.html',
  styleUrl: './listauthors.component.css',
})
export class ListauthorsComponent implements OnInit {
  authors!: Author[];

  constructor(private service: AuthorService, private router: Router) {}
  ngOnInit(): void {
    this.service.listAuthors().subscribe(data => {
      this.authors = data;
    })
  }

  deleteAuthor(author: Author) {
    var valida = confirm("Está seguro que desea eliminar el registro?");
    if (valida == true) {
      this.service.deleteAuthor(author).subscribe({
        next: (result) => {
          this.authors = this.authors.filter(x => x !== author);
          alert(result);
        },
        error: () => {
          alert("Ha ocurrido un error al eliminar el autor.\nVerifique que no existan libros");
        },
      });
    }
  }

  selectEdit(author: Author): void {
    localStorage.setItem("id", author.id.toString().valueOf());
    this.router.navigate(["editauthors"]);
  }
}
