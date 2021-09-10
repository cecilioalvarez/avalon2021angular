import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  mensajeExterno:string=""
  @Output()
  eventoMensaje:EventEmitter<string>=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  enviarMensaje(){
    this.eventoMensaje.emit("hola desde el hijo")
    
  }

}
