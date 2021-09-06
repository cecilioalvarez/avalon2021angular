import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre :string="Ruben";
  contador :number = 0;
  libro: Libro= {} as Libro;

  constructor() { 
    this.libro.autor = "pepe"
    this.libro.isbn = "1"
    this.libro.titulo = "java"
  }

  ngOnInit(): void {
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

}
