import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {path: '', loadChildren: () => import('./model/security/security-routing.module').then(module => module.SecurityRoutingModule)},
  {path: 'signUp', loadChildren: () => import('./model/user/user-routing.module').then(module => module.UserRoutingModule)},
  {path: 'infor', loadChildren: () => import('./model/user-detail/infor-user-routing.module').then(module => module.InforUserRoutingModule)},
  {path: 'changePassword', loadChildren: () => import('./model/user-detail/infor-user-routing.module').then(module => module.InforUserRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
