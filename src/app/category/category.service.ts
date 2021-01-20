import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl) {}
  path = 'http://localhost:3000/categories';
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path);
  }
}
