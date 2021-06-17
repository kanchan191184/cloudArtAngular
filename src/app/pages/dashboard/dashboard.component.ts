import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets} from 'chart.js';
import { Label, Color} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent{


  /* Total Cost Pie Chart */


  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        boxWidth:20,
  },
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        color:'white',
        font: {
          weight: 'bolder',
          size: 14
      },
        formatter: (value, ctx) => {
          const label = ctx.chart.data[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ["Total Cost", "Previous Year Cost"];
  public pieChartData: number[] = [28,72];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
   public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [ "#2ecc71","#95a5a6"],
    },
  ];

/* Total Cost Pie Chart */

  /* Organization Bar Chart */

  public barChartOptions: ChartOptions = {
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
    // scaleLabel: {
    //   display:true,
    //   labelString:"Organization Name",
    //   fontSize:20,
    //  padding:10
    // }
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
    // scaleLabel: {
    //   display:true,
    //   labelString:"In Lakhs",
    //   fontSize:20,
    //  padding:10
    // }
  }]
}

  };

  public barChartLabels: Label[] = ["Amazon", "Amdocs", "MS", "Railways", "Sail"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [20, 25, 20, 17, 30],
      backgroundColor: ["#F7D96D", "#F1BE08", "#83F3E7", "#C1DC79", "#7A958E"],
      barThickness: 30,
      minBarLength: 2,
      datalabels:{
        color:'white',
        font: {
          weight: 'bolder',
          size: 14
      }
      },
     
    }
  ];

  /* Organization Bar Chart */

  /* Cloud Based Cost Pie Chart */

    
  public cloudpieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        boxWidth:20
  },
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        color:'white',
        font: {
          weight: 'bolder',
          size: 14
      },
        formatter: (value, ctx) => {
          const label = ctx.chart.data[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public cloudpieChartLabels: Label[] = ["Azure", "GCP", "AWS"];
  public cloudpieChartData: number[] = [10,30,60];
  public cloudpieChartType: ChartType = 'pie';
  public cloudpieChartLegend = true;
   public cloudpieChartPlugins = [pluginDataLabels];
  public cloudpieChartColors = [
    {
      backgroundColor: ["#ED6619","#72EBF5","#CBD8A9"],
    },
  ];

   /* Cloud Based Cost Pie Chart */


   /* Consumption Trend Line Chart */

   lineChartData: ChartDataSets[] = [
    {
       data: [20, 40, 30, 60, 20],
      label: 'Cost' },
  ];
  lineChartLabels: Label[] = ['VM', 'Storage', 'IP Address', 'Balancer', 'Chart'];
  
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartOptions = {
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
         color:'white',
       },
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
       
     }]
    },
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor:'#1BABB4',
      backgroundColor:'#B3F0F5',
      // lineTension:0,
      borderWidth: 5
    },
  ];

 


  /* Consumption Trend Line Chart */   


  /* Project Doughnut Chart */

  public projectdoughnutChartOptions: ChartOptions = {
    legend:{
      labels: {
        boxWidth:20
  },
      position: 'right'
    },

    plugins: {
      datalabels: {
        color:'white',
        font: {
          weight: 'bold',
          size: 12
        }
      }
    },
    responsive: true
  };
  public projectdoughnutChartLabels: Label[] = ["Amazon", "Amdocs", "MS", "Railways", "Sail"];
  public projectdoughnutChartData: Number[] = [20, 40, 30, 60, 20];
  public projectdoughnutChartType: ChartType = 'doughnut';
  public projectdoughnutChartColors = [
    {
      backgroundColor: ["#D9D8D9", "#F0BFF6", "#D3603B", "#5E89EE", "#F2B12F"],
    },
  ];


  /* Project Doughnut Chart */

  /* Resources Doughnut Chart */

  
  public resourcesdoughnutChartOptions: ChartOptions = {
    legend:{
      labels: {
        boxWidth:20
  },
      position: 'right'
    },

    plugins: {
      datalabels: {
        color:'white',
        font: {
          weight: 'bold',
          size: 12
        }
      }
    },
    responsive: true
  };
  public resourcesdoughnutChartLabels: Label[] = ["Amazon", "Amdocs", "MS", "Railways", "Sail"];
  public resourcesdoughnutChartData: Number[] = [20, 40, 30, 60, 20];
  public resourcesdoughnutChartType: ChartType = 'doughnut';
  public resourcesdoughnutChartColors = [
    {
      backgroundColor: ["#D9D8D9", "#F0BFF6", "#D3603B", "#5E89EE", "#F2B12F"],
    },
  ];


  /* Resources Doughnut Chart */
  constructor() { }

  ngOnInit() {
  }
}