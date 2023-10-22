

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import {ProductSelectModalComponent} from './product-select-modal/product-select-modal.component';
import {ProductListComponent} from "./product-list/product-list.component";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductSelectModalComponent
  ],
  exports: [
    ProductSelectModalComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }

