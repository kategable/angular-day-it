import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RenewDirective } from './renew.directive';


@NgModule({
  declarations: [
    AppComponent,
    RenewDirective
  ],
  imports: [
    BrowserModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
