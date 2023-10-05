import { Component, OnInit } from '@angular/core';
import {ServiceCustomerService} from "../../service/service-customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  constructor(private serviceCustomerService: ServiceCustomerService,
              private router: Router) { }

  ngOnInit(): void {
  }
  getListCustomer(){
    this.serviceCustomerService.listCustomer().subscribe(data => {
      this.
    })
  }
}
