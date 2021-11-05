import { FiltersDirective } from './filters.directive';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FiltersDirective
  ],
  imports: [
    BrowserModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
