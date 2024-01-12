import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {

  //Preparando para transmitir o evento.
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor(){}

  //Transmitindo o evento!
  handleClick(): void {
    this.changeNumber.emit();
  }

}
