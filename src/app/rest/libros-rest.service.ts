import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  constructor(public http:HttpClient) { 
  }

  buscarTodos():Promise<Libro[]> {
    console.log(this.http);
    return this.http.get<Libro[]>("http://localhost:8080/libros").toPromise();
  }
  borrar(libro:Libro):Promise<Libro> {

    return this.http.delete<Libro>(`http://localhost:8080/libros/${libro.isbn}`).toPromise();
  }
}
