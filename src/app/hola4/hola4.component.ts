import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola4',
  templateUrl: './hola4.component.html',
  styleUrls: ['./hola4.component.css']
})
export class Hola4Component implements OnInit {

  mostrar:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarItem() {
    this.mostrar=true;
  }
  ocultarItem() {
    this.mostrar=false;
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 0355d8051e31fe9866436f3406b0f1da891d306c
