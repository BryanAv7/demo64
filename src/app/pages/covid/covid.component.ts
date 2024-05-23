import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidService } from '../../services/covid.service';
import { FormsModule } from '@angular/forms';

interface CovidData {
  infected: number;
  tested: string | null;
  recovered: number;
  deceased: number;
  country: string;
  moreData: string;
  historyData: string;
  sourceUrl: string;
  lastUpdatedApify: string;
}

@Component({
  selector: 'app-covid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  covidData: CovidData | null = null;
  savedCovidData: any[] = [];

  constructor(private covidService: CovidService) {}

  selectedCountry: string = 'Algeria';

  countries: string[] = ['Algeria', 'Austria', 'Azerbaijan', 'Brazil', 'China', 
  'Denmark', 'Egypt', 'France', 'Germany', 'India', 'Italy', 'Japan', 'Mexico', 'Netherlands',
  'New Zealand', 'Norway', 'Portugal', 'Russia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom', 'United States'];

  onCountryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCountry = selectElement.value;
    this.fetchCovidData();
  }

  fetchCovidData() {
    this.covidService.getNationalCases(this.selectedCountry).subscribe(data => {
      this.covidData = data;
    });
  }

  saveCovidData() {
    if (this.covidData) {
      this.covidService.addCovidData(this.covidData).then(() => {
        this.fetchSavedCovidData();
      });
    }
  }

  fetchSavedCovidData() {
    this.covidService.getCovidData().then(data => {
      this.savedCovidData = data.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      }));
    });
  }

  ngOnInit() {
    this.fetchCovidData();
    this.fetchSavedCovidData();
  }
}

