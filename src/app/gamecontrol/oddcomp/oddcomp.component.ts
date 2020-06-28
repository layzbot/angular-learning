import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oddcomp',
  templateUrl: './oddcomp.component.html',
  styleUrls: ['./oddcomp.component.css']
})
export class OddcompComponent implements OnInit {

  @Input() oddNumber: number;
  constructor() { }

  ngOnInit(): void {
  }

}
