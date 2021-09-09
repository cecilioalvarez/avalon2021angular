import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {

  libroNuevo:Libro={} as Libro
  constructor(public servicio:LibrosRestService) { }

  ngOnInit(): void {
  }


  insertar() {

    this.servicio
    .insertar(this.libroNuevo)
    .pipe(mergeMap(e=>this.servicio.buscarTodos())).subscribe((libros)=> {

     
    })

    
  }
}
