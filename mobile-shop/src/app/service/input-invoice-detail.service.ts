import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InputInvoiceDetail} from "../model/input-invoice-detail";
import {Page} from "../model/page";

@Injectable({
  providedIn: 'root'
})
export class InputInvoiceDetailService {
 private readonly URL_API = "http://localhost:8080/input-invoice"

  constructor(private http: HttpClient) { }

  getInputInvoiceList(){
   return this.http.get<Page<InputInvoiceDetail>>(this.URL_API + '/' + 'list');
  }
}