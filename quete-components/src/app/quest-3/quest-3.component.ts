import { Component } from '@angular/core';

@Component({
  selector: 'app-quest-3',
  templateUrl: './quest-3.component.html',
  styleUrl: './quest-3.component.scss'
})
export class Quest3Component {
  title: string = 'Bonjour ! ';
  isAdmin: boolean = true;

  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
