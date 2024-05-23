import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historial: string[] = [];

  constructor() { }

  addToHistorial(result: string) {
    this.historial.push(result);
  }

  clearHistorial() {
    this.historial = [];
  }

  getHistorial() {
    return this.historial;
  }
}

