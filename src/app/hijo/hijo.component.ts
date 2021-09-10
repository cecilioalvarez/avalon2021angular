import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  mensajeExterno:string="";
  @Output() eventoMensaje:EventEmitter<String>= new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  enviarMensaje() {

    this.eventoMensaje.emit("hola desde el hijo");
  }

}
