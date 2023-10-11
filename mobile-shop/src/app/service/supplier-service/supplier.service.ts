import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../../model/page';
import {Supplier} from '../../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:8080/api/suppliers';
=======
  private apiUrl = 'http://localhost:8080/api/suppliers/'
>>>>>>> NghiaBH-create-update-Supplier

  constructor(private http: HttpClient) {}

  getAllSuppliers(pageNo: number, pageSize: number): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<Supplier>>(this.apiUrl + '/paged', { params });
  }


  deleteSupplier(supplierId: string): Observable<void> {
    const deleteUrl = `${this.apiUrl}/delete/${supplierId}`;
    return this.http.delete<void>(deleteUrl);
  }

  searchSuppliers(
    name: string,
    address: string,
    phone: string,
    pageNo: number,
    pageSize: number
  ): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('name', name)
      .set('address', address)
      .set('phone', phone)
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<Supplier>>(this.apiUrl + '/search', { params });
  }

  sortByNameSupplier(
    flag: string,
    pageNo: number,
    pageSize: number
  ): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('flag', flag.toString())
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<Supplier>>(this.apiUrl + '/sort/name', { params });
  }

  sortByIdSupplier(
    flag: string,
    pageNo: number,
    pageSize: number
  ): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('flag', flag.toString())
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<Supplier>>(this.apiUrl + '/sort/id', { params });
  }
}
