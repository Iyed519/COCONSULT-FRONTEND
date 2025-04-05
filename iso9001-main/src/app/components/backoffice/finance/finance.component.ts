import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  assets: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findAllAssets().subscribe((data) => {
      this.assets = data;
    });
  }

}
