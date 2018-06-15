import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<h1>{{title}}</h1>`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
