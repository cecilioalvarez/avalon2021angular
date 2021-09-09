import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  listaLibros: Libro[] = [];
  constructor(public servicio:LibrosRestService, public router:Router) { }

  ngOnInit(): void {
  }

  
  insertar() {

    this.servicio
    .insertar(this.libroNuevo)
    .subscribe((libros)=> {

      this.router.navigate(['listalibros']);
    })

    
  }

}
