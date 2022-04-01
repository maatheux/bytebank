import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output() whenTransfering = new EventEmitter<any>(); // irá fazer a exportação dos dados
  @Output() errorValue = new EventEmitter<any>();

  @Input() testeNumber: number;

  value: number;
  valueTo: number;

  constructor() { }

  ngOnInit(): void {
    this.value = this.testeNumber;
  }

  transferAction() {
    console.log('Valor transferido!');
    if (this.isValid()) {
      const valuesToEmit = {value: this.value, valueTo: this.valueTo};
      this.whenTransfering.emit(valuesToEmit);
    }
    this.clearInput();
  }

  private isValid() {
    const valueIsValid = this.value > 0;
    if (!valueIsValid) {
      this.errorValue.emit('Informe um valor válido!');
    }
    return valueIsValid;
  }

  clearInput() {
    this.value = 0;
    this.valueTo = 0;
  }

}
