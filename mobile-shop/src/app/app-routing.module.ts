
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {RoleGuard} from './role.guard';
import {HomePageComponent} from "./shared/home-page/home-page.component";



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./model/security/security.module').then(module => module.SecurityModule),
  },
  {
    path: 'signUp',
    loadChildren: () => import('./model/user/user-routing.module').then(module => module.UserRoutingModule),
    canActivate: [AuthGuard, RoleGuard],// Áp dụng AuthGuard cho route này
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'profile',
    loadChildren: () => import('./model/user-detail/infor-user-routing.module').then(module => module.InforUserRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'changePassword',
    loadChildren: () => import('./model/user-detail/infor-user-routing.module').then(module => module.InforUserRoutingModule),
    canActivate: [AuthGuard], // Áp dụng cả AuthGuard và RoleGuard cho route này

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {
}
