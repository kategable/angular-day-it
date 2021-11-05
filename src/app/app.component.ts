import { UserService } from './user.service';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'AngularDay.It 2021';
  filters: string[] = [];
  date: string | null = '';
  flag = false;

  constructor(private readonly userService: UserService){

  }
  async ngOnInit(): Promise<void> {
    this.flag = await this.userService.needsRenewFlag();
    if(this.flag){
      this.date = `Renew by ${this.userService.renewDate}`;
    }
  }


  ssnChanged(checkbox: any) {
    if (checkbox.currentTarget.checked) {
      this.filters.push('ssn');
      this.filters = [...this.filters];
      return;
    }
    this.filters= this.filters.filter(i=> i==="ssn")
  }
  dobChanged(checkbox: any) {
    if (checkbox.currentTarget.checked) {
      this.filters.push('dob');
      this.filters = [...this.filters];

      return;
    }
    this.filters= this.filters.filter(i=> i==="dob")

  }
}
