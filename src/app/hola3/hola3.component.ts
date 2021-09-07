import { Component, OnInit } from '@angular/core';
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
        new Book("1234567890123", "Prueba", "Anónimo"), 
        new Book("1234567890124", "Prueba2", "Federico García Lorca"), 
        new Book("1234567890125", "Prueba3", "Almudena Grandes")
    );
    }

    ngOnInit(): void {
    }

}