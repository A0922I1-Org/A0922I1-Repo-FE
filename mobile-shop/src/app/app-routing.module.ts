import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
<<<<<<< HEAD
      // Mọi người đặt part dẫn đến module ở đây
      { path: 'supplier',
        loadChildren: () => import('./module/supplier/supplier.module').then(module => module.SupplierModule)}

      ]

=======
      //Mọi người đặt part dẫn đến module ở đây
      ]
>>>>>>> main
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
