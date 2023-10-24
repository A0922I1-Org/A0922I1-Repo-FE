import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import {CreateSupplierComponent} from './create-supplier/create-supplier.component';
import {UpdateSupplierComponent} from './update-supplier/update-supplier.component';


const routes: Routes = [
  {
    path: 'supplier',
    component: SupplierListComponent
  },
  {
    path: 'create',
    component: CreateSupplierComponent
  },
  {
    path: 'edit/:id',
    component: UpdateSupplierComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
