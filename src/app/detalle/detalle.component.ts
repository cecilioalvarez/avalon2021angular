import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  libro: Libro = {} as Libro;
 
  constructor(private servicio: LibrosRestService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(map((parametros) => {
      return parametros.get("isbn");
    })).pipe(mergeMap((parametro: string | null) => {
      if (parametro != null)
        return this.servicio.buscarUno(parametro);
      else return new Observable<Libro>()
    })).subscribe((parametro: Libro) => {

      this.libro = parametro;

    })

  }

  volver(){
    this.location.back();
  }

}
