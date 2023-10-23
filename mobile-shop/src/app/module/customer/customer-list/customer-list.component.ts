import { Component, OnInit } from '@angular/core';
import {ServiceCustomerService} from "../../../service/serviceCustomer/service-customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../../model/customer";
import {Page} from "../../../model/page";
import {ShareDataService} from "../../../service/outputInvoiceService/share-data.service";



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
              private shareData: ShareDataService) {

  }

  ngOnInit(): void {
    this.getListCustomer(0);
  }

  getListCustomer(pageNo: number) {
    this.serviceCustomerService.listCustomer(pageNo).subscribe(data => {
      this.customers = data.content;
      this.page = data;
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
      this.customers = data.content;
      this.page = data;
    });
  }
  deleteCustomer() {
    this.shareData.deleteCustomer();
  }
}



