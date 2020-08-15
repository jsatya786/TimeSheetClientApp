import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/services/timesheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-time-sheet',
  templateUrl: './employee-time-sheet.component.html',
  styleUrls: ['./employee-time-sheet.component.css']
})
export class EmployeeTimeSheetComponent implements OnInit {
  list:any;
  constructor(private service:TimesheetService,private router:Router) { }

  ngOnInit(): void {
    this.getTimeSheet();
  }
  getTimeSheet(){
    
    this.service.getTimeSheet().subscribe(res=>{
      console.log("res:",res);
      this.list=res;
      error=>{console.log('server error occured.',error)};
    });    
  }
  navigateTo() {
    this.router.navigate(['New']);
  }
}
