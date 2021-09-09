import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes= [

  {path:"listalibros",component:ListaLibros}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



  

 }
