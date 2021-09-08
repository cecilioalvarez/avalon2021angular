import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';
import { mergeMap } from "rxjs/operators";
@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {


  listaLibros: Libro[] = [];
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
    
  }
}
