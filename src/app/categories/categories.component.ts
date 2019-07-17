import { Component, OnInit } from '@angular/core';
import { Category } from '../_model/category';
import { CategoriesService } from '../_service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	categories: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
	  this.getCategories();
  }

getCategories(): void {
	this.categoriesService.getCategories()
		.subscribe(categories => this.categories = categories);
}
}
