import { NgClass, NgForOf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { ApexGrid, ApexTheme, NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
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
  selector: 'app-groundtime',
  standalone: true,
  imports: [NgClass,NgForOf,  NgApexchartsModule,
  ],
  templateUrl: './groundtime.component.html',
  styleUrl: './groundtime.component.css'
})
export class GroundtimeComponent {
 // DOM Data

// @ViewChild("chart") chart?: ChartComponent;

}
