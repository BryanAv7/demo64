import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';

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

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private apiUrl = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getNationalCases(country: string): Observable<CovidData | null> {
    return this.http.get<{ [key: string]: CovidData }>(this.apiUrl).pipe(
      map((data: { [key: string]: CovidData }) => {
        return Object.values(data).find(item => item.country === country) || null;
      })
    );
  }

  addCovidData(covidData: CovidData) {
    return addDoc(collection(this.firestore, 'covidData'), { ...covidData });
  }

  getCovidData() {
    return getDocs(query(collection(this.firestore, 'covidData')));
  }
}
