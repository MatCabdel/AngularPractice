import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {

  @Input()
  skillsData!: Skill;
}
