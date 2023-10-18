import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SecurityRoutingModule} from "./security-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { SocilLoginComponent } from './social/socil-login/socil-login.component';
import { SocialLoginComponent } from './social/social-login.component';


@NgModule({
  declarations: [LoginComponent, SocilLoginComponent, SocialLoginComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
