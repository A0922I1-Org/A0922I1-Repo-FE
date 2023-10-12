import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./model/security/login/login.component";
import {AddUserComponent} from "./model/user/add-user/add-user.component";
import {CommonModule, DatePipe} from "@angular/common";
import { DateFormatPipe } from './date-format.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from "ngx-bootstrap/modal";
import {ChangePasswordComponent} from "./model/user-detail/change-password/change-password.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    DateFormatPipe,
    ChangePasswordComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
