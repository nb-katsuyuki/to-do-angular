import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, ICategory } from 'src/app/models/category';
import { IColor } from 'src/app/models/color';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  @Input() colors!: IColor[]

  category: ICategory = new Category()
  is_edit: boolean = false

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.categoryService.colors().subscribe(
      colors => this.colors = colors
    )

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (0 === id) {
      // 新規
    }
    else {
      // 最新のものを取得
      this.categoryService.detail(id).subscribe(
        c => { if (c) { this.category = c; this.is_edit = true } }
      )
    }
  }

  goBack(): void {
    this.location.back()
  }

  onSubmit(): void {
    var future;
    if (this.is_edit) {
      future = this.categoryService.update(this.category)
    }
    else {
      future = this.categoryService.create(this.category)
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
