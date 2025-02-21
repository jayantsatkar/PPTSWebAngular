import { Component, OnInit } from '@angular/core';
//import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
//import plugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.scss']
})
export class AllChartsComponent implements OnInit {
  isDarkMode: boolean = false;
  chart: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  renderLineMtbf(): void {
    // this.chart.destroy();
    let color;
    color = this.isDarkMode ? 'red' : '#9C9C9C';
    // this.chart = new Chart('lineChartMtbr', {
    //   type: 'line',
    //   data: {
    //     labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], //labels,
    //     datasets: [
    //       {
    //         label: 'OEE',
    //         data: [
    //           67.04, 70.0, 79.68, 52.73, 58.49, 72.99, 80.69, 95.95, 55.25,
    //           75.35,
    //         ],
    //         backgroundColor: '#EE8843',
    //         borderColor: '#EE8843',
    //         fill: false,
    //         tension: 0.4,
    //         pointBorderWidth: 5,
    //         //lineTension: 0,
    //         //radius: 5,
    //       },
    //       {
    //         label: 'Availability',
    //         data: [
    //           75.8, 90.0, 70.23, 80.0, 70.94, 80.18, 90.68, 80.0, 60.04, 99.06,
    //         ],
    //         backgroundColor: 'green',
    //         borderColor: 'green',
    //         fill: false,
    //         tension: 0.4,
    //         pointBorderWidth: 5,
    //         //lineTension: 0,
    //         //radius: 5,
    //       },
    //       {
    //         label: 'Performance',
    //         data: [
    //           80.8, 76.0, 93.23, 80.0, 70.94, 89.18, 94.68, 80.0, 75.04, 98.06,
    //         ],
    //         backgroundColor: 'purple',
    //         borderColor: 'purple',
    //         fill: false,
    //         tension: 0.4,
    //         pointBorderWidth: 5,
    //         //lineTension: 0,
    //         //radius: 5,
    //       },
    //       {
    //         label: 'Quantity',
    //         data: [
    //           57.8, 70.0, 90.23, 80.0, 72.94, 78.18, 54.68, 60.0, 50.04, 88.06,
    //         ],
    //         backgroundColor: 'lightgreen',
    //         borderColor: 'lightgreen',
    //         fill: false,
    //         tension: 0.4,
    //         pointBorderWidth: 5,
    //         //lineTension: 0,
    //         //radius: 5,
    //       },
    //       {
    //         label: 'Goal',
    //         data: [
    //           97.8, 80.0, 70.23, 90.0, 82.94, 98.18, 76.68, 60.0, 80.04, 97.06,
    //         ],
    //         backgroundColor: 'blue',
    //         borderColor: 'blue',
    //         fill: false,
    //         tension: 0.4,
    //         pointBorderWidth: 5,
    //         //lineTension: 0,
    //         //radius: 5,
    //       },
    //     ],
    //   },
    //   options: {
    //     indexAxis: 'x',
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: {
    //       y: {
    //         // grid: {
    //         //   color: '#454545',
    //         // },
    //         beginAtZero: true,
    //         ticks: {
    //           color: color,
    //           // Set specific percentage values on the y-axis
    //           stepSize: 25,
    //           callback: function (value) {
    //             if (
    //               value === 0 ||
    //               value === 25 ||
    //               value === 50 ||
    //               value === 75 ||
    //               value === 100
    //             ) {
    //               return value + '%';
    //             } else {
    //               return '';
    //             }
    //           },
    //         },
    //       },
    //       x: {
    //         // grid: {
    //         //   color: '#454545',
    //         // },
    //         ticks: {
    //           // font:{
    //           //   weight:'bold',
    //           // },
    //           color: color,
    //           maxRotation: 0,
    //           minRotation: 0,
    //         },
    //       },
    //     },
    //     plugins: {
    //       datalabels: {
    //         color: color, // Color of the text
    //         anchor: 'end', // Text anchor position
    //         align: 'end', // Text alignment
    //         formatter: (data: any, context: any) => {
    //           // Custom formatter function
    //           return data; // Display the value as it is
    //           // Call this function to draw a line
    //         },
    //       },
    //       legend: {
    //         position: 'bottom',
    //         labels: {
    //           color: color,
    //           font: {
    //             size: 12,
    //           },
    //         },
    //       },
    //       title: {
    //         display: true,
    //         text: 'Trend Over Time',
    //         color: color,
    //         fullSize: true,
    //         font: {
    //           family: 'aptos',
    //         },
    //       },
    //     },
    //   },
    // });
  }

}
