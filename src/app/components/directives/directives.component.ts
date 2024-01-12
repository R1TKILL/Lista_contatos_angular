import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  color:string = "green";

  classes:string[] = ["green-title","small-title"];

  constructor(){}

}
