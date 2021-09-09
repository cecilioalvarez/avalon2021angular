import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Author } from '../author';
import { Book } from '../book';
import { LibraryRestService } from '../rest/library-rest.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-create-book',
    templateUrl: './create-book.component.html',
    styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

    newBook: Book = {} as Book;
    authorIdForNewBook: string = "";
    authorList: Author[] = [];

    constructor(public libraryRestService: LibraryRestService, private router:Router, private location: Location) {}

    ngOnInit(): void {
        this.getAllAuthors();
    }

    getAllAuthors(): void {
        this.libraryRestService.getAllAuthors().subscribe((authors) => this.authorList = authors);
    }

    insertBook(): void {
        this.newBook.author = new Author(this.authorIdForNewBook);
        this.libraryRestService.insertBook({...this.newBook}) // Clonamos el objeto antes de insertarlo mediante la notación {... obj}.
                .subscribe(() => this.router.navigate(['bookList'])); 
    }

    redirectToBookList(): void {
        this.location.back();
    }
}