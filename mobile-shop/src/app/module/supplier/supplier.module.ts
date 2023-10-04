import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDeleteComponent } from './supplier-delete/supplier-delete.component';


@NgModule({
    declarations: [SupplierListComponent, SupplierDeleteComponent],
    exports: [
        SupplierListComponent
    ],
    imports: [
        CommonModule,
        SupplierRoutingModule
    ]
})
export class SupplierModule { }
