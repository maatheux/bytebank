import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  value: number;
  valueTo: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferAction() {
    console.log('Valor transferido!');
    console.log('Valor:', this.value);
    console.log('Destino:', this.valueTo);
  }

}
