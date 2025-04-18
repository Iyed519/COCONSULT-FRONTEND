import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent {
  message: string='';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
      private router: Router,
      private authService: AuthenticationService
  ) {

  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = 'Your account has been activated successfully.\nPlease proceed to Login.';
        this.submitted = true;
        this.isOkay = true;
      },
      error:() => {
        this.message = 'Your Token has been expired or it is not valid.\nPlease Try Again.';
        this.submitted = true;
        this.isOkay = false;
      }
    });

  }
}
