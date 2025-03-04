import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceAndAccountingProcessRestControllerService } from 'src/app/services/services/finance-and-accounting-process-rest-controller.service';
import { Liability } from 'src/app/services/models/liability';

@Component({
  selector: 'app-liability-form',
  templateUrl: './liability-form.component.html',
  styleUrls: ['./liability-form.component.css']
})
export class LiabilityFormComponent implements OnInit {
  liability: Liability = {
    idLiability: 0,
    dueDate: '',
    name: '',
    amount: 0,
    typeLiability: 'EQUITY',
    categorieLiability: 'SHARE'
    // add other fields if needed
  };

  isEditMode = false;

  constructor(
    private liabilityService: FinanceAndAccountingProcessRestControllerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      // Pass an object { id: number }
      this.liabilityService.findByIdLiability({ id: +idParam }).subscribe({
        next: (data: Liability) => {
          this.liability = data;
        },
        error: (err: any) => console.error('Error fetching liability', err)
      });
    }
    
  }
  private parseErrorBlob(blob: Blob): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      try {
        const errorResponse = JSON.parse(reader.result as string);
        console.error('Server error details:', errorResponse);
      } catch (error) {
        console.error('Failed to parse error blob:', error);
      }
    };
    reader.readAsText(blob);
  }

  onSubmit(): void {
      // 'updateLiability' expects { id: number, body: Liability }
      if (this.isEditMode) {
        const idToUpdate = this.liability.idLiability; // ou this.liability.id si vous avez renommé le champ
        if (!idToUpdate || idToUpdate <= 0) {
          console.error("Invalid or missing id, cannot update liability.");
          return;
        }
        this.liabilityService.updateLiability({
          id: idToUpdate,
          body: this.liability
        }).subscribe({
          next: (updated: Liability) => {
            alert('Liability updated successfully!');
            this.router.navigate(['/liability-list']);
          },
          error: (err: any) => {
            console.error('Error updating liability', err);
            if (err.error instanceof Blob) {
              this.parseErrorBlob(err.error);
            }
          }
        });
    } else {
      // If there's NO createLiability method, check your OpenAPI for the correct name:
      // Possibly "addLiability" or "saveLiability"
      this.liabilityService.addLiability({
        body: this.liability
      }).subscribe({
        next: () => {
          alert('Liability created successfully!');
          this.router.navigate(['/liability-list']);
        },
        error: (err: any) => {
          console.error('Error creating liability', err);
          if (err.error instanceof Blob) {
            this.parseErrorBlob(err.error);
          }
        }
        
      });
    }
  }
}