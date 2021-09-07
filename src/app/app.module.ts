import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hola1Component } from './hola1/hola1.component';
import { Hola2Component } from './hola2/hola2.component';
import { Hola3Component } from './hola3/hola3.component';
import { Hola4Component } from './hola4/hola4.component';
import { Hola5Component } from './hola5/hola5.component';
import { Hola6Component } from './hola6/hola6.component';
import { Hola7Component } from './hola7/hola7.component';

@NgModule({
  declarations: [
    AppComponent,
    Hola1Component,
    Hola2Component,
    Hola3Component,
    Hola4Component,
    Hola5Component,
    Hola6Component,
    Hola7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
