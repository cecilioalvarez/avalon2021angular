import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola6',
  templateUrl: './hola6.component.html',
  styleUrls: ['./hola6.component.css']
})
export class Hola6Component implements OnInit {

  listaLibros:Libro[]= [];
  libroNuevo:Libro={} as Libro;
  constructor() { 

    this.listaLibros.push(new Libro("1","java","pedro"));
    this.listaLibros.push(new Libro("2","net","ana"));
    this.listaLibros.push(new Libro("3","php","maria"));
    this.listaLibros.push(new Libro("4","python","javier"));



  }
  borrar(isbn:String):void {

    let libroborrar=this.listaLibros.filter(function(e) {
      return e.isbn==isbn;
    })[0];

    let posicion= this.listaLibros.indexOf(libroborrar);
    this.listaLibros.splice(posicion,1);
  }

  ngOnInit(): void {
  }
  insertar() {
    //clonar un objeto de forma rapida con JavaScript
    this.listaLibros.push({...this.libroNuevo});

  }

}
