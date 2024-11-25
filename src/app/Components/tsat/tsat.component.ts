import { Component } from '@angular/core';
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


export type BoxOption = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};
@Component({
  selector: 'app-tsat',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './tsat.component.html',
  styleUrl: './tsat.component.css'
})
export class TsatComponent {

  selected: string = '<80%';

  setFilter(filter: string): void {
    this.selected = filter;
  }
  public circleOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
    fill: ApexFill;

  };

  constructor() {
 
    this.circleOptions = {
      series: [75],
      chart: {
        height: 100,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "50%",
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "",
            strokeWidth: "106%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 0,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: false,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "19vmax"
            },
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "royalblue",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      labels: [""]
    };
  }
}
