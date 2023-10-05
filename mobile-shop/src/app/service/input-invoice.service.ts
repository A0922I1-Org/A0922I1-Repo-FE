import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Page} from "../model/page";
import {InputInvoiceDetail} from "../model/input-invoice-detail";
import {Supplier} from "../model/supplier";
import {InputInvoiceDetailService} from "./input-invoice-detail.service";

@Injectable({
  providedIn: 'root'
})
export class InputInvoiceService {
  private readonly URL_API = "http://localhost:8080/input-invoice"

  constructor(private http: HttpClient,
              private inputInvoiceDetailService: InputInvoiceDetailService) { }

  addInputInvoiceList(supplier: Supplier){
    return this.http.post<InputInvoiceDetail>(this.URL_API + '/new-input-invoice',supplier);
  }
}
