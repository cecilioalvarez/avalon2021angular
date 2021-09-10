import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  listaPersonas:Persona[]=[];


  constructor() { }

  ngOnInit(): void {
  }

  insertarPersona(persona:Persona) {

      this.listaPersonas.push(persona);
  }

  borrarPersona(persona:Persona) {

    let persona2=this.listaPersonas.find( (p)=> {

      return p.nombre==persona.nombre;

    })

    if (persona2!=null)
    this.listaPersonas.splice(this.listaPersonas.indexOf(persona2),1);


}

  sumarEdades (lista:Persona[]) {

      let suma:number=0;
      for (let i=0;i<lista.length;i++) {

        suma+= lista[i].edad;
      }
      return suma;
  }


}
