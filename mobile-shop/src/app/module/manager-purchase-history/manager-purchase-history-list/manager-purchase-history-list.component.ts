import {Component, OnInit, Renderer2} from '@angular/core';
import {ManagerPurchaseHistory} from '../../../model/manager-purchase-history';
import {Page} from '../../../model/page';
import {ManagerPurchaseHistoryServiceService} from '../../../service/manager-purchase-history-service.service';
import {DetailHistory} from '../../../model/detail-history';
import {ScrollUpService} from "../../../service/scroll-up.service";
@Component({
  selector: 'app-manager-purchase-history-list',
  templateUrl: './manager-purchase-history-list.component.html',
  styleUrls: ['./manager-purchase-history-list.component.css']
})
export class ManagerPurchaseHistoryListComponent implements OnInit {
    page: Page<ManagerPurchaseHistory>;
    details: DetailHistory[];
  sort = '';
  managerPurchaseHistory: ManagerPurchaseHistory[];
  constructor(private managerPurchaseHistoryService: ManagerPurchaseHistoryServiceService,
              private scrollUpService: ScrollUpService,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.loadManagerPurchaseHistory(1, 8, this.sort);
    this.scrollUpService.getScrollObservable().subscribe(() => {
      this.scrollToTop();
    });
  }
  loadManagerPurchaseHistory(pageNo: number, pageSize: number, sort: string): void {
    if (sort == null) {
      this.sort = '';
    } else {
      this.sort = sort;
    }
    switch (this.sort) {
      case 'customerNameDESC':
        this.managerPurchaseHistoryService.sortByCustomerNameDESC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'timeĐESC':
        this.managerPurchaseHistoryService.sortByDateOutputInvoiceDESC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'productNameDESC':
        this.managerPurchaseHistoryService.sortByProductNameDESC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'totalPriceDESC':
        this.managerPurchaseHistoryService.sortByTotalPriceDESC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'totalPriceASC':
        this.managerPurchaseHistoryService.sortByTotalPriceASC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'productNameASC':
        this.managerPurchaseHistoryService.sortByProductNameASC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'customerNameASC':
        this.managerPurchaseHistoryService.sortByCustomerNameASC(pageNo, pageSize)
          .subscribe(data => {
            this.page = data;
          });
        break;
      case 'timeASC':
        this.managerPurchaseHistoryService.sortByDateOutputInvoiceASC(pageNo, pageSize)
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
    this.scrollUpService.scrollUp();
  }
  formatTime(timeArray: number[]): string {
    const hours = timeArray[3];
    const minutes = timeArray[4];
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${formattedHours}:${formattedMinutes}`;
  }
  formatDate(dateArray: number[]): string {
    const day = dateArray[2];
    const month = dateArray[1];
    const formatterDay = day < 10 ? `0${day}` : `${day}`;
    const formatterMonth = month < 10 ? `0${month}` : `${month}`;
    const year = dateArray[0];
    return `${formatterDay}/${formatterMonth}/${year}`;
  }
  formatCurrency(value: number): string {
    if (isNaN(value)) { return ''; }
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(/\u20AB/g, '');
  }
  getDetail(id: number) {
    this.managerPurchaseHistoryService.findById(id).subscribe(data => {
      this.details = data;
    });
  }

//Để bấm nút chuyển trang thì tự lên top
  scrollToTop() {
    this.renderer.setProperty(document.body, 'scrollTop', 0);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
}

