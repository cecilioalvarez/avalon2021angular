import { Injectable } from '@angular/core';
import { Author } from './author';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

    bookList: Book[] = [];

  constructor() {
    this.bookList = [
        new Book("1234567890123", "Prueba", new Author("00000000t", "Anónimo", 17)), 
        new Book("1234567890124", "Prueba2", new Author("11111111h", "Federico García Lorca", 20)), 
        new Book("1234567890125", "Prueba3", new Author("22222222j", "Almudena Grandes", 30))
    ];
  }

  public selectAllBooks(): Book[] {
      return this.bookList;
  }
}