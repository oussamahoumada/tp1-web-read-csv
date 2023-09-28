import { Chart } from 'chart.js/auto';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.css']
})
export class ChartDialogComponent implements OnInit{
  public arr: any = [];
  public max: number = 0;
  public values: any = [];
  public labels: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.arr = this.data.sort((a: any, b: any) => a.count > b.count ? -1 : 1);
    this.arr.slice(0, 7).forEach((element: any) => {
      this.values.push(element.count);
      this.labels.push(element.libelle);
      if (element.count > this.max) this.max = element.count;
    });
  }

  ngOnInit() {
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: '# Player per club',
          data: [...this.values, (this.max + 2)],
        }]
      }
    });
  }
}
