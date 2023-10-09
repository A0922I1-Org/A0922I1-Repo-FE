import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [SupplierListComponent],
    exports: [
        SupplierListComponent
    ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule
  ]
})
export class SupplierModule { }
