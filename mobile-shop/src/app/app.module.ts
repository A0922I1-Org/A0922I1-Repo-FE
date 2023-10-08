// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import {HttpClientModule} from "@angular/common/http";
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './module/customer/customer-list/customer-list.component';
import { ProductListComponent } from './module/product/product-list/product-list.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
