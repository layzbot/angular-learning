import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evencomp',
  templateUrl: './evencomp.component.html',
  styleUrls: ['./evencomp.component.css']
})
export class EvencompComponent implements OnInit {

  @Input() evenNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

}
