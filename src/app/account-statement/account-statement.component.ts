import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss']
})
export class AccountStatementComponent implements OnInit {

  transferData: any[]; // receber os dados do component pai

  constructor( private service: TransferService ) { }

  ngOnInit(): void {
    this.transferData = this.service.transfers
  }

}
