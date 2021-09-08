import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola6a',
  templateUrl: './hola6a.component.html',
  styleUrls: ['./hola6a.component.css']
})
export class Hola6aComponent implements OnInit {


  listaLibros: Libro[] = []
  libroNuevo: Libro={} as Libro
  libroSeleccionado: Libro={} as Libro
  

  constructor() {
    this.listaLibros.push(new Libro("1","java","Pedro"))
    this.listaLibros.push(new Libro("2","python","Marcelo"))
    this.listaLibros.push(new Libro("3","spark","Mario"))
    this.listaLibros.push(new Libro("4","spring","Ruben"))
    this.listaLibros.push(new Libro("5","swift","Jorge"))
  }

  borrar(isbn:string):void{
    
    //busco el libro en el listado
    let libroborrar=this.listaLibros.filter(function(e){
      return e.isbn==isbn
    })[0]

    //Sacamos la posicion del libro
    let posicion = this.listaLibros.indexOf(libroborrar)
    //Borramos el libro de la lista pasandole la posicion
    this.listaLibros.splice(posicion, 1)
  }

  insertar(){
    //Primera forma, al ser una relacion unidireccional, el primer dato que insertemos se modificara cuando modifiquemos el dato del formulario.
    //this.listaLibros.push(this.libroNuevo);
    //Clonar un objeto de forma rapida con JavaScript
    this.listaLibros.push({...this.libroNuevo})
    //Volvemos a iniciar la variable para que cuando insertemos un dato, el formulario se vuelva a quedar en blanco.
    this.libroNuevo={} as Libro
  }

  detalle(isbn: string){
    this.libroSeleccionado = this.listaLibros.filter(function(e) {
      return e.isbn==isbn;
    })[0]
  }
  ngOnInit(): void {
  }


}
