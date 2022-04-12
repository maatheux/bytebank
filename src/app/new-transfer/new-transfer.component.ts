import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  value: number;
  valueTo: number;

  constructor(private service: TransferService, private router: Router) { }

  ngOnInit(): void {
  }

  transferAction() {
    console.log('Valor transferido!');
    const valuesToEmit = {value: this.value, valueTo: this.valueTo};
    this.service.addNewTransfer(valuesToEmit).subscribe(result => {
      console.log(result);
      this.clearInput();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error));
  }

  clearInput() {
    this.value = 0;
    this.valueTo = 0;
  }

}
