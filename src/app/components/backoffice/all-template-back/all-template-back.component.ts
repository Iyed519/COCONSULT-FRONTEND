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


export class AllTemplateBackComponent implements AfterViewInit{
  currentTime: string = '';
  currentView: string = 'dashboard';
  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    Chart.register(...registerables); 
    this.createUsersActivityChart();
    this.createVisitorsChart();
   
  }
  ngAfterViewInit(): void {
    console.log("Initialisation des cercles après chargement complet...");

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
    }, 1000); // Attendre 1 seconde pour garantir le chargement complet
    console.log("Activation du mode sombre...");

    // Vérifier si le mode sombre était activé avant le rafraîchissement
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    document.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        if (!target) return;

        const btn = target.closest('.btn[data-setting]') as HTMLElement | null;
        if (btn) {
            let setting = btn.dataset['setting']?.trim();
            console.log("Bouton cliqué avec data-setting :", `"${setting}"`);

            if (setting === "color-mode") {
                console.log("✅ Changement du mode de couleur !");
                document.body.classList.toggle("dark-mode");

                // Sauvegarder l'état dans localStorage
                if (document.body.classList.contains("dark-mode")) {
                    localStorage.setItem("dark-mode", "enabled");
                } else {
                    localStorage.removeItem("dark-mode");
                }
            }
        }
    });}


    
  setView(view: string) {
    this.currentView = view;
  }
  createUsersActivityChart(): void {
    const ctx = document.getElementById('usersActivityChart') as HTMLCanvasElement;
    new Chart(ctx, {
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
  }

  createVisitorsChart(): void {
    const ctx = document.getElementById('visitorsChart') as HTMLCanvasElement;
    new Chart(ctx, {
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
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
  
  
    
    
  
