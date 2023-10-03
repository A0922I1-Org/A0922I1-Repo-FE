import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputInvoiceDetailRoutingModule } from './input-invoice-detail-routing.module';
import { InputInvoiceDetailListComponent } from './input-invoice-detail-list/input-invoice-detail-list.component';


@NgModule({
  declarations: [InputInvoiceDetailListComponent],
  imports: [
    CommonModule,
    InputInvoiceDetailRoutingModule
  ]
})
export class InputInvoiceDetailModule { }
