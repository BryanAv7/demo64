import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent,RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  resultado = 0;
  numero1: number = 0;
  numero2: number = 0;

  title = 'Demostracion UPS';
  user = 'ctimbi@ups.edu.ec'



  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }


}



