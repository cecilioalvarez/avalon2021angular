import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Libro } from '../libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  constructor(public http:HttpClient) { 
  }

  buscarTodos():Observable<Libro[]> {

    return this.http.get<Libro[]>("http://localhost:8080/webapi/libros");
  }
  buscarPorTitulo(titulo:string):Observable<Libro[]> {

    let parametros = new HttpParams().set('titulo', titulo);
    return this.http.get<Libro[]>("http://localhost:8080/webapi/libros",{params:parametros});
  }

  borrar(libro:Libro):Observable<Libro> {

    return this.http.delete<Libro>(`http://localhost:8080/webapi/libros/${libro.isbn}`);
  }

  insertar(libro:Libro):Observable<Libro> {

    return this.http.post<Libro>(`http://localhost:8080/webapi/libros`,libro);
  }
}
