import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
	  return this.http.get<Category[]>('http://localhost:8080/api/categories',
		  { observe: 'body' });
  }

  public getCategoryById(id: string): Observable<Category> {
	  return this.http.get<Category>('http://localhost:8080/api/categories/' + id,
		  { observe: 'body' });
  }
}