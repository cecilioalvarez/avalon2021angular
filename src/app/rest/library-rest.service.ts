import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../author';
import { Book } from '../book';

@Injectable({
    providedIn: 'root'
})
export class LibraryRestService {

    constructor(public httpClient: HttpClient) {
    }

    public getAllAuthors(): Observable<Author[]> {
        return this.httpClient.get<Author[]>("http://localhost:8080/library/webapi/authors");
    }

    public getAllBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>("http://localhost:8080/library/webapi/books");
    }

    public deleteBook(book: Book): Observable<Book> {
        return this.httpClient.delete<Book>(`http://localhost:8080/library/webapi/books/${book.isbn}`);
    }

    public insertBook(book: Book): Observable<Book> {
        return this.httpClient.post<Book>("http://localhost:8080/library/webapi/books", book);
    }

    public updateBook(book: Book): Observable<Book> {
        return this.httpClient.put<Book>(`http://localhost:8080/library/webapi/books/${book.isbn}`, book);
    }
}