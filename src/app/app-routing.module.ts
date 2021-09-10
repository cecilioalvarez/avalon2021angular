import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

const routes:Routes=[
  {path:"listalibros",component:ListaLibrosComponent},
  {path:"formularionuevo",component: FormularioNuevoComponent},
  {path:"detalle/:isbn",component: DetalleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
