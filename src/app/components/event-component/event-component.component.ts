import { Component } from '@angular/core';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent {

  valueNumber: number = 0;

  updateNumber(): void {
    this.valueNumber+=1;
  }

  constructor(){}

}
