import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService {
  API_URl = 'localhost:8080/api/customers';

  constructor(private httpClient: HttpClient) { }
  listCustomer(): Observable<Customer []>{
      return this.httpClient.get<Customer[]>(this.API_URl);
  }
  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URl + '/' + id);
  }
  search(option: string, search: string, numberPhone: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.API_URl}?option=${option}&search=${search}&numberPhone=${numberPhone}`);
  }

}
