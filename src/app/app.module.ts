import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { ParentComponent } from './parent-component/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
