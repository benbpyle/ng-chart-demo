import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  isDataAvailable = false;

  public lineChartData: ChartDataSets[] = [];

  public lineChartLabels: Label[]; // = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: false,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    return this.http.get('http://localhost:3000').subscribe((res: MockData) => {
        // console.log(data);
        this.lineChartLabels = res.labels;
        this.lineChartData.push({ data: res.data, label: 'PPS' });
        this.isDataAvailable = true;
    });

  }

}
