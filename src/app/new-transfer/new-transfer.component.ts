import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output() whenTransfering = new EventEmitter<any>(); // irá fazer a exportação dos dados

  value: number;
  valueTo: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferAction() {
    console.log('Valor transferido!');
    const valuesToEmit = {value: this.value, valueTo: this.valueTo};
    this.whenTransfering.emit(valuesToEmit);
    this.clearInput();
  }

  clearInput() {
    this.value = 0;
    this.valueTo = 0;
  }

}
