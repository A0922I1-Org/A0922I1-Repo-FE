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
  products: Page<Product>;
  product: Product;

  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    console.log("Da vao init")
    this.getListProduct(1, 8);
  }

  getListProduct(pageNo: number, pageSize: number) {

    this.productServiceService.listProduct(pageNo, pageSize).subscribe(data => {
      this.products = data;
      console.log(data);
    })

  }
  findByIdProduct(id: number) {
    this.productServiceService.findById(id).subscribe(data => {
      this.product = data;
      console.log(data);
    });
  }


  searchProduct(option: HTMLOptionElement, search: HTMLInputElement, storage: HTMLInputElement) {
    if (option.value === null && search.value === null && storage.value === null){
      this.ngOnInit();
    }else {
      this.productServiceService.search(option.value, search.value, storage.value).subscribe(next =>{
        this.products = next;
        console.log(this.products);
        if (this.products.size === 0){

        }
      })
    }
  }
}
