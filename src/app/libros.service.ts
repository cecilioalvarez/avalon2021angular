import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listaLibros:Libro[]= [];

  constructor() { 

    this.listaLibros.push(new Libro("1","java","pedro"));
    this.listaLibros.push(new Libro("2","net","ana"));
    this.listaLibros.push(new Libro("3","php","maria"));
    this.listaLibros.push(new Libro("4","python","javier"));


  }
  public buscarTodos():Libro[] {

      return this.listaLibros;
  }
}
