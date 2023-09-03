import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  arrayBooks: Book[];

  constructor() {
    this.arrayBooks = []

    this.arrayBooks.push(new Book(10, 0, 'El principito', 'blanda', 'Antonie de Saint-Exupery', 12.99, 'http://profesores.fi-b.unam.mx/ing_gpemn/cpi/imagenes/anicomputer.gif'));
    this.arrayBooks.push(new Book(11, 0, 'El poder', 'blanda', 'Pedro Baños', 9.99, 'http://profesores.fi-b.unam.mx/ing_gpemn/cpi/imagenes/anicomputer.gif'));
    this.arrayBooks.push(new Book(12, 0, 'Diario de Ana Frank', 'blanda', 'Ana Frank', 15.99, 'http://profesores.fi-b.unam.mx/ing_gpemn/cpi/imagenes/anicomputer.gif'));
  }

  newBook(
    idbook: HTMLInputElement,
    title: HTMLInputElement,
    type: HTMLInputElement,
    author: HTMLInputElement,
    price: HTMLInputElement,
    photo: HTMLInputElement) {

    debugger;
    this.arrayBooks.push(new Book(
      parseInt(idbook.value),
      0,
      title.value,
      type.value,
      author.value,
      parseFloat(price.value),
      photo.value));
  }

  removeBook(bookId: number){
    debugger;
    let pos = -1;
    this.arrayBooks.forEach((book, index) => {
      if(book.id_book === bookId){
        pos = index;
      }
    });

    debugger;
    if(pos !== -1){
      this.arrayBooks.splice(pos, 1);
    }
  }
}
