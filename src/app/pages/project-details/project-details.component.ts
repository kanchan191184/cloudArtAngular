import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent{

    barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
             display:false
         },
        scales: {
         xAxes: [{
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
            labelString:"Projects",
            fontSize:24,
            padding:20
          }
         }],
         yAxes: [{
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
             fontSize:24,
            padding:10
           }
         }]
       }

  };

  barChartLabels: Label[] = ["Pr1", "Pr2", "Pr3","Pr4","Pr5","Pr6"];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  public barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [20, 25, 20,30,50,27],
      backgroundColor: ["#690E16","#0E6934","#0963C8","#690E16","#0E6934","#0963C8"],
      barThickness: 40,
      minBarLength: 2,
      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
