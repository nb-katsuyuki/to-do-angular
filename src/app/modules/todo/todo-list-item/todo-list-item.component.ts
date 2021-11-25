import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Category, ICategory } from 'src/app/models/category';
import { Color, IColor } from 'src/app/models/color';
import { IState, State } from 'src/app/models/state';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo!: ITodo
  @Input() states!: IState[]
  @Input() categorys!: ICategory[]
  @Input() colors!: IColor[]

  @Output() edit = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()

  state: IState = new State()
  color: IColor = new Color()
  category: ICategory = new Category()

  constructor() { }

  ngOnInit(): void {
    console.log(this.states, this.todo.state)
    this.state = this.states.find(s => s.code === this.todo.state) ?? new State()
    this.category = this.categorys.find(c => c.id === this.todo.categoryId) ?? new Category()
    this.color = this.colors.find(c => c.code === this.category?.color) ?? new Color()
  }

  onEdit(): void {
    this.edit.emit(this.todo.id)
  }

  onDelete(): void {
    this.delete.emit(this.todo.id)
  }
}
