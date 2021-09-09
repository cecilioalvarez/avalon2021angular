import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hola1Component } from './hola1/hola1.component';
import { Hola3Component } from './hola3/hola3.component';
import { Hola5Component } from './hola5/hola5.component';
import { Hola6Component } from './hola6/hola6.component';
import { HttpClientModule } from '@angular/common/http';
import { Hola7Component } from './hola7/hola7.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    Hola1Component,
    Hola3Component,
    Hola5Component,
    Hola6Component,
    Hola7Component,
    BookListComponent,
    CreateBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
