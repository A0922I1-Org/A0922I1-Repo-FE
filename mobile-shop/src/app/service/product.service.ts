import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  deleteProduct(id: any): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/api/product/' + id);
  }

  getProductById(id: any): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/api/product/' + id);
  }

  getProductList(brandName: string, sellingPrice: string, productName: string,
                 currentPage: number, pageSize: number, sort: string, direction: boolean): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/product/list?brandName=' +
    brandName + '&sellingPrice=' + sellingPrice + '&productName=' + productName +
    '&page=' +  currentPage + '&size=' + pageSize + '&sort=' + sort + '&direction=' + direction);
  }
}
