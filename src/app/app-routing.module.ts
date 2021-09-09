import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';


const routes:Routes= [

  {path:"listalibros",component: ListaLibrosComponent},
  {path:"formularionuevo",component: FormularioNuevoComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



  

 }