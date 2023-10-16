import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ReportModule { }
