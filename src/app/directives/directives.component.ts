import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent implements OnInit {

  displayPara = 'block';
  counter = 0;
  counterArr = [];

  constructor() { }

  ngOnInit(): void {
  }

  getStyle() {
    return  {'background-color': 'blue', color: 'white'};
  }

  toggleDisplayPara() {
    this.counter++;
    this.counterArr.push(this.counter);

    if (this.displayPara === 'block') {
      this.displayPara = 'none';
    } else {
      this.displayPara = 'block';
    }
  }
}
