import {SupplierModule} from './module/supplier/supplier.module';
import {InputInvoiceDetailModule} from './module/input-invoice-detail/input-invoice-detail.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerListComponent } from './module/customer/customer-list/customer-list.component';
import { ProductListComponent } from './module/product/product-list/product-list.component';
import {ProductModule} from './module/product/product.module';



@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule,
    InputInvoiceDetailModule,
  ],

  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
