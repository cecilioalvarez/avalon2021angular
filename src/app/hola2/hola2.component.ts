import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola2',
  templateUrl: './hola2.component.html',
  styleUrls: ['./hola2.component.css']
})
export class Hola2Component implements OnInit {

  listaImagenes: string[] = ["paisaje1.jpeg", "paisaje2.jpeg", "paisaje3.jpeg"];
  paisaje: string = "";
  contador: number = 0;
  constructor() { }

  ngOnInit(): void {

    this.paisaje = "assets/" + this.listaImagenes[this.contador];
  }

  avanza() {

    this.contador++
    if (this.contador>2) this.contador=0
    this.paisaje = "assets/" + this.listaImagenes[this.contador];
  }
  retrocede() {

    this.contador--
    if (this.contador<0) this.contador=0
    this.paisaje = "assets/" + this.listaImagenes[this.contador];
  }
}
