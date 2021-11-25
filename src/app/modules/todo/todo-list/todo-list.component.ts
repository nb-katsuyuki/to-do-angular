import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IApiResponse } from 'src/app/models/api-response';
import { ICategory } from 'src/app/models/category';
import { IColor } from 'src/app/models/color';
import { IState } from 'src/app/models/state';
import { ITodo, Todo } from 'src/app/models/todo';
import { CategoryService } from 'src/app/services/category.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  categorys: ICategory[] = []
  colors: IColor[] = []
  states: IState[] = []
  todos: ITodo[] = []
  todo: ITodo = new Todo()

  constructor(
    private todoService: TodoService,
    private categoryService: CategoryService,
    private location: Location) { }


  ngOnInit(): void {
    this.categoryService.colors().subscribe(
      colors => this.colors = colors
    )

    this.categoryService.list().subscribe(
      categorys => this.categorys = categorys
    )

    this.todoService.states().subscribe(
      states => this.states = states
    )


    this.todoService.list().subscribe(
      todos => this.todos = todos
    )
  }


  onDelete(id: number): void {
    this.todoService.delete(id).subscribe((res: IApiResponse) => {
      if (res.result) {
        this.todos = this.todos.filter(c => c.id != res.id)
      }
      else {
        // @TODO 削除失敗
      }
    })
  }
}
