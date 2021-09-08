import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { Book } from '../book';

    @Component({
        selector: 'app-hola3',
        templateUrl: './hola3.component.html',
        styleUrls: ['./hola3.component.css']
    })
    export class Hola3Component implements OnInit {
    
    booksList:Book[] = [];

    constructor() {
      this.booksList.push(
        new Book("1234567890123", "Prueba", new Author("00000000t", "Anónimo", 17)), 
        new Book("1234567890124", "Prueba2", new Author("11111111h", "Federico García Lorca", 20)), 
        new Book("1234567890125", "Prueba3", new Author("22222222j", "Almudena Grandes", 30))
    );
    }

    ngOnInit(): void {
    }

}