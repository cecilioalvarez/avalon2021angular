import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros: Libro[] = [];

  constructor() {

    this.listaLibros.push(new Libro("4", "java", "pedro"));
    this.listaLibros.push(new Libro("5", "net", "ana"));
    this.listaLibros.push(new Libro("6", "php", "maria"));
    this.listaLibros.push(new Libro("7", "python", "javier"));

  }
  public buscarTodos(): Libro[] {

    return this.listaLibros;
  }
  public borrarLibro(libro: Libro) {

    let libroborrar = this.listaLibros.filter(function (e) {
      return e.isbn == libro.isbn;
    })[0];

    let posicion = this.listaLibros.indexOf(libroborrar);
    this.listaLibros.splice(posicion, 1);

  }

  public insertar(libro:Libro):void {
    this.listaLibros.push(libro);
  }
}