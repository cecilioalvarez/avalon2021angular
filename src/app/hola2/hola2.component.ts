import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola2',
  templateUrl: './hola2.component.html',
  styleUrls: ['./hola2.component.css']
})
export class Hola2Component implements OnInit {

  listaImagenes: string[] = ["lirium.jpg", "marga.jpg", "orquidea.jpg"]
  paisaje: string = ""
  contador: number = 0;

  constructor() { }

  ngOnInit(): void {

    console.log("eee");

    this.paisaje = "assets/" + this.listaImagenes[this.contador]
  }
  avanza() {
    this.contador++;
    this.paisaje = "assets/" + this.listaImagenes[this.contador]
  }

  retrocede() {
    this.contador--;
    this.paisaje = "assets/" + this.listaImagenes[this.contador]
  }

}
