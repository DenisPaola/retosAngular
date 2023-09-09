import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  bookUpdated: boolean = false;
  bookNoFinded: boolean = false;

  constructor(private booksService: BooksService) {}

  updateBook(idbook:HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {
    let book = this.booksService.getOne(parseInt(idbook.value))
    if(book){
      book.title = title.value
      book.type = type.value
      book.author = author.value
      book.price = parseInt(price.value)
      book.photo = photo.value
      this.booksService.edit(book);
      this.bookUpdated = true;
    }
    else{
      this.bookNoFinded = true
    }
  }
}
