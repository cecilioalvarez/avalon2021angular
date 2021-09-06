import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre :string="Ruben"
  contador :number = 0
  libro: Libro
  bmw: string

  constructor() { 
    this.libro = new Libro("1","pepe","java")
    this.bmw="assets/e30.jpg"
  }

  ngOnInit(): void {
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  hasPulsado(evento: Event){
    alert("Has pulsado");
    console.log(evento);
  }

}
