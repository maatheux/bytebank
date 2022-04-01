import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferData: any;
  testeNum: number = 10;

  transfer($event) {
    console.log($event);
    this.transferData = $event;
  }

  errorMessage($event) {
    window.alert($event)
  }
}
