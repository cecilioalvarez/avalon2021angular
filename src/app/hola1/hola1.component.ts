import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre: string = "Alex"
  contador: number = 0
  libro: Libro = {} as Libro
  imagen:string | undefined

  constructor() {
    this.libro= new Libro("1","mivida", "ale")
    this.imagen = "assets/orquidea.jpg"
  }

  ngOnInit(): void {
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }

  pulsar(evento:Event){
    alert("has pulsado")
    console.log(evento);
    
  }

}
