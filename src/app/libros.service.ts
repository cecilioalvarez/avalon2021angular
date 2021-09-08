import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros: Libro[] = []
  libroSeleccionado: Libro={} as Libro

  constructor() { 
    this.listaLibros.push(new Libro("1","java","Pedro"))
    this.listaLibros.push(new Libro("2","python","Marcelo"))
    this.listaLibros.push(new Libro("3","spark","Mario"))
    this.listaLibros.push(new Libro("4","spring","Ruben"))
    this.listaLibros.push(new Libro("5","swift","Jorge"))
  }

  public buscarTodos(): Libro[]{
    return this.listaLibros
  }

  public borrarLibro(libro: Libro){
    let libroborrar=this.listaLibros.filter(function(e){
      return e.isbn==libro.isbn
    })[0]

    let posicion = this.listaLibros.indexOf(libroborrar)
    this.listaLibros.splice(posicion, 1)
  }

  public detalleLibro(libro: Libro){
   this.libroSeleccionado = this.listaLibros.filter(function(e) {
      return e.isbn==libro.isbn;
    })[0]
  }

  public insertar(libro: Libro):void{
    this.listaLibros.push(libro);
  }
}
