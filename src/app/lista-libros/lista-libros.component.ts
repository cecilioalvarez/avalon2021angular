import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  constructor(private servicio:LibrosRestService,private router:Router) { }
  listaLibros:Libro[]=[];
  
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

  detalle(libro:Libro) {
   
    this.router.navigate(["detalle",libro.isbn]);
   
  
  }

}
