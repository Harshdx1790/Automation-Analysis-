import { Component } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { ModalServiceService } from './modal-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
@Component({
  selector: 'app-model-updation',
  templateUrl: './model-updation.component.html',
  styleUrls: ['./model-updation.component.css']
})
export class ModelUpdationComponent {
  checkoutForm = this.formBuilder.group({
    country: '',
    Modal: '',
    Vehicle_Type: '',
    Unit: ''
  });
 
  constructor( private formBuilder: FormBuilder,private service : ModalServiceService,public dialog: MatDialog){ }
   getQuarter = (d: any) => {
    d = new Date(d)
    
    let quarter = ''
    var month = Math.floor(d.getMonth() )+1 ;
    if (month < 4)
      quarter = 'Q1';
    else if (month < 7)
      quarter = 'Q2';
    else if (month < 10)
      quarter = 'Q3';
    else if (month < 13)
      quarter = 'Q4';
    return quarter
  }
  onSubmit(): void {
    // Process checkout data here
    let createData:any = this.checkoutForm.value 
    createData["date"] = "2022-11-11 04:35:48";
    createData["Quarter"] = this.getQuarter(new Date())
    createData["ID"] = 101
    console.log(createData)
    this.service.createProduct(createData).subscribe((response) => {
      console.log(response)
     
      // this.service.getData().subscribe((data:any)=>{
      //   console.log(data)
      // });
    });
    this.openDialog('500ms', '500ms')
    this.checkoutForm.reset();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
}
@Component({
  selector: 'DialogAnimationsExampleDialog',
  templateUrl: 'dialog.html',
 
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
