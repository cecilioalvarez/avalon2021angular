import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola6',
  templateUrl: './hola6.component.html',
  styleUrls: ['./hola6.component.css']
})
export class Hola6Component implements OnInit {
  libroNuevo:Libro={} as Libro;
  libroSelect:Libro={} as Libro;
  listaLibros: Libro[] = []
  constructor() {

    this.listaLibros.push(new Libro("1", "java", "autor"), new Libro("2", "java2", "autor2"), new Libro("3", "java3", "autor3"),)
  }

  ngOnInit(): void {
  }


  borrar(isbn: string): void {

    let libroBorrar = this.listaLibros.filter(function (e) {
      return e.isbn == isbn
    })[0];

    let posicion = this.listaLibros.indexOf(libroBorrar)
    this.listaLibros.splice(posicion,1)

  }

  
  detalle(isbn: string): void {

    this.libroSelect = this.listaLibros.filter(function (e) {
      return e.isbn == isbn
    })[0];

   console.log(this.libroSelect);
   
  

  }
  insertar(){
    this.listaLibros.push({...this.libroNuevo})
    this.libroNuevo = new Libro("","","")
  }

}
