import { Component, OnInit } from '@angular/core';
import {ServiceCustomerService} from "../../../service/serviceCustomer/service-customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../../model/customer";
import {Page} from "../../../model/page";



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer;

  customers: Page<Customer>;


  constructor(private serviceCustomerService: ServiceCustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getListCustomer(1, 4);
  }

  getListCustomer(pageNo: number, pageSize: number) {
    this.serviceCustomerService.listCustomer(pageNo, pageSize).subscribe(data => {
      this.customers = data;
      console.log(data);
    })
  }

  findByIdCustomer(id: number) {
    this.serviceCustomerService.findById(id).subscribe(data => {
      this.customer = data;
      console.log(data);
    });
  }

  searchCustomer(option: HTMLOptionElement, search: HTMLInputElement, numberPhone: HTMLInputElement) {
    if (option.value === null && search.value === null && numberPhone.value === null) {
      this.getListCustomer(1, 8);
    } else {
      this.serviceCustomerService.search(option.value, search.value, numberPhone.value).subscribe(data => {
        this.customers = data;
        console.log(this.customers);
        if (this.customers.size === 0) {

        }
      })
    }
  }
}

