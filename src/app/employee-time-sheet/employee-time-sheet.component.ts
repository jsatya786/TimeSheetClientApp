import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/services/timesheet.service';
import { Router } from '@angular/router';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-employee-time-sheet',
  templateUrl: './employee-time-sheet.component.html',
  styleUrls: ['./employee-time-sheet.component.css']
})
export class EmployeeTimeSheetComponent implements OnInit {
  countries = COUNTRIES;
  list:any;
  constructor(private service:TimesheetService,private router:Router) { }

  ngOnInit(): void {
    this.getTimeSheet();
  }
  getTimeSheet(){
    
    this.service.getTimeSheet().subscribe(res=>{
      console.log("res:",res);
      this.list=res;
    });    
  }
  navigateTo() {
    this.router.navigate(['New']);
  }
}
