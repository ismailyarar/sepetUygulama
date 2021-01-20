import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories: Category[];
  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
