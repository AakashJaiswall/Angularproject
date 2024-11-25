import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexDataLabels,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-baggage',
  standalone: true,
  imports: [  NgApexchartsModule],
  templateUrl: './baggage.component.html',
  styleUrl: './baggage.component.css'
})
export class BaggageComponent {
 selected: string = '<80%';

  setFilter(filter: string): void {
    this.selected = filter;
  }
  // public chartOptions: {
  //   series: ApexNonAxisChartSeries;
  //   chart: ApexChart;
  //   plotOptions: ApexPlotOptions;
  //   dataLabels: ApexDataLabels;
  //   colors: string[];
  //   labels: string[];
  // };

  constructor() {
    // this.circleOptions = {
    //   series: [75], // Percentage value
    //   chart: {
    //     type: 'radialBar',
    //     height: 350,
    //   },
    //   plotOptions: {
    //     radialBar: {
    //       hollow: {
    //         size: '70%',
    //       },
    //       dataLabels: {
    //         show: true,
    //         name: {
    //           show: true,
    //           fontSize: '16px',
    //         },
    //         value: {
    //           show: true,
    //           fontSize: '20px',
    //           color: '#000000',
    //         },
    //       },
    //     },
    //   },
    //   dataLabels: {
    //     enabled: true,
    //   },
    //   colors: ['#1e90ff'], // Customize the color of the chart
    //   labels: ['Progress'], // Label inside the chart
    // };
  }
}
