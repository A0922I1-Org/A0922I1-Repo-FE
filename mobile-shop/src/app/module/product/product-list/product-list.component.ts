import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Brand} from '../../../model/brand';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
  }
  selectedBrand = '';
  brands: Brand [] = [];
  products: Product [] = [];
  chooseProductId = 0;
  chooseProductName = '';
  totalPages = 0;
  currentPage = 0;
  pageSize = 0;
  check: boolean;
  brand: string;
  price: string;
  name: string;
  sort: string;

  ngOnInit(): void {
    this.getProductList('', '', '', '', false);
    this.searchForm = new FormGroup({
      productName: new FormControl('', [Validators.maxLength(30)])
    });
  }

  doDelete(deleteProductId: number) {
    this.productService.deleteProduct(deleteProductId).subscribe(() => {
      alert('Xóa sản phẩm thành công');
      this.getProductList('', '', '', '', false);
    });
  }

  getProductList(brandName: string, sellingPrice: string, productName: string, sort: string, check: boolean) {
    this.brand = brandName;
    this.price = sellingPrice;
    this.name = productName;
    if (sort === '') {
      sort = 'product_id';
    }
    this.sort = sort;
    if (check === true) {
      this.productService.getResponseProduct(brandName, sellingPrice, productName, 1, 8, sort, true).subscribe((response: any) => {
        if (response == null) {
          this.brands = [];
          this.products = [];
          this.totalPages = 0;
          this.currentPage = 0;
          this.pageSize = 0;
        } else {
          this.products = response.productPage.content;
          this.brands = response.brandList;
          this.totalPages = response.productPage.totalPages;
          this.currentPage = response.productPage.number;
          this.pageSize = response.productPage.size;
        }
      });
      this.check = check;
    } else if (check === false) {
      {
        this.productService.getResponseProduct(brandName, sellingPrice, productName, 1, 8, sort, false).subscribe((response: any) => {
          if (response == null) {
            this.brands = [];
            this.products = [];
            this.totalPages = 0;
            this.currentPage = 0;
            this.pageSize = 0;
          } else {
            this.products = response.productPage.content;
            this.brands = response.brandList;
            this.totalPages = response.productPage.totalPages;
            this.currentPage = response.productPage.number;
            this.pageSize = response.productPage.size;
          }
        });
        this.check = check;
      }
    }
  }

  findProduct(productId, productName) {
    this.chooseProductId = productId;
    this.chooseProductName = productName;
  }

  onPrevPage() {
    if (this.currentPage > 0) {
      this.productService.getResponseProduct(this.brand, this.price, this.name, this.currentPage,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.products = response.productPage.content;
        this.brands = response.brandList;
        this.totalPages = response.productPage.totalPages;
        this.currentPage = response.productPage.number;
        this.pageSize = response.productPage.size;
      });
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.productService.getResponseProduct(this.brand, this.price, this.name, this.currentPage + 2,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.products = response.productPage.content;
        this.brands = response.brandList;
        this.totalPages = response.productPage.totalPages;
        this.currentPage = response.productPage.number;
        this.pageSize = response.productPage.size;
      });
    }
  }
}
