import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resta',
  standalone: true,
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.scss'],
  imports: [ FormsModule ],
})
export class RestaComponent {
  resultado2: number = 0;
  numero3: number = 0;
  numero4: number = 0;

  restar(): void {
    this.resultado2 = this.numero3 - this.numero4;
  }
}

