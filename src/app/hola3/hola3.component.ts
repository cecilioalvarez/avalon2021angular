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
    this.listaLibros.push(new Libro("1", "java", "autor"), new Libro("2", "java2", "autor2"), new Libro("3", "java3", "autor3"),)
  }

  ngOnInit(): void {
  }

}
