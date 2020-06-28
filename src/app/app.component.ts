import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childCounter: number;

  getCounter(data: number) {
    this.childCounter = data;
  }
}
