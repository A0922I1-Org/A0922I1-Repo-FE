import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'api/managerPurchaseHistory', loadChildren: () => import('./module/manager-purchase-history/manager-purchase-history.module')
      .then(module => module.ManagerPurchaseHistoryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
