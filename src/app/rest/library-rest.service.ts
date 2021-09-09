import { HttpClient, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../author';
import { Book } from '../book';

@Injectable({
    providedIn: 'root'
})
export class LibraryRestService {

    constructor(public httpClient: HttpClient) {
    }

    public getAllAuthors(): Observable<Author[]> {
        return this.httpClient.get<Author[]>(`${environment.APIEndpoint}/authors`);
    }

    public getAllBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(`${environment.APIEndpoint}/books`);
    }

    public getBooksByTitleStart(title: string): Observable<Book[]> {
        let params = new HttpParams().set("title", title);
        return this.httpClient.get<Book[]>(`${environment.APIEndpoint}/books`, {params: params});
    }

    public getBook(isbn: string): Observable<Book> {
        return this.httpClient.get<Book>(`${environment.APIEndpoint}/books/${isbn}`);
    }

    public deleteBook(book: Book): Observable<Book> {
        return this.httpClient.delete<Book>(`${environment.APIEndpoint}/books/${book.isbn}`);
    }

    public insertBook(book: Book): Observable<Book> {
        return this.httpClient.post<Book>(`${environment.APIEndpoint}/books`, book);
    }

    public updateBook(book: Book): Observable<Book> {
        return this.httpClient.put<Book>(`${environment.APIEndpoint}/books/${book.isbn}`, book);
    }
}