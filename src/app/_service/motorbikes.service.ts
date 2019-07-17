import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Motorbike } from '../_model/motorbike';

@Injectable({
  providedIn: 'root'
})
export class MotorbikesService {

  constructor(private http: HttpClient) { }

  public getMotorbikes(categoryId: string): Observable<Motorbike[]> {
	  return this.http.get<Motorbike[]>('http://localhost:8080/api/categories/' + categoryId + '/motorcycles',
		  { observe: 'body' });
  }

	public getMotorbike(categoryId: string, id: string): Observable<Motorbike> {
		return this.http.get<Motorbike>('http://localhost:8080/api/categories/' + categoryId + '/motorcycles/' + id,
			{ observe: 'body' });
	}
}