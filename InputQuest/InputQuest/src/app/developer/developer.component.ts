import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
  newDeveloper: Developer = {
    lastname: 'Pelletier',
    firstname: 'George',
    age: 0,
    gender: '',
    bio: '',
    listSkill: [
      {
        name: 'HTML',
        logo: 'https://picsum.photos/id/237/200/300',
        site: 'www.html.fr',
      },
      {
        name: 'CSS',
        logo: 'https://picsum.photos/id/236/200/300',
        site: 'www.CSS.fr',
      },
      {
        name: 'Angular',
        logo: 'https://picsum.photos/id/238/200/300',
        site: 'www.angular.fr',
      },
    ],
  };
}
