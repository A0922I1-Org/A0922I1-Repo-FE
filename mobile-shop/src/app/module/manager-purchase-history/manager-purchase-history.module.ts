import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerPurchaseHistoryRoutingModule } from './manager-purchase-history-routing.module';
import { ManagerPurchaseHistoryListComponent } from './manager-purchase-history-list/manager-purchase-history-list.component';
// tslint:disable-next-line:max-line-length
import { ManagerPurchaseHistorySortByProductNameComponent } from './manager-purchase-history-sort-by-product-name/manager-purchase-history-sort-by-product-name.component';
import { ManagerPurchaseHistorySortByTotalPriceComponent } from './manager-purchase-history-sort-by-total-price/manager-purchase-history-sort-by-total-price.component';
import { ManagerPurchaseHistorySortByQuantityComponent } from './manager-purchase-history-sort-by-quantity/manager-purchase-history-sort-by-quantity.component';
import { ManagerPurchaseHistorySortByCustomerNameComponent } from './manager-purchase-history-sort-by-customer-name/manager-purchase-history-sort-by-customer-name.component';
import { ManagerPurchaseHistorySortByDateOutputInvoiceComponent } from './manager-purchase-history-sort-by-date-output-invoice/manager-purchase-history-sort-by-date-output-invoice.component';


@NgModule({
  declarations: [ManagerPurchaseHistoryListComponent, ManagerPurchaseHistorySortByProductNameComponent, ManagerPurchaseHistorySortByTotalPriceComponent, ManagerPurchaseHistorySortByQuantityComponent, ManagerPurchaseHistorySortByCustomerNameComponent, ManagerPurchaseHistorySortByDateOutputInvoiceComponent],
  imports: [
    CommonModule,
    ManagerPurchaseHistoryRoutingModule
  ]
})
export class ManagerPurchaseHistoryModule { }
