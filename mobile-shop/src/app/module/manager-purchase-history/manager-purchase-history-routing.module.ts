import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagerPurchaseHistoryListComponent} from './manager-purchase-history-list/manager-purchase-history-list.component';
import {
  ManagerPurchaseHistorySortByProductNameComponent
} from './manager-purchase-history-sort-by-product-name/manager-purchase-history-sort-by-product-name.component';
import {
  ManagerPurchaseHistorySortByTotalPriceComponent
} from './manager-purchase-history-sort-by-total-price/manager-purchase-history-sort-by-total-price.component';
import {
  ManagerPurchaseHistorySortByQuantityComponent
} from './manager-purchase-history-sort-by-quantity/manager-purchase-history-sort-by-quantity.component';
import {
  ManagerPurchaseHistorySortByCustomerNameComponent
} from './manager-purchase-history-sort-by-customer-name/manager-purchase-history-sort-by-customer-name.component';
import {
  ManagerPurchaseHistorySortByDateOutputInvoiceComponent
} from './manager-purchase-history-sort-by-date-output-invoice/manager-purchase-history-sort-by-date-output-invoice.component';


const routes: Routes = [{
  path: 'managerPurchaseHistory',
  component: ManagerPurchaseHistoryListComponent},
  {path: 'sortByProductName',
  component: ManagerPurchaseHistorySortByProductNameComponent},
  {path: 'sortByTotalPrice',
  component: ManagerPurchaseHistorySortByTotalPriceComponent},
  {path: 'sortByQuantity',
  component: ManagerPurchaseHistorySortByQuantityComponent},
  {path: 'sortByCustomerName',
  component: ManagerPurchaseHistorySortByCustomerNameComponent},
  {path: 'sortByDateOutputInvoice',
  component: ManagerPurchaseHistorySortByDateOutputInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerPurchaseHistoryRoutingModule { }
