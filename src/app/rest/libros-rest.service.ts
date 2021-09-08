import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  url:string="/webapi"
  constructor(public http:HttpClient) { }

  buscarTodos():Promise<Libro[]>{
    return this.http.get<Libro[]>(`http://localhost:8080${this.url}/libros`).toPromise();
    
  }

  borrar(libro: Libro):Promise<Libro>{
    return this.http.delete<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`).toPromise(); 
  }
}
