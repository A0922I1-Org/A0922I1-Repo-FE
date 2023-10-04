import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'input-invoice',
        loadChildren: () => import('./input-invoice-detail/input-invoice-detail.module').then(m => m.InputInvoiceDetailModule)
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
