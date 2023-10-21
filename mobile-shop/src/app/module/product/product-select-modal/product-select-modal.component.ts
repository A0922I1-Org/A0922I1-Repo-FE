import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductServiceService} from '../../../service/serviceProduct/product-service.service';
import {Product} from '../../../model/product';
import {Page} from '../../../model/page';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-product-select-modal',
  templateUrl: './product-select-modal.component.html',
  styleUrls: ['./product-select-modal.component.css']
})
export class ProductSelectModalComponent implements OnInit, OnChanges {

  @Input() reload: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.reload && this.reload) {
      this.getProductList('', '', '', '', '', true);
    }
  }

  searchForm: FormGroup;
  @Output() productEmitted = new EventEmitter<Product>();

  constructor(private productService: ProductServiceService, private router: Router) {
    this.getProductList('', '', '', '', '', true);
    this.searchForm = new FormGroup({
      productName: new FormControl('', [Validators.maxLength(3)])
    });
  }

  products: Product [] = [];
  product: Product;
  chooseProductId = 0;
  chooseProductName = '';
  totalPages = 0;
  currentPage = 0;
  pageSize = 0;
  check: boolean;
  brand: string;
  price: string;
  name: string;
  cpu: string;
  sort: string;

  ngOnInit(): void {

  }

  doDelete(deleteProductId: number) {
    this.productService.deleteProduct(deleteProductId).subscribe(() => {
      alert('Xóa sản phẩm thành công');
      this.getProductList('', '', '', '', '', true);
    });
  }

  getProductList(brandName: string, sellingPrice: string, productName: string, productCpu: string,  sort: string, check: boolean) {
    this.brand = brandName;
    this.price = sellingPrice;
    this.name = productName;
    this.cpu = productCpu;
    if (sort === '') {
      sort = 'product_id';
    }
    this.sort = sort;
    if (check === true) {
      this.productService.getProductList(brandName, sellingPrice, productName, productCpu, 1, 8, sort, true).subscribe((response: any) => {
        if (response == null) {

          console.log(response);

          this.products = [];
          this.totalPages = 0;
          this.currentPage = 0;
          this.pageSize = 0;
        } else {
          console.log(response);

          this.products = response.content;
          this.totalPages = response.totalPages;
          this.currentPage = response.number;
          this.pageSize = response.size;
        }
      });
      this.check = check;
    } else if (check === false) {
      {
        this.productService.getProductList(brandName, sellingPrice, productName, productCpu, 1, 8, sort, false).subscribe((response: any) => {
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
      this.productService.getProductList(this.brand, this.price, this.name, this.cpu,  this.currentPage,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.productService.getProductList(this.brand, this.price, this.name, this.cpu, this.currentPage + 2,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
  }


  findByIdProduct(productId: number) {
    this.productService.findById(productId).subscribe(data => {
      this.product = data;
      this.productEmitted.emit(this.product);
      console.log(data);
    });

  }
}
