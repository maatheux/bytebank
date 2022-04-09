import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//importando libs para add o padrão br de hora
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt'); // criando um valor para pt
@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    AccountStatementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // add esse modulo para add funcionalidades para formulários
    HttpClientModule // add metodos para os servico de Http, como get, delete...
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}, // setando portugues br como o padrão
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    } // setando o real como moeda
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
