import {Injectable} from '@angular/core';
import {HomePageService} from './home-page.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private homePageService: HomePageService) {
  }

  search(query: string): Observable<any[]> {
    query = query.toLowerCase();

    return this.homePageService.getProducts().pipe(
      map(products =>
        products.filter((product: { productName: string; sellingPrice: { toString: () => string | string[]; }; }) =>
          product.productName.toLowerCase().includes(query) || product.sellingPrice.toString().includes(query)
        )
      )
    );
  }
}
