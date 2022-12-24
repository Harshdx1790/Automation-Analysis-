import { Component, ChangeDetectorRef,    ChangeDetectionStrategy} from '@angular/core';
import { AutomobileServiceService } from './automobile-service.service';
export interface PeriodicElement {
  ID:number;
  country: string;
  Modal: string;
  Vehicle_Type: string;
  Unit: number;
  date: Date;
  Quarter: string;
}

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AutomobileComponent {
  constructor(private service: AutomobileServiceService,private cd: ChangeDetectorRef) { }
  displayedColumns: string[] = [];
  // dataSource = ELEMENT_DATA;
  data: any = [];
  // constructor(private service: SharedServiceService) { }
  // console.log(this.service.getJsonData())
   ngOnInit(){
   
    this.service.getData().subscribe(
      (results) => {
        console.log(results);
        this.data = results;
        console.log(this.data)
        this.displayedColumns = Object.keys(this.data[0])
        this.cd.detectChanges();
      },
    )
   
  
   }

}
