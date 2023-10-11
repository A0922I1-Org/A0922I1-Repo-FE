import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {SupplierModule} from './module/supplier/supplier.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
=======
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent
  ],
<<<<<<< HEAD
    imports: [
        BrowserModule,
        AppRoutingModule,
        SupplierModule,
      FormsModule,
       HttpClientModule
    ],
=======
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
>>>>>>> main
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
