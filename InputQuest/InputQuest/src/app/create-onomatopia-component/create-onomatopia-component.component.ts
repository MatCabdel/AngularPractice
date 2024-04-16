import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrl: './create-onomatopia-component.component.scss'
})
export class CreateOnomatopiaComponentComponent {

  newOnomatopia : string = ""

@Output()
  sendOnomatopiaToParent : EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    const onomatopeCreate = this.newOnomatopia
    this.sendOnomatopiaToParent.emit(onomatopeCreate);
    console.log(onomatopeCreate)
  }
}
