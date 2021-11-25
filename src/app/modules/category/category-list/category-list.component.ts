import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IApiResponse } from 'src/app/models/api-response';
import { Category, ICategory } from 'src/app/models/category';
import { IColor } from 'src/app/models/color';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categorys: ICategory[] = []
  colors: IColor[] = []
  category: ICategory = new Category()

  constructor(private categoryService: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.categoryService.colors().subscribe(
      colors => this.colors = colors
    )

    this.categoryService.list().subscribe(
      categorys => this.categorys = categorys
    )
  }

  onAdd(): void {
    this.category = new Category()
  }

  onEdit(id: number): void {
    // let category = this.categorys.find(c => c.id == id)
    // if (category) {
    //   this.category = category
    // }
    // this.location.go(`category/${id}`)
  }

  onDelete(id: number): void {
    this.categoryService.delete(id).subscribe((res: IApiResponse) => {
      if (res.result) {
        this.categorys = this.categorys.filter(c => c.id != res.id)
      }
      else {
        // @TODO 削除失敗
      }
    })
  }
}
