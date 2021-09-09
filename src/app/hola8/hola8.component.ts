import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';
import { mergeMap,map } from "rxjs/operators";
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {


  listaLibros: Libro[] = [];
  filtroTitulo:string=""
  teclaPulsada= new Subject<KeyboardEvent>();

  libroNuevo:Libro={} as Libro

  


  constructor(public servicio:LibrosRestService) {

    this.teclaPulsada.pipe(map((event:any)=> {

      return event.target.value;

    })).pipe(mergeMap((texto:string)=> {
      
      return this.servicio.buscarPorTitulo(texto);
    })).subscribe((libros)=> {

        this.listaLibros=libros;
    })

   }

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
