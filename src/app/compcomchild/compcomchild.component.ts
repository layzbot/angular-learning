import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compcomchild',
  templateUrl: './compcomchild.component.html',
  styleUrls: ['./compcomchild.component.css']
})
export class CompcomchildComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('passedParentData') parentData: string;
  childData = '';
  // tslint:disable-next-line: no-output-rename
  @Output('transmittedChildData') childDataEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  textChangeEmitter(event) {
    this.childDataEmitter.emit(event.target.value);
  }
}
