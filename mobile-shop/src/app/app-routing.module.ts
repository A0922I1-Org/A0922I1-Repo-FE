import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
      {
        path: 'input-invoice',
        loadChildren: () => import('./module/input-invoice-detail/input-invoice-detail.module').then(m => m.InputInvoiceDetailModule)
      },
      {
        path: 'supplier',
        loadChildren: () => import('./module/supplier/supplier.module').then(module => module.SupplierModule)
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
