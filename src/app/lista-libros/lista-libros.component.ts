import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  constructor(public servicio:LibrosRestService) { }
  listaLibros:Libro[]=[];
  
  ngOnInit(): void {
  }

  borrar(libro:Libro) {
    //tengo que encadenar observables
    this.servicio.borrar(libro).pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=>{

        this.listaLibros=libros;
    })
   
  
  }

}
