import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = false;
  isGuestListDisplayed: boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}
