import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { Book } from '../book';

@Component({
    selector: 'app-hola5',
    templateUrl: './hola5.component.html',
    styleUrls: ['./hola5.component.css']
})

export class Hola5Component implements OnInit {

    book:Book;

    constructor() {
        this.book = new Book("", "", new Author("", "", 0));
    }

    ngOnInit(): void {
    }
}