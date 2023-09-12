import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';
<<<<<<< HEAD
=======
import {ToastrService} from "ngx-toastr";
>>>>>>> rama5

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  bookUpdated: boolean = false;
  bookNoFinded: boolean = false;

<<<<<<< HEAD
  constructor(private booksService: BooksService) {}
=======
  constructor(private booksService: BooksService, private toastr: ToastrService) {}
>>>>>>> rama5

  updateBook(idbook:HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {
    let book = this.booksService.getOne(parseInt(idbook.value))
    if(book){
      book.title = title.value
      book.type = type.value
      book.author = author.value
      book.price = parseInt(price.value)
      book.photo = photo.value
<<<<<<< HEAD
      this.booksService.edit(book);
      this.bookUpdated = true;
    }
    else{
      this.bookNoFinded = true
=======
      this.bookUpdated = this.booksService.edit(book);
      if(this.bookUpdated){
        this.toastr.success('Libro actualizado correctamente', 'Éxito');
      }
      else{
        this.toastr.error('Libro no actualizado', '');
      }
    }
    else{
      this.bookNoFinded = true
      this.toastr.error('Libro no encontrado', '');
>>>>>>> rama5
    }
  }
}
