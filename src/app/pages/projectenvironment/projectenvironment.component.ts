import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets} from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-projectenvironment',
  templateUrl: './projectenvironment.component.html',
  styleUrls: ['./projectenvironment.component.css']
})
export class ProjectenvironmentComponent {

  /* Project Environment Pie Chart */


  public environmentpieChartOptions: ChartOptions = {
    
    responsive: true,
    legend: {
      labels: {
        boxWidth:50,
        fontSize:40,
        padding:20,
  },
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        color:'white',
        font: {
          weight: 'bolder',
          size: 40
      },
        formatter: (value, ctx) => {
          const label = ctx.chart.data[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public environmentpieChartLabels: Label[] = ["Total Cost", "Previous Year Cost"];
  public environmentpieChartData: ChartDataSets[] = [{
            data:[28,72],
            hoverBorderWidth:20,
            hoverRadius:20,
  }];
  public environmentpieChartType: ChartType = 'pie';
  public environmentpieChartLegend = true;
   public environmentpieChartPlugins = [pluginDataLabels];
  public environmentpieChartColors = [
    {
      backgroundColor: [ "#2ecc71","#95a5a6"],
    },
  ];

/* Project Environment Pie Chart */


  constructor() { }

  ngOnInit(): void {
  }

}
