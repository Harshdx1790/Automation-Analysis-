import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'update',
    loadChildren:() => import('./model-updation/model-updation.module').then(m=> m.ModelUpdationModule)
  },
  {
    path: 'AutomobileModule',
    loadChildren:() => import('./automobile-model/automobile-model.module').then(m=> m.AutomobileModelModule)
  },
  {
    path: 'dashboardModule',
    loadChildren:() => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path:'',
    loadChildren:() => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
