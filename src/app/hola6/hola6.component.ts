import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-hola6',
  templateUrl: './hola6.component.html',
  styleUrls: ['./hola6.component.css']
})
export class Hola6Component implements OnInit {

  libro: Libro = new Libro("","","")
  constructor() { 

  }

  ngOnInit(): void {
  }

}
