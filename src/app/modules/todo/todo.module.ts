import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class TodoModule { }
