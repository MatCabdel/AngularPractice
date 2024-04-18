import { Component, inject } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {


  private helloWorldService = inject(HelloWorldService);

  onClick() {
    console.log(this.helloWorldService.getHelloWorld());
  }


  /*
  isThisIngredientVital: boolean = false;
  isGuestListDisplayed: boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"]; */
}
