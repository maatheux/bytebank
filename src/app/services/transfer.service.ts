import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencias.model';

@Injectable({
  providedIn: 'root'
  // Nas versões anteriores precisavamos add o service em cada module que necessitariamos usar
  // Mas com provideIn: 'root' podemos usar em qualquer lugar do projeto sem setar no module
  // Poderia ser - provideIn: AppModule ou provideIn: NewTransferModule
})
// Com o injectable, conseguimos invocar a classe desse serviço dentro do constructor de qualquer component
export class TransferService {

  private transferList: any[];
  private url = 'http://localhost:3000/transferencias'; // o caminho para api rest

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  allTransfers(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
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
