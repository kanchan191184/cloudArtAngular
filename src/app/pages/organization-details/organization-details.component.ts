import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent{


  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display:false
  },
 scales: {
  xAxes: [{
    stacked:true,
    ticks: {
      beginAtZero: true,
      fontSize:20
  },
    gridLines: {
      display: true,
      color:'white'
    },
    scaleLabel: {
     display:true,
     labelString:"Organization Name",
     fontSize:20,
     padding:20
   }
  }],
  yAxes: [{
    stacked:true,
    ticks: {
      beginAtZero: true,
      fontSize:20
  },
    gridLines: {
      display: true,
      color:'white'
    },
    scaleLabel: {
      display:true,
      labelString:"In Lakhs",
      fontSize:20,
     padding:10
    }
  }]
}

  };

  barChartLabels: Label[] = ["Amazon", "Amdocs", "MS", "Railways", "Sail","Amazon", "Amdocs", "MS", "Railways", "Sail"];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  public barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      label:'Cost',
      data: [20, 25, 20, 17, 30,20, 25, 20, 17, 30],
      backgroundColor: ["#F7D96D", "#F1BE08", "#83F3E7", "#C1DC79", "#F0BFF6","#F7D96D", "#F1BE08", "#83F3E7", "#C1DC79", "#F0BFF6"],
      barThickness: 40,
      minBarLength: 2,
      datalabels:{
        display:true,
       color:'white',
       font: {
         weight: 'bolder',
         size: 18
       }
     },
    },
    {
      label:'Consumption',
      data:[2, 2, 2, 1, 3,2, 5, 2, 1, 3],
      datalabels:{display:false},
      barThickness: 40,
      minBarLength: 2,
      backgroundColor:["#93760D", "#B48E05", "#55A89F", "#627B1E", "#741E7F","#93760D", "#B48E05", "#55A89F", "#627B1E", "#741E7F"]
      
    }
  ];

  constructor() { }

  ngOnInit() {}

}
