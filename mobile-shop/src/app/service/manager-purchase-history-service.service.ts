import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManagerPurchaseHistory} from '../model/manager-purchase-history';
import {Page} from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class ManagerPurchaseHistoryServiceService {

  API = 'http://localhost:8080/api/managerPurchaseHistory';
  constructor(private httpClient: HttpClient) { }
  getAllManagerPurchaseHistory(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API, {params});
  }
  sortByCustomerName(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '/sortByCustomerName', {params});
  }
  sortByProductName(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '/sortByProductName', {params});
  }
  sortByTotalPrice(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '/sortByTotalPrice', {params});
  }
  sortByQuantity(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '/sortByQuantity', {params});
  }
  sortByDateOutputInvoice(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '/sortByDateOutputInvoice', {params});
  }
}
