import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class LibraryRestService {

  constructor(public httpClient: HttpClient) {
  }

  public getAllBooks(): Promise<Book[]> {
      return this.httpClient.get<Book[]>("http://localhost:8080/library").toPromise();
  }

  public deleteBook(book: Book): Promise<Book> {
    return this.httpClient.delete<Book>(`http://localhost:8080/library/${book.isbn}`).toPromise();
  }
}