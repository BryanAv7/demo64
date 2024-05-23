import { Component } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.scss'
})
export class AcercadeComponent {

  msg: string = 'GG'  
  messages: String[] = []
    constructor(private contactosService: ContactosService) {

    }

ngOnInit() {

  this.messages= this.contactosService.get()
}
agregar() {

this.contactosService.add(this.msg)
}


limpiar() {

  this.contactosService.clear()
  this.ngOnInit()
}
}
