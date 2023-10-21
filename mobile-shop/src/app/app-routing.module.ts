
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {RoleGuard} from './role.guard';
import {HomePageComponent} from "./shared/home-page/home-page.component";



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'product',
    loadChildren: () => import('./module/product/product.module').then(module => module.ProductModule)
  },

  {path: 'managerPurchaseHistory', loadChildren: () => import('./module/manager-purchase-history/manager-purchase-history.module')
      .then(module => module.ManagerPurchaseHistoryModule)},


  {
    path: 'report',
    loadChildren: () => import('./module/report/report.module').then(module => module.ReportModule)
  },

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
    loadChildren: () => import('./model/security/security.module').then(module => module.SecurityModule),
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


export class AppRoutingModule {
}

