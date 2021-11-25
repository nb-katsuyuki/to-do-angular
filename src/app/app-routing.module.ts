import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './modules/category/category-detail/category-detail.component';
import { CategoryListComponent } from './modules/category/category-list/category-list.component';
import { TodoDetailComponent } from './modules/todo/todo-detail/todo-detail.component';
import { TodoListComponent } from './modules/todo/todo-list/todo-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
