import { Component, OnInit } from '@angular/core';
import {ServiceCustomerService} from "../../service/service-customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer [] = [];
  customer: Customer;


  constructor(private serviceCustomerService: ServiceCustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.getListCustomer();
  }
  getListCustomer(){
    this.serviceCustomerService.listCustomer().subscribe(data => {
      this.customers = data;
    })
  }

  findByIdCustomer(id: number) {
    this.serviceCustomerService.findById(id).subscribe(data => {
      this.customer = data;
      console.log(data);
    });
  }

  searchCustomer(option: HTMLOptionElement, search: HTMLInputElement, numberPhone: HTMLInputElement) {
    if (option.value === null && search.value === null && numberPhone.value === null){
      this.getListCustomer();
    }else {
      
    }
  }
}
