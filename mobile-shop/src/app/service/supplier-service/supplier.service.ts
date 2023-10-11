import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {Supplier} from "../../model/supplier";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = 'http://localhost:8080/supplier/'

  constructor(private http: HttpClient) { }

  addNewSupplier(supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl + 'create', supplier);
  }
  findBySupplierId(supplierId: number): Observable<Supplier>{
    return this.http.get<Supplier>(this.apiUrl+'edit'+1);
  }
  updateSupplier(supplier): Observable<Supplier>{
    return this.http.post<Supplier>(this.apiUrl + 'update', supplier);
  }

}
