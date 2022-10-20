import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-linea',
  templateUrl: './grafica-linea.component.html',
  styleUrls: ['./grafica-linea.component.css'],
})
export class GraficaLineaComponent {
  public lineCharOptions: ChartOptions = {
    
  };

  public lineChartType: ChartType = 'line';
  public lineChartLabels: Label[] = ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s16','s17','s18','s19','s20',];
  public lineChartData: ChartDataSets[] = [
    {
      data: [
        0.28, 0.3, 0.3, 0.32, 0.31, 0.32, 0.32, 0.33, 0.4, 0.32, 0.32, 0.42,
        0.42, 0.39, 0.41, 0.39, 0.4, 0.38, 0.41, 0.4,
      ],
      label: 'Precio patata 2022 centimos',
    },
  ];
  constructor() {}
}
