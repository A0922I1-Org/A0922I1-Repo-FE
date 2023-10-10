import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../../../service/serviceProduct/product-service.service";
import {Product} from "../../../model/product";
import {Page} from "../../../model/page";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [];
  product: Product;
  option: string;
  page: Page<Product>;

  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    console.log("Da vao init")
    this.getListProduct(0);
  }

  getListProduct(pageNo: number) {
    this.productServiceService.listProduct(pageNo).subscribe(data => {
      this.products = data.content;
      this.page = data;
      console.log(data);
    })

  }
  findByIdProduct(id: number) {
    this.productServiceService.findById(id).subscribe(data => {
      this.product = data;
      console.log(data);
    });
  }


  searchProduct(search: HTMLInputElement, storage: HTMLInputElement) {
    if (this.option === null && search.value === null && storage.value === null){
      this.ngOnInit();
      console.log(this.ngOnInit());
    }else {
      this.productServiceService.search(this.option, search.value, storage.value).subscribe(next =>{
        this.products = next.content;
        this.page = next;
        console.log(next);
      })
    }
  }
}
