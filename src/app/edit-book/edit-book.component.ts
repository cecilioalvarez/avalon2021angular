import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Author } from '../author';
import { Book } from '../book';
import { LibraryRestService } from '../rest/library-rest.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

    bookToEdit: Book = {} as Book;
    authorIdForBookToEdit: string = "";
    authorList: Author[] = [];

    constructor(public libraryRestService: LibraryRestService, private router: Router, private route:ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap.pipe(map((params) => {
            return params.get("isbn");
        })).pipe(mergeMap((isbn: string | null) => {
            return isbn != null ? this.libraryRestService.getBook(isbn) : new Observable<Book>();
        })).pipe(mergeMap((book: Book) => {
            this.bookToEdit = book;
            return this.libraryRestService.getAllAuthors();
        })).subscribe((authors: Author[]) => {
            this.authorList = authors;
            this.authorIdForBookToEdit = this.bookToEdit.author.id;
        });
    }

    updateBook(): void {
        this.bookToEdit.author = new Author(this.authorIdForBookToEdit);
        this.libraryRestService.updateBook({...this.bookToEdit}) // Clonamos el objeto antes de insertarlo mediante la notación {... obj}.
                .subscribe(() => this.router.navigate(['bookList']));
    }

    redirectToBookList(): void {
        this.location.back();
    }
}