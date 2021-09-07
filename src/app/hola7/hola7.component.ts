import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-hola7',
  templateUrl: './hola7.component.html',
  styleUrls: ['./hola7.component.css']
})
export class Hola7Component implements OnInit {

  listaLibros: Libro[] = [];
  libroNuevo:Libro={} as Libro;
  constructor(public servicio: LibrosService) { }

  ngOnInit(): void {
    this.listaLibros = this.servicio.buscarTodos();
  }

  borrar(libro:Libro) {
    this.servicio.borrarLibro(libro);
  }

  insertar() {
   
    this.servicio.insertar({...this.libroNuevo});
    this.libroNuevo={} as Libro;

  }
}
