import { Component, OnInit } from '@angular/core';
import {ManagerPurchaseHistory} from '../../../model/manager-purchase-history';
import {Page} from '../../../model/page';
import {ManagerPurchaseHistoryServiceService} from '../../../service/manager-purchase-history-service.service';

@Component({
  selector: 'app-manager-purchase-history-list',
  templateUrl: './manager-purchase-history-list.component.html',
  styleUrls: ['./manager-purchase-history-list.component.css']
})
export class ManagerPurchaseHistoryListComponent implements OnInit {
  page: Page<ManagerPurchaseHistory>;
  sort = '';
  constructor(private managerPurchaseHistoryService: ManagerPurchaseHistoryServiceService) {
  }

  ngOnInit(): void {
    this.loadManagerPurchaseHistory(1, 8, this.sort);
  }
  loadManagerPurchaseHistory(pageNo: number, pageSize: number, sort: string): void {
    if (sort == null) {
      this.sort = '';
    } else {
      this.sort = sort;
    }
    switch (this.sort) {
      case 'customerName':
        this.managerPurchaseHistoryService.sortByCustomerName(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'time':
        this.managerPurchaseHistoryService.sortByDateOutputInvoice(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'productName':
        this.managerPurchaseHistoryService.sortByProductName(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'totalPrice':
        this.managerPurchaseHistoryService.sortByTotalPrice(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'quantity':
        this.managerPurchaseHistoryService.sortByQuantity(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      default :
        this.managerPurchaseHistoryService.getAllManagerPurchaseHistory(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
    }
  }
  convertToTime(dateTime: Date) {
    const date = new Date(dateTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
}

