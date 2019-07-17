import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../_model/category';
import { CategoriesService } from '../_service/categories.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
	public categoryId: string;
	public category: Category;

  constructor(private categoriesService: CategoriesService,
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	  this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');

	  this.getCategoryById(this.categoryId);
  }

getCategoryById(id: string): void {
	this.categoriesService.getCategoryById(id)
		.subscribe(category => this.category = category);
}

}