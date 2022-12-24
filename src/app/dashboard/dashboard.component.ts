import {
  Component, OnInit, ViewEncapsulation, Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  columnsList = ['Q1', 'Q2', 'Q3', 'Q4'];
  

  private w: number = 500;
  private h: number = 500;
  private margin = { top: 10, right: 10, bottom: 20, left: 40 };
  private width = this.w - this.margin.left - this.margin.right;
  private height = this.h - this.margin.top - this.margin.bottom;
  private x0: any;
  private x1: any;
  private y: any;
  private color: any = ['#00D7D2', '#313c53', '#7BD500'];
  private barNames: any;
  keys: any;
  private svg: any;
  private chart: any;
  private xAxis: any;
  private yAxis: any;
  private legend: any;
  private tooltip: any;
  private dataChar :any
  constructor(private container: ElementRef,private service : DashboardServiceService) { }

  
  ngOnInit() {
    
    let getQuarter = (d: any) => {
      d = new Date(d)
      let quarter = 0
      var month = Math.floor(d.getMonth() )+1 ;
      if (month < 4)
        quarter = 1;
      else if (month < 7)
        quarter = 2;
      else if (month < 10)
        quarter = 3;
      else if (month < 13)
        quarter = 4;
      return quarter
    }
    let dummyData:any = []
  
    this.service.getData().subscribe(
      (data:any) => {
        console.log(data);
        dummyData = data;
        console.log(dummyData)
     
   
    let filterModal:any = []
     dummyData.map((item:any)=>{
      if(filterModal.includes(item.Modal)) {

      } else {
        filterModal.push(item.Modal)
      } 
      
    })
    let quarter = ["Q1","Q2","Q3","Q4"]
    let mainData:any = []
    let maxModalUnit= 0
    quarter.forEach((index:any)=>{
      let chartMap:any = {}
      filterModal.forEach((modal:any)=>{
        let modalUnits = 0
        dummyData.forEach((key:any)=>{
        if(key.Quarter==index){
          chartMap["Time"] = index
          if(key.Modal==modal){
           
            modalUnits += key.Unit
           
          }
        }
      })
      if(modalUnits>maxModalUnit){
        maxModalUnit= modalUnits
      }
      chartMap[modal] = modalUnits
    })
      mainData.push(chartMap)
    })
    
    let margin = { top: 10, right: 80, bottom: 20, left: 50 },
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

      var svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

     let subgroups: any = Object.keys(mainData[0])
     let groups: any = d3.map(mainData, (d: any) => { return (d.Time) })
    console.log(subgroups)
    let size = 12
   
      var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding(0.2)
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0));

     var y = d3.scaleLinear()
      .domain([0, maxModalUnit])
      .range([height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

     const xSubgroup = d3.scaleBand()
      .domain(subgroups)
      .range([0, x.bandwidth()])
      .padding(0.05)

     const color = d3.scaleOrdinal()
      .domain(subgroups)
      .range(['#e41a1c', '#377eb8', '#4daf4a'])

     svg.append("g")
      .selectAll("g")
      .data(mainData)
      .enter()
      .append("g")
      .attr("transform", (d: any) => { return "translate(" + x(d.Time) + ",0)"; })
      .selectAll("rect")
      .data((d: any) => { return subgroups.map((key: any) => { return { key: key, value: d[key] }; }); })
      .enter().append("rect")
      .attr("x", (d: any) => { return xSubgroup(d.key) || "" })
      .attr("y", (d: any) => { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", (d: any) => { return height - y(d.value); })
      .attr("fill", ((d: any) => {
        if (d.key == "XUV") {
          return "#ef9b20"
        } else if (d.key == "Sedan") {
          return "#377eb8"
        }
        else if (d.key == "HatchBack") {
          return "#4daf4a"
        }
        return ""
      }));
      svg.selectAll("mydots")
      .data(filterModal)
  .enter()
  .append("circle")
    .attr("cx", 470)
    .attr("cy", function(d,i){ return 100 + i*25}) 
    .attr("r", 6)
    .style("fill",  ((d: any) => {
     
      if (d == "XUV") {
        return "#ef9b20"
      } else if (d == "Sedan") {
        return "#377eb8"
      }
      else if (d == "HatchBack") {
        return "#4daf4a"
      }
      return ""
    }));
    svg.selectAll("mylabels")
  .data(filterModal)
  .enter()
  .append("text")
    .attr("x", 470 + size*1.2)
    .attr("y", function(d,i){ return 100 + i*(size+10) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .text((d:any)=>{ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
  },
  )  
  }
  
}