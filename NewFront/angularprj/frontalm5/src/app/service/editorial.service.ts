import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../entity/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  Url = 'http://localhost:9090';

  constructor(private http:HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.Url + '/list_editorial');
  }

  searchEditorial(id: String) {
    return this.http.get<Editorial>(this.Url + '/list_editorial/' + id);
  }

  editEditorial(id: String, updateEdit: Editorial) {
    return this.http.put<Editorial>(
      this.Url + '/update_editorial/' + id,
      updateEdit
    );
  }

  addEditorial(edit: Editorial) {
    return this.http.post<Editorial>(this.Url + '/create_editorial', edit);
  }

  deleteEditorial(ed: Editorial) {
    return this.http.delete(this.Url + '/delete_editorial/' + ed.idEditorial, {
      responseType: 'text',
    });
  }
}
