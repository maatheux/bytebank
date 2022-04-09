import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencias.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss']
})
export class AccountStatementComponent implements OnInit {

  transferData: any[];

  constructor( private service: TransferService ) { }

  ngOnInit(): void {
    this.service.allTransfers().subscribe((transfers: Transferencia[]) => {
      console.table(transfers);
      this.transferData = transfers;
    })
  }

}
