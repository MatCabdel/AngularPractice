import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktailService.model';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  public cocktailService = inject(CocktailService);
  public cocktails: Cocktail[]= []

  onClick() {
    console.log(this.cocktailService.getCocktails());
    return (this.cocktails = this.cocktailService.getCocktails());
  }

}
