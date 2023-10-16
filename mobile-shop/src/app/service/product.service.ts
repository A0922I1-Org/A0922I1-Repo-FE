import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from '../dto/ProductDto';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL_CREATE_PRODUCT = 'http://localhost:8080/product/create-product';
  private API_URL_EDIT_PRODUCT = 'http://localhost:8080/product//edit-product/';

  constructor(private httpClient: HttpClient) {
  }
  createProduct(productDto: ProductDto): Observable<ProductDto> {
    return this.httpClient.post<ProductDto>(this.API_URL_CREATE_PRODUCT, productDto);
  }
  editProduct(productDto: ProductDto, id: number): Observable<ProductDto> {
    return this.httpClient.put<ProductDto>(`${this.API_URL_EDIT_PRODUCT}/${id}`, productDto);
  }
}
