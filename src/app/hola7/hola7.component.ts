import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibrosService } from '../libros.service';


@Component({
  selector: 'app-hola7',
  templateUrl: './hola7.component.html',
  styleUrls: ['./hola7.component.css']
})
export class Hola7Component implements OnInit {
 
  libroSelect:Libro={} as Libro;
  listaLibros: Libro[] = []
  libroNuevo:Libro={} as Libro;
  constructor(public service: LibrosService) {

  }

  ngOnInit(): void {
    this.listaLibros = this.service.buscarTodos();
  }

  borrar(libro:Libro){
    this.service.borrarLibro(libro)
  }

  detalle(libro:Libro){
    this.libroSelect = this.service.detalleLibro(libro)
  }

  insertar() {
   
    this.service.insertarLibro({...this.libroNuevo});
    this.libroNuevo={} as Libro;

  }
}
