import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktailService.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

 public cocktailList : Cocktail []= [
    {
      name: "Mojito",
      price: "8 euros",
      picture: "https://picsum.photos/id/237/200/300"
    },
    {
      name: "Gin tonic",
      price: "7 euros",
      picture: "https://picsum.photos/id/237/200/300"
    },
    {
      name: "Cuba Libre",
      price: "7 euros",
      picture: "https://picsum.photos/id/237/200/300"
    }

  ]
  
  constructor() { }

  getCocktails() {
    return this.cocktailList
  }
}
