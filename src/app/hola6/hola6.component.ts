import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-hola6',
  templateUrl: './hola6.component.html',
  styleUrls: ['./hola6.component.css']
})
export class Hola6Component implements OnInit {

    bookList: Book[] = {} as Book[];
    newBook: Book = {} as Book;
    selectedBook: Book = {} as Book;

  constructor(public libraryService: LibraryService) {
  }

  ngOnInit(): void {
      this.bookList = this.libraryService.selectAllBooks();
  }

  insertBook(): void {
      this.bookList.push({...this.newBook}); // Clonamos el objeto antes de insertarlo mediante la notación {... obj}.
      this.newBook = {} as Book;
  }

  deleteBook(isbn: string): void {
      let bookToDelete = this.bookList.filter((book) => {return book.isbn === isbn})[0];
      let indexToDelete = this.bookList.indexOf(bookToDelete);
      this.bookList.splice(indexToDelete, 1);
  }

  showBook(isbn: string): void {
      this.selectedBook = this.bookList.filter((book) => {return book.isbn === isbn})[0];;
  }
}