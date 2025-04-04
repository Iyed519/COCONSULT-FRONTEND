import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../../../services/keycloak/keycloak.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    await this.keycloakService.init();
    await this.keycloakService.login();
  }
  login(): void {
    this.keycloakService.login();

  }
}
