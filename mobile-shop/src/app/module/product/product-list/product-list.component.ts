import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {
  }

  products: Product [] = [];
  chooseProductId = 0;
  chooseProductName = '';
  totalPages = 0;
  currentPage = 0;
  pageSize = 0;
  check = true;
  ngOnInit(): void {
    this.search('', '', '');
  }

  // getAll() {
  //   this.productService.getAllProducts(1, 8).subscribe((response: any) => {
  //     if (response == null) {
  //       this.products = [];
  //       this.totalPages = 0;
  //       this.currentPage = 0;
  //       this.pageSize = 0;
  //     } else {
  //       this.products = response.content;
  //       this.totalPages = response.totalPages;
  //       this.currentPage = response.number;
  //       this.pageSize = response.size;
  //     }
  //   });
  // }

  doDelete(deleteProductId: number) {
    this.productService.deleteProduct(deleteProductId).subscribe(() => {
      alert('Xóa sản phẩm thành công');
      this.search('', '', '');
    });
  }

  search(brandName: string, sellingPrice: string, productName: string) {
    this.productService.searchProduct(brandName, sellingPrice, productName, 1, 8).subscribe((response: any) => {
      if (response == null) {
        this.products = [];
        this.totalPages = 0;
        this.currentPage = 0;
        this.pageSize = 0;
      } else {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      }
    });
  }

  findProduct(productId, productName) {
    this.chooseProductId = productId;
    this.chooseProductName = productName;
  }

  onPrevPage() {
    if (this.currentPage > 0) {
      this.productService.searchProduct('', '', '', this.currentPage, this.pageSize).subscribe((response: any) => {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.productService.searchProduct('', '', '', this.currentPage + 2, this.pageSize).subscribe((response: any) => {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
  }
}
