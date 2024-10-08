import { Component } from '@angular/core';
import { Residence } from '../../core/models/Residence';
import { Appartement } from '../../core/models/Appartement';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg' },
    { id: 4, name: 'El Anber', address: 'Manzah 5', image: '../../assets/images/R4.jpg' }
  ];

  listApartments: Appartement[] = [
    { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: 'oui', surfaceTerrace: 20, category: 'S+1', description: 'Appartement S+1', residence: this.listResidences[0], isFavorite: false },
    { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: 'non', surfaceTerrace: 0, category: 'S+2', description: 'Appartement S+2', residence: this.listResidences[0], isFavorite: false },
    { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: 'oui', surfaceTerrace: 30, category: 'S+3', description: 'Appartement S+3', residence: this.listResidences[1], isFavorite: false }
  ];

  selectedResidenceId: number | null = null;
  filteredApartments: Appartement[] = [];
  favoriteApartments: Appartement[] = [];
  searchSurface: number | null = null;

  showApartments(residenceId: number): void {
    this.selectedResidenceId = residenceId;
    this.filterApartmentsBySurface();
  }

  filterApartmentsBySurface(): void {
    if (this.selectedResidenceId !== null) {
      if (this.searchSurface !== null) {
        this.filteredApartments = this.listApartments.filter(apartment => {
            // @ts-ignore
          return apartment.residence.id === this.selectedResidenceId && apartment.surface >= this.searchSurface;
          }
        );
      } else {
        this.filteredApartments = this.listApartments.filter(apartment =>
          apartment.residence.id === this.selectedResidenceId
        );
      }
    } else {
      this.filteredApartments = [];
    }
  }

  likeApartment(apartment: Appartement): void {
    if (!this.favoriteApartments.includes(apartment)) {
      this.favoriteApartments.push(apartment);
      apartment.isFavorite = true;
    }
  }
}
