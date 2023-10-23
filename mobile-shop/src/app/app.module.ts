// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerListComponent } from './module/customer/customer-list/customer-list.component';
import { ProductListComponent } from './module/product/product-list/product-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import {OutputInvoiceModule} from "./module/output-invoice/output-invoice.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OutputInvoiceModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
