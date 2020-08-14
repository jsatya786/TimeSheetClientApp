import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimesheetService } from 'src/services/timesheet.service';
// import * as $ from 'jquery'; 
// declare var $: any;
@Component({
  selector: 'app-new-time-sheet-slot',
  templateUrl: './new-time-sheet-slot.component.html',
  styleUrls: ['./new-time-sheet-slot.component.css']
})
export class NewTimeSheetSlotComponent implements OnInit {
  saveTimeForm: FormGroup;
  personsList:any;
  constructor(private service:TimesheetService,private router:Router) { }

  ngOnInit(): void {
  //   $(function () {
  //     alert('jquesry is running.');
  //     $('#datetimepicker1').datetimepicker();
  // });
    this.buildFormControls();
    this.getPersonsList();

  }
  buildFormControls() {
    this.saveTimeForm=new FormGroup({      
      Pid: new FormControl('',Validators.required),
      Date: new FormControl('',Validators.required),
      HoursWorked:new FormControl('',Validators.required)
    });
  }
  getPersonsList(){
    this.service.getPersonsList().subscribe(res=>{
      console.log("res:",res);
      this.personsList=res;
    }); 
  }
  navigaeToList() {
    this.router.navigate(["EmplyeesTimeSheet"]);
  }
  onAdd(){
    console.log('saveTimeForm :',this.saveTimeForm.value);
    let formData=JSON.stringify(this.saveTimeForm.value);
    console.log('json string:',formData);
    this.service.saveTime(formData).subscribe(data=>{
console.log('record is added.');
    });
  }

}
