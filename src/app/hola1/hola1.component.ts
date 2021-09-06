import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre: string = "MARCELO BOTERO"
  contador: number = 0;
  libro: Libro;
  paisaje:string
  constructor() {
    this.libro= new Libro("1","java","pep")
    this.paisaje="assets/paisaje.jpg"
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

}
