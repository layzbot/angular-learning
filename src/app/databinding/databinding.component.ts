import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html'
})
export class DatabindingComponent implements OnInit {

  userName = '';
  constructor() { }

  ngOnInit(): void {
  }

  getUserNameLen() {
    return this.userName.length;
  }
  isResetDisabled = () => this.userName.length === 0;
  resetUser = () => this.userName = '';
}
