import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';
import { mergeMap,map } from "rxjs/operators";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {


  listaLibros: Libro[] = [];

  libroNuevo!:Libro

  constructor(public servicio:LibrosRestService) { }

  ngOnInit(): void {

    this.servicio.buscarTodos().subscribe((libros)=> {
      this.listaLibros=libros;
    });
  }

  borrar(libro:Libro) {
    //tengo que encadenar observables
    this.servicio.borrar(libro).pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=>{

        this.listaLibros=libros;
    })
    /*
    // dentro de un observabel te has subscrito a el no no lo has has hecho Observable -> map -> buscarTodos() ->observable
    this.servicio.borrar(libro).pipe(map(e=>this.servicio.buscarTodos())).subscribe((observable)=> {

          observable.subscribe((libros)=> {

                    this.listaLibros=libros;
          })
      

    })

    */
  
  }


  insertar() {

    this.servicio
    .insertar(this.libroNuevo)
    .pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=> {

      this.listaLibros=libros;
    })

    
  }
    
}
