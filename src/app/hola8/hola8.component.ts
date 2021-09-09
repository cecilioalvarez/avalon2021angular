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

  listaLibros: Libro[] = []
  libroSeleccionado : Libro ={} as Libro
  libroNuevo:Libro={} as Libro
  
  constructor(public servicio:LibrosRestService) { }

  ngOnInit(): void {

    this.servicio.buscarTodos().subscribe((libros)=>{
      this.listaLibros=libros;
    })
  }

  borrar(libro:Libro){
    // this.servicio.borrar(libro).then(()=>{
    //   this.servicio.buscarTodos().then((libros)=>{
    //     this.listaLibros=libros;
    //   })
    // });

    //Encadenamiento de observable
    this.servicio.borrar(libro).pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=>{
      this.listaLibros=libros;
    })
  }

    insertar(){
      this.servicio.insertar(this.libroNuevo).pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=>{
        this.listaLibros=libros;
      })
    }

    detalle(libro:Libro){
      this.servicio.buscarUno(libro).subscribe((librobuscado)=>{
        this.libroSeleccionado=librobuscado;
      });
    }

    actualizar(libro:Libro){
      this.servicio.buscarUno(libro).subscribe((librobuscado)=>{
        this.libroNuevo=librobuscado;
      });

    }


}
