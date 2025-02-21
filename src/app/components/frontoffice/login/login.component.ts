import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../../../services/keycloak/keycloak.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private keycloakservice: KeycloakService) {
  }

  async ngOnInit() {
    await this.keycloakservice.init();
    await this.keycloakservice.login();
  }
  login(): void {
    this.keycloakservice.login();

  }
}
