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
import { win32 } from 'path/posix';
import { share } from 'rxjs';


export type BoxOption = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

export type bo1={
  series: ApexAxisChartSeries;
  chart: ApexChart;
}
@Component({
  selector: 'app-runway',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './runway.component.html',
  styleUrl: './runway.component.css'
})
export class RunwayComponent {;
  constructor() {
    
  }
}
