import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[] = [];

  constructor() {
    this.add(new Book(10, 0, 'El principito', 'blanda', 'Antonie de Saint-Exupery', 12.99, 'http://profesores.fi-b.unam.mx/ing_gpemn/cpi/imagenes/anicomputer.gif'));
    this.add(new Book(11, 0, 'El poder', 'blanda', 'Pedro Baños', 9.99, 'http://profesores.fi-b.unam.mx/ing_gpemn/cpi/imagenes/anicomputer.gif'));
    this.add(new Book(12, 0, 'Diario de Ana Frank', 'blanda', 'Ana Frank', 15.99, 'http://profesores.fi-b.unam.mx/ing_gpemn/cpi/imagenes/anicomputer.gif'));
  }

  getAll(): Book[] {
    return this.books;
  }

  getOne(id_libro: number): Book|undefined {
    return this.books.find(book => book.id_book === id_libro);
  }

  add(book: Book): void {
    this.books.push(book);
  }

  edit(book: Book | undefined): boolean {
    const index = this.books.findIndex(b => b.id_book === book?.id_book);
    if (!(index !== -1)) {
      return false; //No existe el libro o es undefined
    }

    if (book instanceof Book) {
      this.books[index] = book;
      return true //se edito el libro
    }

    return false //No existe el libro o es undefined
  }

  delete(id_book: number): boolean {
    const index = this.books.findIndex(book => book.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }

}
