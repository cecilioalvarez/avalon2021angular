import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre:string="pedro"
  contador:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
