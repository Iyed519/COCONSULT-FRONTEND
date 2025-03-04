import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceAndAccountingProcessRestControllerService } from 'src/app/services/services/finance-and-accounting-process-rest-controller.service';
import { Liability } from 'src/app/services/models/liability';

@Component({
  selector: 'app-liability-list',
  templateUrl: './liability-list.component.html',
  styleUrls: ['./liability-list.component.css']
})
export class LiabilityListComponent implements OnInit {
  liabilities: Liability[] = [];

  constructor(private liabilityService: FinanceAndAccountingProcessRestControllerService,    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchLiabilities();
  }
// Fetch all offers from the backend
fetchLiabilities(): void {
  this.liabilityService.findAllLiabilities().subscribe(
    (data: any) => {
      if (data instanceof Blob) {
        this.parseBlobToJson(data);
      } else {
        this.liabilities = data;
      }
    },
    (error) => {
      console.error('Error fetching liabilities', error);
    }
  );
}

  // Handle Blob response and parse it to JSON
  private parseBlobToJson(blob: Blob): void {
    const reader = new FileReader();

    reader.onloadend = () => {
      try {
        const json = JSON.parse(reader.result as string);
        this.liabilities = json; // Now the offers will be populated
      } catch (error) {
        console.error('Failed to parse Blob data:', error);
      }
    };

    reader.readAsText(blob); // Read the Blob as text to parse it
  }
  deleteLiability(id: number): void {
    if (confirm('Are you sure you want to delete this liability?')) {
      this.liabilityService.deleteLiabilityById({id}).subscribe({
        next: () => this.fetchLiabilities(), // Refresh list after deletion
        error: (err) => console.error('Error deleting liability', err)
      });
    }
  }

  editLiability(id: number): void {
    this.router.navigate(['/liability-form', id]);
  }
  
}