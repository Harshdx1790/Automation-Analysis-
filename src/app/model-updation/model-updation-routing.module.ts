import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ModelUpdationComponent } from './model-updation.component';
const routes: Routes = [
    {path: '',component: ModelUpdationComponent},
    
]; 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelUpdationRoutingModule { }