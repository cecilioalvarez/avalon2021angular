import { mergeMap } from 'rxjs/operators';
import { LibrosRestService } from './../rest/libros-rest.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';


@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {

  listaLibros: Libro[] = []

  constructor(public servicio: LibrosRestService) { }

  ngOnInit(): void {/*  HECHO CON PROMISE
      this.servicio.buscarTodos().then((libros)=>{
        this.listaLibros=libros;
      }).catch(function(e){
        console.log(e)
      })*/

      this.servicio.buscarTodos().subscribe((libros)=>{
        this.listaLibros=libros;
      })

  }
/*      HECHO CON PROMISE
  borrar(libro: Libro){       
    this.servicio.borrar(libro).then(()=>this.servicio.buscarTodos()).then((libros) => {
      console.log(libros)
      this.listaLibros=libros
    }).catch(function(error){
      console.log(error)
    })
  }*/

  borrar(libro: Libro){
    this.servicio.borrar(libro).pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=>{
      this.listaLibros=libros;
    })
  }
}
