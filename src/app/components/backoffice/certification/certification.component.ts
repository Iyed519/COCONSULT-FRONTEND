import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certifications: any[] = [];
  selectedCertification: any = null;
  newCertification: any = {
    name: '',
    provider: '',
    dateIssued: ''
  };

  constructor(private certificationService: CertificationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllCertifications();
  }

  

  // Récupérer toutes les certifications
  getAllCertifications(): void {
    this.certifications = [];  // Reset the certifications array
    this.certificationService.getAll().subscribe((data) => {
      this.certifications = data;
    });
  }

  // Récupérer une certification spécifique
  getCertification(id: number): void {
    this.certificationService.getById(id).subscribe((data) => {
      this.selectedCertification = data;
    });
  }

  // Créer ou mettre à jour une certification
  saveCertification(): void {
    if (this.selectedCertification) {
      // Update existing certification
      this.certificationService.update(this.selectedCertification.id, this.selectedCertification).subscribe(() => {
        this.getAllCertifications();
        this.selectedCertification = null;
        this.showSuccessMessage('Certification updated successfully!');
      });
    } else {
      // Create new certification
      this.certificationService.create(this.newCertification).subscribe(() => {
        this.getAllCertifications();
        this.newCertification = { name: '', provider: '', dateIssued: '' };
        this.showSuccessMessage('Certification added successfully!');
      });
    }
  }
  
  // Add this new method to show the success popup
  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'] // Optional for custom styles
    });}

  // Supprimer une certification
  deleteCertification(id: number): void {
    this.certificationService.delete(id).subscribe(() => {
      this.getAllCertifications();
    });
  }

  // Sélectionner une certification pour mise à jour
  selectForUpdate(certification: any): void {
    this.selectedCertification = { ...certification }; // Cloner pour éviter les mutations directes
  }

  // Annuler la mise à jour
  cancelUpdate(): void {
    this.selectedCertification = null;
  }

  
}
