import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { AccountStatementComponent } from "./account-statement/account-statement.component";
import { NewTransferComponent } from "./new-transfer/new-transfer.component";

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'}, // sempre que o caminho for vazio irá redirecionar para o extrato e o pathMathc irá redirecionar a pagina toda
  {path: 'extrato', component: AccountStatementComponent},
  {path: 'nova-transferencia', component: NewTransferComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exportamos para o app.module para que a aplicação toda utilize ele
})

export class AppRoutingModule {

}
