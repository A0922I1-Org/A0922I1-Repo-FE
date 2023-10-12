import { Component, OnInit } from '@angular/core';
import {Page} from '../../../model/page';
import {ManagerPurchaseHistory} from '../../../model/manager-purchase-history';
import {ManagerPurchaseHistoryServiceService} from '../../../service/manager-purchase-history-service.service';

@Component({
  selector: 'app-manager-purchase-history-sort-by-date-output-invoice',
  templateUrl: './manager-purchase-history-sort-by-date-output-invoice.component.html',
  styleUrls: ['./manager-purchase-history-sort-by-date-output-invoice.component.css']
})
export class ManagerPurchaseHistorySortByDateOutputInvoiceComponent implements OnInit {
  page: Page<ManagerPurchaseHistory>;
  constructor(private managerPurchaseHistoryService: ManagerPurchaseHistoryServiceService) {
  }

  ngOnInit(): void {
    this.loadManagerPurchaseHistory(1, 8);
  }
  loadManagerPurchaseHistory(pageNo: number, pageSize: number): void {
    this.managerPurchaseHistoryService.sortByDateOutputInvoice(pageNo, pageSize)
      .subscribe(data => {
        this.page = data;
      });
  }

  convertToTime(dateTime: Date) {
    const date = new Date(dateTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

}
