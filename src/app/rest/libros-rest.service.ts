import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Libro } from '../libro';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  constructor(public http:HttpClient) { 
  }

  buscarTodos():Observable<Libro[]> {

    return this.http.get<Libro[]>(`${environment.APIEndpoint}/libros`);
  }
  buscarPorTitulo(titulo:string):Observable<Libro[]> {

    let parametros = new HttpParams().set('titulo', titulo);
    return this.http.get<Libro[]>(`${environment.APIEndpoint}/libros`,{params:parametros});
  }

  borrar(libro:Libro):Observable<Libro> {

    return this.http.delete<Libro>(`${environment.APIEndpoint}/libros/${libro.isbn}`);
  }

  insertar(libro:Libro):Observable<Libro> {

    return this.http.post<Libro>(`${environment.APIEndpoint}/libros`,libro);
  }
}
