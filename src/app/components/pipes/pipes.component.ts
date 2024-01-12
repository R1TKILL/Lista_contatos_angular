import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  text: string = "TESTANDO O OUTRO PIPE OPERATORS!";
  text2: string = "OUTRO TESTE DE PIPE!";

  today: Date = new Date();


  constructor(){}

}
