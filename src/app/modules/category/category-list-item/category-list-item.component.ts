import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { IColor, Color } from 'src/app/models/color';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent implements OnInit {

  @Input() category!: ICategory
  @Input() colors!: IColor[]

  @Output() edit = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()

  color: IColor = new Color()

  constructor() { }

  ngOnInit(): void {
    this.color = this.colors.find(c => c.code === this.category.color) ?? new Color()
  }

  onEdit(): void {
    this.edit.emit(this.category.id)
  }

  onDelete(): void {
    this.delete.emit(this.category.id)
  }
}
