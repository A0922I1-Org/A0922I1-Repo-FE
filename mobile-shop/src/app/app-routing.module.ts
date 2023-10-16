
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {RoleGuard} from './role.guard';



const routes: Routes = [

  {

    path: 'input-invoice',
    loadChildren: () => import('./module/input-invoice-detail/input-invoice-detail.module').then(m => m.InputInvoiceDetailModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./module/supplier/supplier.module').then(module => module.SupplierModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./model/security/security-routing.module').then(module => module.SecurityRoutingModule),
  },
  {
    path: 'signUp',
    loadChildren: () => import('./model/user/user-routing.module').then(module => module.UserRoutingModule),
  },
  {
    path: 'infor',
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

export class AppRoutingModule {}

