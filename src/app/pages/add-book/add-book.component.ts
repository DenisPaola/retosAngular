import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from '../../models/book';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  bookAdded: boolean = false;

  constructor(private booksService: BooksService, private toastr: ToastrService) {

  }

  addBook(idbook: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {
    let newBook = new Book(parseInt(idbook.value), 0, title.value, type.value, author.value, parseInt(price.value), photo.value);
    this.booksService.add(newBook);
    this.bookAdded = true
    this.toastr.success("Libro añadido correctamente")
  }
}
