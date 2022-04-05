import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // Nas versões anteriores precisavamos add o service em cada module que necessitariamos usar
  // Mas com provideIn: 'root' podemos usar em qualquer lugar do projeto sem setar no module
  // Poderia ser - provideIn: AppModule ou provideIn: NewTransferModule
})
// Com o injectable, conseguimos invocar a classe desse serviço dentro do constructor de qualquer component
export class TransferService {

  transferList: any[];

  constructor() {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  addNewTransfer(transfer: any) {
    this.setdate(transfer);
    /* const transfer = {...$event, date: new Date()} */
    this.transferList.push(transfer);
  }

  setdate(transfer: any) {
    transfer.date = new Date();
  }

}
