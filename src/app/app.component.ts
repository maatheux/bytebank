import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferData: any[] = [];

  transfer($event) {
    const transfer = {...$event, date: new Date()}
    this.transferData.push(transfer);
    console.log(transfer);
  }
}
