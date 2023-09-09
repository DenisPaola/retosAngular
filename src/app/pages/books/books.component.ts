import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  arrayBooks: Book[] = [];
  searchId: string = ''; // Valor del buscador

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.actualizarLibreria();
  }

  onSearchInput(): void {
    this.actualizarLibreria();
  }

  private actualizarLibreria(): void {
    if(this.searchId){
      const book = this.booksService.getOne(parseInt(this.searchId));
      this.arrayBooks = book ? [book] : [];
    }
    else{
      this.arrayBooks = this.booksService.getAll();
    }
    
  }

  removeBook(bookId: number): void {
    this.booksService.delete(bookId);
    this.actualizarLibreria();
  }
  
}
