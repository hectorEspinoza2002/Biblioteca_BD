import { Component, ViewChild } from '@angular/core';
import { Author } from '../../entity/autor';
import { AuthorService } from '../../service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editauthors',
  standalone: false,
  templateUrl: './editauthors.component.html',
  styleUrl: './editauthors.component.css'
})
export class EditauthorsComponent {
  constructor (private service:AuthorService, private router:Router) {}
  ngOnInit(): void {
    this.selectEdit();
  }
  authors=new Author;
  @ViewChild('myFocus') myFocus: any;

  ngAfterViewInit(): void {
    // Set focus to the firstName field
    this.myFocus.nativeElement.focus();
  }

  selectEdit(){
    let id=localStorage.getItem("id");
    if (id)
    {
      this.service.searchAuthorId(id)
      .subscribe(result=>{
        this.authors=result;
      })
    }
  }

  editAuthor(author:Author)
  { let id=localStorage.getItem("id");
    if (id)
    {
       this.service.editAuthor(id,author)
      .subscribe(result=>{
      this.authors=result;
      this.router.navigate(["listauthors"]);
       alert("Autor Modificado!");

      })
    }
  }

  Cancel()
  {
    this.router.navigate(["listauthors"]);
  }
}
