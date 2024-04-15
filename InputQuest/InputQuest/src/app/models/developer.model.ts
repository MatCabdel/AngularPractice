import { Skill } from "./skill.model";

export interface Developer {
  lastname: string;
  firstname: string;
  age: number;
  gender: string;
  bio: string
  listSkill: Skill [];
}