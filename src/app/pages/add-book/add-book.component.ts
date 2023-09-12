import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from '../../models/book';
<<<<<<< HEAD
=======
import {ToastrService} from "ngx-toastr";
>>>>>>> rama5

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  bookAdded: boolean = false;

<<<<<<< HEAD
  constructor(private booksService: BooksService) {
=======
  constructor(private booksService: BooksService, private toastr: ToastrService) {
>>>>>>> rama5

  }

  addBook(idbook: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {
    let newBook = new Book(parseInt(idbook.value), 0, title.value, type.value, author.value, parseInt(price.value), photo.value);
    this.booksService.add(newBook);
    this.bookAdded = true
<<<<<<< HEAD
=======
    this.toastr.success("Libro añadido correctamente")
>>>>>>> rama5
  }
}
