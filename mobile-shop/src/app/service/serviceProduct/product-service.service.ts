import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
import {Page} from '../../model/page';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  // tslint:disable-next-line:variable-name
  private readonly API_URl = 'http://localhost:8080/api/product';

  constructor(private httpClient: HttpClient) { }
  listProduct(pageNo: number): Observable<Page<Product>> {
    const params = new HttpParams()
      .set('page', pageNo.toString());
    return this.httpClient.get<Page<Product>>(this.API_URl, {params});
  }
  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URl + '/' + id);
  }
  search(option: string, search: string, productStorage: string): Observable<Page<Product>> {
    return this.httpClient.get<Page<Product>>(`${this.API_URl}?option=${option}&search=${search}&storage=${productStorage}`);
  }
}
