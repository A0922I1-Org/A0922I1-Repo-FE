import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaleManagerComponent} from "./module/output-invoice/sale-manager/sale-manager.component";



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'sale-manager',
        component: SaleManagerComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
