import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola2',
  templateUrl: './hola2.component.html',
  styleUrls: ['./hola2.component.css']
})
export class Hola2Component implements OnInit {

<<<<<<< HEAD
  listaImagenes: string[] = ["paisaje.jpg", "paisaje2.jpg", "tigre.jpg"];
=======
  listaImagenes: string[] = ["paisaje1.jpeg", "paisaje2.jpeg", "paisaje3.jpeg"];
>>>>>>> 0355d8051e31fe9866436f3406b0f1da891d306c
  paisaje: string = "";
  contador: number = 0;
  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.paisaje = "assets/"+this.listaImagenes[this.contador];
  }
  avanza() {
    this.contador++;
    this.paisaje = "assets/"+this.listaImagenes[this.contador];
  }
  retrocede() {
    this.contador--;
    this.paisaje = "assets/"+this.listaImagenes[this.contador];
=======

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
>>>>>>> 0355d8051e31fe9866436f3406b0f1da891d306c
  }
}
