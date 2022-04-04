import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss']
})
export class AccountStatementComponent implements OnInit {

  @Input() transferData: any[]; // receber os dados do component pai

  constructor() { }

  ngOnInit(): void {
  }

}
