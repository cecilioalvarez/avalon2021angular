import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../libro';
import { LibrosRestService } from '../rest/libros-rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  libro:Libro={} as Libro;
  constructor(private servicio: LibrosRestService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((parametros) => {
      let isbn = parametros.get("isbn");

      if (isbn != null)
        this.servicio.buscarUno(isbn).subscribe((libro) => {

          this.libro = libro;

        })

    })

  }

}
