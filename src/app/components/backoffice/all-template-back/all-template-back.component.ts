import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as $ from 'jquery';
import 'jquery-circle-progress';

declare global {
  interface JQuery {
    circleProgress(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-all-template-back',
  templateUrl: './all-template-back.component.html',
  styleUrls: ['./all-template-back.component.css']
})
export class AllTemplateBackComponent implements OnInit, AfterViewInit {
  currentTime: string = '';
  currentView: string = 'dashboard';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    console.log("🔄 Initialisation après le rendu du composant...");

    setTimeout(() => {
      this.createUsersActivityChart();
      this.createVisitorsChart();
    }, 500); // Attendre 500ms pour s'assurer que les éléments existent

    setTimeout(() => {
      $(".circle-progress").each(function () {
        let value = parseFloat($(this).data("value")) / 100;
        let color = $(this).hasClass("circle-progress-primary") ? "#3a57e8" : "#4bc7d2";

        console.log("circleProgress() appliqué sur :", this, "Valeur :", value);

        ($(this) as any).circleProgress({
          value: value,
          size: 80,
          fill: { color: color },
          thickness: 10,
          startAngle: -Math.PI / 2
        });
      });
    }, 1000);
    
    console.log("🌑 Activation du mode sombre...");

    if (localStorage.getItem("dark-mode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  }

  setView(view: string) {
    this.currentView = view;
  }

  createUsersActivityChart(): void {
    setTimeout(() => {
      const ctx = document.getElementById('usersActivityChart') as HTMLCanvasElement | null;
      if (!ctx) {
        console.error("❌ Erreur : L'élément #usersActivityChart est introuvable !");
        return;
      }

      new Chart(ctx.getContext('2d')!, {
        type: 'bar',
        data: {
          labels: ['Oct 10', 'Oct 12', 'Oct 14', 'Oct 16'],
          datasets: [{
            label: 'Users',
            data: [30, 60, 90, 60],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }, 500);
  }

  createVisitorsChart(): void {
    setTimeout(() => {
      const ctx = document.getElementById('visitorsChart') as HTMLCanvasElement | null;
      if (!ctx) {
        console.error("❌ Erreur : L'élément #visitorsChart est introuvable !");
        return;
      }

      new Chart(ctx.getContext('2d')!, {
        type: 'doughnut',
        data: {
          labels: ['Registered', 'Not Registered'],
          datasets: [{
            label: 'Visitors',
            data: [311, 64],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    }, 500);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
