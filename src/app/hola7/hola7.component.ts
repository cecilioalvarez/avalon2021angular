import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { LibraryRestService } from '../rest/library-rest.service';

@Component({
  selector: 'app-hola7',
  templateUrl: './hola7.component.html',
  styleUrls: ['./hola7.component.css']
})
export class Hola7Component implements OnInit {

    bookList: Book[] = [];
    constructor(public libraryRestService: LibraryRestService) {
    }

    ngOnInit(): void {
        this.libraryRestService.getAllBooks().then((books) => {
            this.bookList = books;
        })
    }

    deleteBook(book:Book): void {
        this.libraryRestService.deleteBook(book);
    }
}