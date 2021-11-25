import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IState } from 'src/app/models/state';
import { ITodo, Todo } from 'src/app/models/todo';
import { CategoryService } from 'src/app/services/category.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  states: IState[] = []
  categorys: ICategory[] = []
  todo: ITodo = new Todo()

  is_edit: boolean = false

  constructor(
    private todoService: TodoService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.todoService.states().subscribe(
      states => this.states = states
    )

    this.categoryService.list().subscribe(
      categorys => this.categorys = categorys
    )

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (0 === id) {
      // 新規
    }
    else {
      // 最新のものを取得
      this.todoService.detail(id).subscribe(
        c => { if (c) { this.todo = c; this.is_edit = true } }
      )
    }
  }

  goBack(): void {
    this.location.back()
  }

  onSubmit(): void {
    var future;
    if (this.is_edit) {
      future = this.todoService.update(this.todo)
    }
    else {
      future = this.todoService.create(this.todo)
    }

    future.subscribe(res => {
      console.log(res)
      if (res.result) {
        //  正常
        this.goBack()
      }
      else {
        // エラー
      }
    })
  }
}
