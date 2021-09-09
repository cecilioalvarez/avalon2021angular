import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Book } from '../book';
import { LibraryRestService } from '../rest/library-rest.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    bookList: Book[] = [];

    constructor(public libraryRestService: LibraryRestService, private router:Router) { }

    ngOnInit(): void {
        this.getAllBooks();
    }

    getAllBooks(): void {
        this.libraryRestService.getAllBooks().subscribe((books) => this.bookList = books);
    }

    deleteBook(book:Book): void {
        this.libraryRestService.deleteBook(book).pipe(mergeMap(() => this.libraryRestService.getAllBooks())).subscribe((books) => {
            this.bookList = books;
        });
    }

    redirectToCreateBook(): void {
        this.router.navigate(["createBook"]);
    }

    redirectToEditBook(book:Book): void {
        this.router.navigate([`editBook/${book.isbn}`]);
    }
}