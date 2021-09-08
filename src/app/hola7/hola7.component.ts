import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { Book } from '../book';
import { LibraryRestService } from '../rest/library-rest.service';
import { mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-hola7',
  templateUrl: './hola7.component.html',
  styleUrls: ['./hola7.component.css']
})
export class Hola7Component implements OnInit {

    bookList: Book[] = [];
    authorList: Author[] = [];
    newBook: Book = {} as Book;
    authorIdForNewBook: string = "";
    textForAddEditButton: string = "Añadir";
    editing: boolean = false;
    showForm = false;

    constructor(public libraryRestService: LibraryRestService) {
    }

    ngOnInit(): void {
        this.getAllAuthors();
        this.getAllBooks();
    }

    deleteBook(book:Book): void {
        this.libraryRestService.deleteBook(book).pipe(mergeMap(() => this.libraryRestService.getAllBooks())).subscribe((books) => {
            this.bookList = books;
        });
    }

    getAllBooks(): void {
        this.libraryRestService.getAllBooks().subscribe((books) => this.bookList = books);
    }

    getAllAuthors(): void {
        this.libraryRestService.getAllAuthors().subscribe((authors) => this.authorList = authors);
    }

    insertBook(): void {
        this.newBook.author = new Author(this.authorIdForNewBook);
        this.libraryRestService.insertBook({...this.newBook}) // Clonamos el objeto antes de insertarlo mediante la notación {... obj}.
                .pipe(mergeMap(() => this.libraryRestService.getAllBooks())).subscribe((books) => this.bookList = books); 
        this.newBook = {} as Book;
        this.authorIdForNewBook = "";
        this.showForm = false;
    }

    updateBook(): void {
        this.newBook.author = new Author(this.authorIdForNewBook);
        this.libraryRestService.updateBook({...this.newBook}) // Clonamos el objeto antes de insertarlo mediante la notación {... obj}.
                .pipe(mergeMap(() => this.libraryRestService.getAllBooks())).subscribe((books) => this.bookList = books); 
        this.newBook = {} as Book;
        this.authorIdForNewBook = "";
        this.editing = false;
        this.showForm = false;
    }

    createBook(): void {
        this.showForm = true;
        this.editing = false;
        this.newBook =  {} as Book;
    }

    editBook(book: Book): void {
        this.showForm = true;
        this.editing = true;
        this.newBook = book;
        this.authorIdForNewBook = book.author.id;
        this.newBook.author.id = this.authorIdForNewBook;
        this.textForAddEditButton = "Modificar";
    }

    cancel(): void {
        this.showForm = false;
        this.editing = false;
    }
}