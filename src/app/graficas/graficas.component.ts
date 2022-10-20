import { Component} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent  {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Almeria', 'Athletic', 'At. Madrid', 'Barcelona', 'Betis', 'Cadiz', 'Celta', 'Elche','Espanyol','Getafe','Girona','Mallorca'
  ,'Osasuna','Rayo','Real Madrid','Real Sociedad','Sevilla','Valencia','Valladolid','Villareal'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [ 13, 25, 9, 12, 14, 20, 14,19,21,16,23,13,22,19,8,24,10,12,20,16 ], label: 'Jugadores españoles por equipo', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red'},
  ];

  constructor() { }


}
