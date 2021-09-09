import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';


const routes:Routes= [

  {path:"listalibros",component: ListaLibrosComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



  

 }
