import { Component } from '@angular/core';
import { Order } from './order.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  newOrder: Order = {
    firstName: "",
    lastName: "",
    password: "",
    contact: ""
  };

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newOrder);
  }
}
