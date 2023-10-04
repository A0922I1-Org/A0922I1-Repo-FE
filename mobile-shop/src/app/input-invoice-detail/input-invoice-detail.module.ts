import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputInvoiceDetailRoutingModule } from './input-invoice-detail-routing.module';
import { InputInvoiceDetailListComponent } from './input-invoice-detail-list/input-invoice-detail-list.component';
import { InputInvoicePreviewListComponent } from './input-invoice-preview-list/input-invoice-preview-list.component';
import { InputInvoiceAddNewFormComponent } from './input-invoice-add-new-form/input-invoice-add-new-form.component';


@NgModule({
  declarations: [InputInvoiceDetailListComponent, InputInvoicePreviewListComponent, InputInvoiceAddNewFormComponent],
  imports: [
    CommonModule,
    InputInvoiceDetailRoutingModule
  ]
})
export class InputInvoiceDetailModule { }
