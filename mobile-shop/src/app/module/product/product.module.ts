

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import {ProductSelectModalComponent} from './product-select-modal/product-select-modal.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }

