import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from './module/supplier/supplier.module';
import {InputInvoiceDetailModule} from './module/input-invoice-detail/input-invoice-detail.module';


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
    SupplierModule,
    InputInvoiceDetailModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
