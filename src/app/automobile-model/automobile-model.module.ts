import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomobileModelRoutingModule } from './automobile-model-routing.module';
import { AutomobileComponent } from './automobile.component';
import { MatTableModule } from '@angular/material/table'  



@NgModule({
  declarations: [
    AutomobileComponent,
    
  ],
  imports: [
    CommonModule,
    AutomobileModelRoutingModule,
    MatTableModule
  ],
  providers: [],
})
export class AutomobileModelModule { }
