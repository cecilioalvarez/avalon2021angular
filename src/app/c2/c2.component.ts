import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  mensaje="hola soy c2";
  mensajeHijo="mensaje para el hijo"
  constructor() { }

  ngOnInit(): void {
  }

}
