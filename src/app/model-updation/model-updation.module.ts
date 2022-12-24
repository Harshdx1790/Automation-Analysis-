import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelUpdationRoutingModule } from './model-updation-routing.module';
import { ModelUpdationComponent } from './model-updation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    ModelUpdationComponent,
    
    
  ],
  imports: [
    CommonModule,
    ModelUpdationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ModelUpdationModule { }
