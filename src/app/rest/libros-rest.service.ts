import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  
  constructor(public http:HttpClient) { }

  buscarTodos():Observable<Libro[]>{
    // return this.http.get<Libro[]>(`http://localhost:8080${this.url}/libros`).toPromise();
    return this.http.get<Libro[]>(`${environment.APIEndPoint}/libros`);
    
  }
  buscarPorTitulo(titulo:string):Observable<Libro[]>{
    let parametros=new HttpParams().set('titulo',titulo);
    return this.http.get<Libro[]>(`${environment.APIEndPoint}/libros`,{params:parametros});
    
  }

  borrar(libro: Libro):Observable<Libro>{
    // return this.http.delete<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`).toPromise(); 
    return this.http.delete<Libro>(`${environment.APIEndPoint}/libros/${libro.isbn}`);
  }

  insertar(libro: Libro):Observable<Libro>{
    // return this.http.delete<Libro>(`http://localhost:8080${this.url}/libros/${libro.isbn}`).toPromise(); 
    return this.http.post<Libro>(`${environment.APIEndPoint}/libros`,libro);
  }

  buscarUno(isbn:string):Observable<Libro>{
    return this.http.get<Libro>(`${environment.APIEndPoint}/libros/${isbn}`);
  }

}
