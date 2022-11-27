import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CreateProductFormService {
  constructor(private _httpClient: HttpClient) {
  }

  createProduct(object:ProductModel ): Observable<void> {
    return this._httpClient.post(`https://fakestoreapi.com/products`, object).pipe(map((_=> void 0)));
  }
}
