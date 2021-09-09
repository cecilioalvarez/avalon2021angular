import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

<<<<<<< HEAD
  nombre: string = "MARCELO BOTERO"
=======
  nombre: string = "pedro"
>>>>>>> 0355d8051e31fe9866436f3406b0f1da891d306c
  contador: number = 0;
  libro: Libro;
  paisaje:string
  constructor() {
<<<<<<< HEAD
    this.libro= new Libro("1","java","pep")
    this.paisaje="assets/paisaje.jpg"
=======

    this.libro= new Libro("1","java","pep")
    this.paisaje="assets/paisaje1.jpg"

>>>>>>> 0355d8051e31fe9866436f3406b0f1da891d306c
  }

  ngOnInit(): void {
  }
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
  hePulsado (evento:Event) {
    alert("has pulsado");
    console.log(evento);
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
  hePulsado (evento:Event) {
    alert("has pulsado");
    console.log(evento);
  }
}
