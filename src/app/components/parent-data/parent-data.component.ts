//importing the 'Input' of angular/core for to receive the data of parent-component 'app'.
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  //Form of the angular to get the data how parameter of the 'Input'
  @Input() name: string = '';
  //'!' também garante que serão preenchidos os dados.
  @Input() userData!: {email: string, role: string};

  constructor(){}

}
