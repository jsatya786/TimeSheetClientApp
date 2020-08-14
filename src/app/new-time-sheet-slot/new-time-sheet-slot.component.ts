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
      
  //     $(".form_datetime").datetimepicker({        
  //       format: "dd MM yyyy - hh:ii"
  //   });
  // });
    this.buildFormControls();
    this.getPersonsList();

  }
  buildFormControls() {
    this.saveTimeForm=new FormGroup({    
      Id: new FormControl(0),  
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
    this.service.saveTime(this.saveTimeForm.value).subscribe(data=>{
      //console.log('record is added.');
    });
  }

}
