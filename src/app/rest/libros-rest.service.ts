import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libro } from '../libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  constructor(public http:HttpClient) { 
  }

  buscarTodos():Observable<Libro[]> {

    return this.http.get<Libro[]>("http://localhost:8081/webapi/libros");
  }
  borrar(libro:Libro):Observable<Libro> {

    return this.http.delete<Libro>(`http://localhost:8081/webapi/libros/${libro.isbn}`);
  }

  insertar(libro:Libro):Observable<Libro> {

    return this.http.post<Libro>(`http://localhost:8081/webapi/libros`,libro);
  }


}