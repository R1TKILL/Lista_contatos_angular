import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  //Class typescrip, export the properties with {{}} in HTML.

  name: string = "Junior";
  age: number = 21;
  job: string = "Developer (if god wills)";
  hobbies: string[] = ["to program", "to game", "to study"];
  car = {
    name: "Gran Siena",
    color: "black",
    year: "2015"
  }

  constructor(){}

}
