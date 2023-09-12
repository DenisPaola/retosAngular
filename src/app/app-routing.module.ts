import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
<<<<<<< HEAD
=======
import { LoginComponent } from './pages/login/login.component';
>>>>>>> rama5

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'books', component:BooksComponent},
  {path:'add-book', component:AddBookComponent},
<<<<<<< HEAD
  {path:'update-book', component:UpdateBookComponent}
=======
  {path:'update-book', component:UpdateBookComponent},
  {path:'login', component:LoginComponent},
>>>>>>> rama5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
