import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros: Libro[] = []
  constructor() {
    this.listaLibros.push(new Libro("1", "java", "autor"), new Libro("2", "java2", "autor2"), new Libro("3", "java3", "autor3"),)

  }

  public buscarTodos(): Libro[] {
    return this.listaLibros
  }

  public borrarLibro(libro: Libro) {

    let libroborrar = this.listaLibros.filter(function (e) {
      return e.isbn == libro.isbn;
    })[0];

    let posicion = this.listaLibros.indexOf(libroborrar);
    this.listaLibros.splice(posicion, 1);

  }
  public detalleLibro(libro: Libro):Libro {
    let librodetalle = this.listaLibros.filter(function (e) {
      return e.isbn == libro.isbn;
    })[0];
    return librodetalle
  }
  public insertarLibro(libro:Libro):void {
    this.listaLibros.push(libro);
  }


}
