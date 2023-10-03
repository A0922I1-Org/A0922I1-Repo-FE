import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputInvoiceDetailListComponent} from "./input-invoice-detail-list/input-invoice-detail-list.component";


const routes: Routes = [
  {
    path:'list',
    component:InputInvoiceDetailListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputInvoiceDetailRoutingModule { }
