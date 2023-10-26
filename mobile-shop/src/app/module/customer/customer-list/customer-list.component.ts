import { Component, OnInit } from '@angular/core';
import {ServiceCustomerService} from "../../../service/serviceCustomer/service-customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../../model/customer";
import {Page} from "../../../model/page";
import {ShareDataService} from "../../../service/outputInvoiceService/share-data.service";
import Swal from "sweetalert2";
import {isEmpty} from "rxjs/operators";



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer;
  page: Page<Customer>;
  customers: Customer [];
  option: string;
  constructor(private serviceCustomerService: ServiceCustomerService,
              private router: Router,
              private shareData: ShareDataService) {

  }

  ngOnInit(): void {
    this.getListCustomer(0);
  }

  getListCustomer(pageNo: number) {
    console.log("da vao");
    this.serviceCustomerService.listCustomer(pageNo).subscribe(data => {
      this.customers = data.content;
      this.page = data;
      console.log(this.page);
    })
  }

  findByIdCustomer(id: number) {
    this.serviceCustomerService.findById(id).subscribe(data => {
      this.customer = data;
      this.shareData.setCustomerData(data)
    });
  }
  searchCustomer(search: HTMLInputElement, numberPhone: HTMLInputElement) {
    this.serviceCustomerService.searchAll(this.option, search.value, numberPhone.value).subscribe(data => {
      if (data && data.content){
       this.customers = data.content;
       this.page = data;
      }else {
       Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Tìm kiếm không thấy',
          showConfirmButton: false,
          timer: 1500,
        })

      }
      console.log(data);
    });

  }
  deleteCustomer() {
    this.shareData.deleteCustomer();
  }
}



