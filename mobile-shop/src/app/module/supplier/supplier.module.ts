import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';


@NgModule({
  declarations: [CreateSupplierComponent, UpdateSupplierComponent],
  exports: [
    CreateSupplierComponent,
    UpdateSupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ReactiveFormsModule
  ]
})
export class SupplierModule { }
