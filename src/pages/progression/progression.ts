import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-progression',
  templateUrl: 'progression.html'
})
export class ProgressionPage {

@ViewChild('barCanvas') barCanvas;
@ViewChild('doughnutCanvas') doughnutCanvas;
@ViewChild('lineCanvas') lineCanvas;

barChart: any;
doughnutChart: any;
lineChart: any;

constructor(public navCtrl: NavController) {

}

ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
            labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
            datasets: [{
                label: 'Nombre de pas',
                data: [7000, 8125, 8250, 9000, 8430, 11200, 5000],
                backgroundColor: [
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                ],
                borderColor: [
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: ["S-3", "S-2", "S-1", "S"],
            datasets: [{
                label: 'Poids à la semaine (kg)',
                data: [74.5, 74.2, 73.9, 74],
                backgroundColor: [
                    'rgba(255,123,83,0.678)',
                    'rgba(255,123,83,0.675)',
                    'rgba(255,123,83,0.675)',
                    'rgba(255,123,83,0.675)'
                ],
                borderColor: [
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)',
                    'rgba(255,123,83,1)'
                ],
                borderWidth: 2
            }]
        }

    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'radar',
        data: {
          labels: ["Milan", "Pierre-Alexandre", "Hugo", "Valentin", "David"],
          datasets: [{
            label: 'Distances parcourues sur 7 jours (km)',
            data: [, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255,123,83,0.675)',
            ],
            borderColor: [
                'rgba(255,123,83,1)',
            ],
            borderWidth: 2
          }]
        }

    });

}

}
