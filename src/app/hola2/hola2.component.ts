import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola2',
  templateUrl: './hola2.component.html',
  styleUrls: ['./hola2.component.css']
})
export class Hola2Component implements OnInit {

  listaImagenes:string[]=["e30.jpg","e30a.jpg","e30b.jpg"]
  bmw:string=""
  contador: number=0

  constructor() { }

  ngOnInit(): void {
    this.bmw = "assets/"+ this.listaImagenes[this.contador]
  }

  avanza(){
    this.contador++
    if (this.contador>2) this.contador=0
    this.bmw = "assets/"+ this.listaImagenes[this.contador]
  }

  retrocede(){
    this.contador--
    if (this.contador<0) this.contador=2
    this.bmw = "assets/"+ this.listaImagenes[this.contador]
  }
}
