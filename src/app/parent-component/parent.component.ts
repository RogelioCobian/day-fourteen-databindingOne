import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  // tslint:disable-next-line:no-inferrable-types
  childTitle: string = 'Text passed to child';
}
