import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SocialLoginComponent} from "./social/social-login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '/google', component: SocialLoginComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
