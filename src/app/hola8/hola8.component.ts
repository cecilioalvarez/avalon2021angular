

import { mergeMap, map} from 'rxjs/operators';
import { LibrosRestService } from './../rest/libros-rest.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-hola8',
  templateUrl: './hola8.component.html',
  styleUrls: ['./hola8.component.css']
})
export class Hola8Component implements OnInit {

  listaLibros: Libro[] = []
  libroNuevo: Libro = {} as Libro
  libroDetalle: Libro = {} as Libro 
  filtroTitulo: string = ""
  teclaPulsada = new Subject<KeyboardEvent>()

  constructor(public servicio: LibrosRestService) {

    //Recogemos el dato que escribimos en el formulario y lo sacamos por consola.
    this.teclaPulsada.pipe(map((event:any)=>{
      return event.target.value;
    //Pasamos el datos recogido en el formulario al servicio
    })).pipe(mergeMap((texto: string)=> {
      return this.servicio.buscarPorTitulo(texto);
    })).subscribe((libros)=>{
      this.listaLibros = libros;
    })

   }

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

/* EL SIGUIENTE CODIGO ES IGUAL QUE EL ANTERIOR, PERO EL ANTERIOR ES MAS OPTIMO
  borrar(libro:Libro){
    this.servicio.borrar(libro).pipe(map(e=>this.servicio.buscarTodos())).subscribe((observable)=> {

      observable.subscribe((libros)=> {

                this.listaLibros=libros;
      })
    })

  }  */  

  insertar() {

    this.servicio
    .insertar(this.libroNuevo)
    .pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=> {

      this.listaLibros=libros;
    })

  }

  detalle(libro:Libro){
    this.servicio.detalle(libro).subscribe((libros)=>{
      this.libroDetalle = libros
    })
  }
}
