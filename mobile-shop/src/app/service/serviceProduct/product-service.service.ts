import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";
import {Page} from "../../model/page";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly API_URl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }
  listProduct(pageNo: number, pageSize: number): Observable<Page<Product>>{
    return this.httpClient.get<Page<Product>>(this.API_URl);
  }
  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URl + '/' + id);
  }
  search(option: string, search: string, productStorage: string): Observable<Page<Product>> {
    return this.httpClient.get<Page<Product>>(`${this.API_URl}?option=${option}&search=${search}&numberPhone=${productStorage}`);
  }
}
