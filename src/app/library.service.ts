import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

    bookList: Book[] = [];

  constructor() {
    this.bookList = [
        new Book("1234567890123", "Un libro", "Anónimo"), 
        new Book("1234567890124", "Otro libro", "Un escritor"), 
        new Book("1234567890125", "Otro más de prueba", "Otro escritor")
    ];
  }

  public selectAllBooks(): Book[] {
      return this.bookList;
  }
}