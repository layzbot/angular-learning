import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compcom',
  templateUrl: './compcom.component.html',
  styleUrls: ['./compcom.component.css']
})
export class CompcomComponent implements OnInit {

  parentData = '';
  childData = '';
  constructor() { }

  getChildData(data: string) {
    this.childData = data;
  }

  ngOnInit(): void {
  }

}
