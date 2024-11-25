import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeperformanceComponent } from './Components/timeperformance/timeperformance.component';
import { GroundtimeComponent } from './Components/groundtime/groundtime.component';
import { RunwayComponent } from './Components/runway/runway.component';
import { BaggageComponent } from './Components/baggage/baggage.component';
import { TsatComponent } from './Components/tsat/tsat.component';
import { TaxiComponent } from './Components/taxi/taxi.component';
import { WeatherComponent } from './Components/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TimeperformanceComponent,GroundtimeComponent,RunwayComponent,BaggageComponent,TsatComponent,TaxiComponent,WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
