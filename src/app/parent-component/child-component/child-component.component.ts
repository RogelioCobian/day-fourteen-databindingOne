import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<h1>{{title}}</h1>
              <br>
              <button type="button" (click)="notifyParent($event)">Click Me!</button>`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() title: string;
  @Output() emmitter = new EventEmitter<string>();
  // tslint:disable-next-line:no-inferrable-types
  helloWorld: string = 'Hello World!';
  constructor() { }

  notifyParent() {
    this.emmitter.emit(this.helloWorld);
  }
  ngOnInit() {
  }

}
