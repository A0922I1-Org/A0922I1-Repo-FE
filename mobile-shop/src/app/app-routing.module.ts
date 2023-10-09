import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'report',
    loadChildren:() =>import('./module/report/report.module').then(module =>module.ReportModule)
    // children: [
    //   //Mọi người đặt part dẫn đến module ở đây
    //   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
