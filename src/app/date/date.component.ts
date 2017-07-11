import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions;     
  constructor() { 
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

}
