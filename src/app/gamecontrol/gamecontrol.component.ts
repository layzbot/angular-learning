import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  constructor() { }
  @Output() counterEmitter = new EventEmitter<number>();
  counter = 0;
  intervalId: any;

  initiateGame() {
    this.intervalId = setInterval(() => {
      this.counter++;
      this.counterEmitter.emit(this.counter);
      console.log(this.counter);
    }, 1000);
}

  stopGame() {
    clearInterval(this.intervalId);
  }
  ngOnInit(): void {
  }
}
