


import { ProductCreateComponent } from './module/product/product-create/product-create.component';
import { ProductEditComponent } from './module/product/product-edit/product-edit.component';





import { ReportCreateComponent } from './module/report/report-create/report-create.component';


import {SupplierModule} from './module/supplier/supplier.module';
import {InputInvoiceDetailModule} from './module/input-invoice-detail/input-invoice-detail.module';

import { CustomerListComponent } from './module/customer/customer-list/customer-list.component';


import {LoginComponent} from './model/security/login/login.component';
import {AddUserComponent} from './model/user/add-user/add-user.component';
import {CommonModule, DatePipe} from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ChangePasswordComponent} from './model/user-detail/change-password/change-password.component';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ManagerPurchaseHistoryRoutingModule} from './module/manager-purchase-history/manager-purchase-history-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { ImageScrollComponent } from './shared/image-scroll/image-scroll.component';
import { PhoneDetailsComponent } from './shared/phone-details/phone-details.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,


    ProductCreateComponent,
    ProductEditComponent,


    ReportCreateComponent,


    CustomerListComponent,


    LoginComponent,
    AddUserComponent,
    DateFormatPipe,
    ChangePasswordComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ImageScrollComponent,
    PhoneDetailsComponent


  ],
  entryComponents: [PhoneDetailsComponent],

  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,

    ManagerPurchaseHistoryRoutingModule,

    AppRoutingModule,
    ReactiveFormsModule,

    FormsModule,
    SupplierModule,
    InputInvoiceDetailModule,

    NgbModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule

  ],
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule {
}
