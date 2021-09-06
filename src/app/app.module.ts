import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hola1Component } from './hola1/hola1.component';
import { Hola2Component } from './hola2/hola2.component';

@NgModule({
  declarations: [
    AppComponent,
    Hola1Component,
    Hola2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
