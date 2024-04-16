import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillsComponent } from './skills/skills.component';
import { CreateOnomatopiaComponentComponent } from './create-onomatopia-component/create-onomatopia-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillsComponent,
    CreateOnomatopiaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
