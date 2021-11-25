import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryListItemComponent } from './category-list-item/category-list-item.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class CategoryModule { }
