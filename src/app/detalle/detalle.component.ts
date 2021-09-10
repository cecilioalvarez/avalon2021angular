import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, subscribeOn } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  libroSeleccionado: Libro = {} as Libro
  constructor(private servicio: LibrosRestService, private route: ActivatedRoute, private location:Location) {

  }

  ngOnInit(): void {

    // this.route.paramMap.subscribe((parametros)=>{
    //   let isbn=parametros.get("isbn");

    //   if (isbn != null)
    //   this.servicio.buscarUno(isbn).subscribe((libro)=>{
    //     this.libroSeleccionado=libro;
    //   })
    // })

    this.route.paramMap.pipe(map((parametros) => {
      return parametros.get("isbn");
    })).pipe(mergeMap((parametro: string | null) => {
      if (parametro != null)
        return this.servicio.buscarUno(parametro);
      else return new Observable<Libro>();
    })).subscribe((parametro: Libro) => {

      this.libroSeleccionado = parametro;

    })


  }
  volver():void{
    this.location.back();
  }


}
