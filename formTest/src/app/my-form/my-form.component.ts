import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {

  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  };

  onSubmit(): void {
    // form submitted
    console.log(this.newOrder);
  }
}
