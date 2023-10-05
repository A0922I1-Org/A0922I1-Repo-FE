import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../model/page';
import {Supplier} from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = 'http://localhost:8080/api/suppliers';

  constructor(private http: HttpClient) {}

  getAllSuppliers(pageNo: number, pageSize: number): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<Supplier>>(this.apiUrl +'/paged', { params });
  }

  getById(id: number){
    return this.http.get<Supplier>(this.apiUrl+'/'+id);
  }
}
