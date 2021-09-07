import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros: Libro [] = [];
  constructor() {

    this.listaLibros.push(new Libro("1","java","pedro"));
    this.listaLibros.push(new Libro("2","php","ana"));
    this.listaLibros.push(new Libro("3","javascript","juan"));
    this.listaLibros.push(new Libro("4","phyton","maria"));

   }

   public buscarTodos():Libro[]{
     return this.listaLibros;
   }

   public borrarLibro(libro:Libro):void{
    let libroBorrar=this.listaLibros.filter(function(e){
      return e.isbn==libro.isbn;
    })[0];

    let posicion=this.listaLibros.indexOf(libroBorrar);
    this.listaLibros.splice(posicion,1);

   }

   public detalleLibro(libro:Libro):Libro{
    return this.listaLibros.filter(function(e){
      return e.isbn==libro.isbn;
    })[0];
   }

   public insertarLibro(libro:Libro):void{
     this.listaLibros.push(libro)
   }
}
