
import {ProductCreateComponent} from './module/product/product-create/product-create.component';
import {ProductEditComponent} from './module/product/product-edit/product-edit.component';
import {ReportCreateComponent} from './module/report/report-create/report-create.component';
import {SupplierModule} from './module/supplier/supplier.module';
import {InputInvoiceDetailModule} from './module/input-invoice-detail/input-invoice-detail.module';
import {CustomerListComponent} from './module/customer/customer-list/customer-list.component';
import {AddUserComponent} from './model/user/add-user/add-user.component';
import {CommonModule, DatePipe} from '@angular/common';
import {DateFormatPipe} from './date-format.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ChangePasswordComponent} from './model/user-detail/change-password/change-password.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManagerPurchaseHistoryRoutingModule} from './module/manager-purchase-history/manager-purchase-history-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PhoneDetailsComponent} from './shared/phone-details/phone-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule, RouterOutlet} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {SecurityModule} from "./model/security/security.module";



import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import {CustomerModule} from "./module/customer/customer.module";
import {HomePageComponent} from "./shared/home-page/home-page.component";
import {BodyComponent} from "./shared/body/body.component";
import {ImageScrollComponent} from "./shared/image-scroll/image-scroll.component";



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DateFormatPipe,
    ChangePasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BodyComponent,
    ImageScrollComponent
  ],
  entryComponents: [PhoneDetailsComponent],

  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    SecurityModule,
    ManagerPurchaseHistoryRoutingModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerModule,
    SupplierModule,
    InputInvoiceDetailModule,
    NgbModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule,
    SocialLoginModule
  ],
  providers: [DatePipe],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
