import { Component } from '@angular/core';

declare var bootstrap: any; 

@Component({
  selector: 'app-all-template-front',
  templateUrl: './all-template-front.component.html',
  styleUrls: ['./all-template-front.component.css']
})
export class AllTemplateFrontComponent {
  ngOnInit(): void {
    this.setupNavbarShrink();
  }

  ngAfterViewInit(): void {
    this.setupScrollSpy();
    this.setupResponsiveNavbar();
  }

  // Fonction pour rétracter la navbar au scroll
  private setupNavbarShrink(): void {
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector('#mainNav') as HTMLElement | null;
      if (navbarCollapsible) {
        if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink');
        } else {
          navbarCollapsible.classList.add('navbar-shrink');
        }
      }
    };

    // Appliquer au chargement de la page
    navbarShrink();

    // Appliquer au scroll
    document.addEventListener('scroll', navbarShrink);
  }

  // Fonction pour activer Bootstrap ScrollSpy
  private setupScrollSpy(): void {
    const mainNav = document.querySelector('#mainNav') as HTMLElement | null;
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }
  }

  // Fonction pour gérer le menu responsive
  private setupResponsiveNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement | null;
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener('click', () => {
        if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  }
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendMessage() {
    console.log("Message Sent:", this.contact);
    alert("Your message has been sent successfully!");
    // Ajoute ici un appel HTTP si tu veux envoyer les données au backend
  }
}