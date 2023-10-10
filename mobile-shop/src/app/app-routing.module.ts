import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      // Mọi người đặt part dẫn đến module ở đây
      {
        path: 'product/list',
        loadChildren: () => import('./module/product/product.module').then(module => module.ProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
