import { Component, OnInit } from '@angular/core';
import {ProductInputDto} from "../../../dto/ProductInputDto";

@Component({
  selector: 'app-input-invoice-add-new-form',
  templateUrl: './input-invoice-add-new-form.component.html',
  styleUrls: ['./input-invoice-add-new-form.component.css']
})
export class InputInvoiceAddNewFormComponent implements OnInit {

  product
  isNewProduct: boolean = false;
  productNameIsDisable = true;
  chooseProductInPastDisable = false;

  // tách riêng các trường ra để validate real time dưới backend
productToList: ProductInputDto;
  productId: number =0;
productName: string = "";
  costPrice: number = 0;
  quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsNewProduct(){
    this.isNewProduct = !this.isNewProduct;
    this.productNameIsDisable = !this.productNameIsDisable;
    this.chooseProductInPastDisable = ! this.chooseProductInPastDisable;
    console.log(this.isNewProduct);
  }

  addToList(){
    console.log(this.productId);
    console.log(this.productName);
    console.log(this.costPrice);
    console.log(this.quantity);
   this.productToList = new ProductInputDto(this.productId,this.productName,this.costPrice,this.quantity)
    console.log(this.productToList);

  }
}
