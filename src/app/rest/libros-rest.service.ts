import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  url:string="/webapi"
  constructor(public http:HttpClient) { }

  buscarTodos():Observable<Libro[]>{
    // return this.http.get<Libro[]>(`http://localhost:8080${this.url}/libros`).toPromise();
    return this.http.get<Libro[]>(`http://localhost:8080${this.url}/libros`);
    
  }

  borrar(libro: Libro):Observable<Libro>{
    // return this.http.delete<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`).toPromise(); 
    return this.http.delete<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`);
  }

  insertar(libro: Libro):Observable<Libro>{
    // return this.http.delete<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`).toPromise(); 
    return this.http.post<Libro>(`http://localhost:8080${this.url}/libros`,libro);
  }

  buscarUno(libro:Libro):Observable<Libro>{
    return this.http.get<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`);
  }

}
