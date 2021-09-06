import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  nombre:string="pedro"
  contador:number=0
  libro: Libro 
  paisaje:string
  listaImagenes:string[]=["paisaje1.jfif","paisaje2.jfif","paisaje3.jpeg"]
  constructor() { 

    this.libro=new Libro("1","java","pepe");
    this.paisaje="assets/paisaje1.jfif"
  }

  ngOnInit(): void {
    this.paisaje='assets/'+this.listaImagenes[0];
  }
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  pulsar(evento:Event){
    alert("has pulsado")
    console.log(evento);
    
  }
  avanza(){
    this.incrementar();
    this.paisaje='assets/'+this.listaImagenes[this.contador];

  }

  retrocede(){
    this.decrementar();
    this.paisaje='assets/'+this.listaImagenes[this.contador];

  }

}
