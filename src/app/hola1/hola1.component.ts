import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { Author } from '../author';

    @Component({
        selector: 'app-hola1',
        templateUrl: './hola1.component.html',
        styleUrls: ['./hola1.component.css']
    })
    
    export class Hola1Component implements OnInit {

    name:string="Germán"
    count:number=0
    book:Book;
    image:string;

    constructor() {
        this.book = new Book("1234567890123", "Prueba", new Author("00000000t", "Anónimo", 17));
        this.image = "assets/flor.jpg";
    }

    ngOnInit(): void {
    }

    increase() {
        this.count++;
    }
    decrease() {
        this.count--;
    }
    getCount() {
        return this.count;
    }
}