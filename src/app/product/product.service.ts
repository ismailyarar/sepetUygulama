import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  path = 'http://localhost:3000/product';
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }
}
