import { Component } from '@angular/core';
import ApexCharts from 'apexcharts';
import { ApexGrid, ApexTheme, NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,

} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  grid:ApexGrid;
  them:ApexTheme;

};

@Component({
  selector: 'app-timeperformance',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './timeperformance.component.html',
  styleUrl: './timeperformance.component.css'
})
export class TimeperformanceComponent {

  public chartOptions: Partial<ChartOptions>;

  public radialOptions: Partial<ChartOptions>;

  selected: string = '<80%';

  setFilter(filter: string): void {
    this.selected = filter;
  }
  public circleOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    colors: string[];
    labels: string[];
  };

  constructor() {
    this.circleOptions = {
      series: [75], // Percentage value
      chart: {
        type: 'radialBar',
        height: 100,
        width:100
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
            },
            value: {
              show: true,
              fontSize: '20px',
              color: '#000000',
            },
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ['#1e90ff'], // Customize the color of the chart
      labels: [''], // Label inside the chart
    };

   this.radialOptions= {
    series:[
    {
      type:'radialBar',
    data:[12]
    }
    ],
    grid:{

      show:true,
    },
    chart: {
      background:"transparent",
      height: 100,
      width:120,
      type: "radialBar",

      toolbar:{
show:false
},
    }
  };


    this.chartOptions = {
      series: [
        {

          data: [10, 21, 30, 35, 51]
        }
      ],

      grid:{
        show:false,
        xaxis:{
          lines:{
            show:false
          }
        },
        yaxis: {
          
          lines: {
              show: false
          }
      },
      },
      chart: {
        background: "transparent",
        height: 180,
        type: "bar",
        toolbar:{
  show:false
  },
      },
      xaxis: {
        categories: ["1", "2",  "3",  "4",  "5"],

      },
    };
  }

}



