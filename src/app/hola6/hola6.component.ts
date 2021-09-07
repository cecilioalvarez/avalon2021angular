import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola6',
  templateUrl: './hola6.component.html',
  styleUrls: ['./hola6.component.css']
})
export class Hola6Component implements OnInit {

  listaLibros : Libro []=[]
  libroNuevo: Libro={} as Libro
  libroSeleccionado: Libro={} as Libro
  constructor() {
    this.listaLibros.push(new Libro("1","java","pedro"));
    this.listaLibros.push(new Libro("2","php","ana"));
    this.listaLibros.push(new Libro("3","javascript","juan"));
    this.listaLibros.push(new Libro("4","phyton","maria"));
    

   }

  ngOnInit(): void {
  }

  borrar(isbn:string):void{

    let libroBorrar=this.listaLibros.filter(function(e){
      return e.isbn==isbn;
    })[0];

    let posicion=this.listaLibros.indexOf(libroBorrar);
    this.listaLibros.splice(posicion,1);
  }
  insertar(){
    this.listaLibros.push({...this.libroNuevo});
    this.libroNuevo={} as Libro
  }

  detalle(isbn:string){
    
    this.libroSeleccionado=this.listaLibros.filter(function(e){
      return e.isbn==isbn;
    })[0];
  }

}
