import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RuleService } from '../Services/rule.service';
import { rule } from '../Services/rule';
import {chart} from 'node_modules/chart.js';
import Chart from 'node_modules/chart.js/dist/Chart.js';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  
  constructor(private ruleService1: RuleService,
    private router: Router) { }
  public isCollapsed = true;
  rules: Array<any>;
  rulex: Observable<rule[]>;
  ruley: Observable<rule[]>;
  rulez: Observable<rule[]>;
  clickedEvent = false;
  connect : any;
 
  getx() {
    this.clickedEvent = true;
    this.ruleService1.getx().subscribe(data => {
    this.rulex = data
    console.log('geting x (number of whrite)...');
      console.log(this.rulex)
      
    });
    
    this.clickedEvent = true;
    this.ruleService1.gety().subscribe(data => {
    this.ruley = data
    console.log('geting y (number of delete)...');
      console.log(this.ruley)
      
    });
  
      
    this.clickedEvent = true;
    this.ruleService1.getz().subscribe(data => {
    this.rulez= data
    console.log('geting z (number of update )...');
      console.log(this.rulez)
      
    });
    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            
            '#D5187F',
            '#4acccd',
            '#fcc468',
            
          ],
      

          borderWidth: 0,
          data: [this.rulex, this.ruley, this.rulez ]
        }]
      },









      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });


  }




  



  
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  ngOnInit() {

    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });

    

   
  }
}


