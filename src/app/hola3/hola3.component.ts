import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola3',
  templateUrl: './hola3.component.html',
  styleUrls: ['./hola3.component.css']
})
export class Hola3Component implements OnInit {

  listaLibros: Libro[] = []
  constructor() {
    this.listaLibros.push(new Libro("1", "java", "pepe"), 
    new Libro("2", "net", "juan"), new Libro("3", "php", "ana"));



  }

  ngOnInit(): void {
  }

}
